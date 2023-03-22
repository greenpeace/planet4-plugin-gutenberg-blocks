import {
  find,
  get,
  invoke,
  isEmpty,
  map,
  throttle,
  unescape as unescapeString,
  uniqBy,
} from 'lodash';

/**
 * WordPress dependencies
 */
import {Component} from '@wordpress/element';
import {FormTokenField} from '@wordpress/components';
import {withSelect, withDispatch} from '@wordpress/data';
import {compose} from '@wordpress/compose';
import {addQueryArgs} from '@wordpress/url';

const {__, _x, sprintf} = wp.i18n;
const {apiFetch} = wp;

/**
 * Module constants
 */
const DEFAULT_QUERY = {
  per_page: -1,
  orderby: 'count',
  order: 'desc',
  _fields: 'id,name',
};
const MAX_TERMS_SUGGESTIONS = 20;
const isSameTermName = (termA, termB) => termA.toLowerCase() === termB.toLowerCase();

/**
 * Returns a term object with name unescaped.
 * The unescape of the name property is done using lodash unescape function.
 *
 * @param {Object} term The term object to unescape.
 *
 * @return {Object} Term object with name property unescaped.
 */
const unescapeTerm = term => {
  return {
    ...term,
    name: unescapeString(term.name),
  };
};

/**
 * Returns an array of term objects with names unescaped.
 * The unescape of each term is performed using the unescapeTerm function.
 *
 * @param {Object[]} terms Array of term objects to unescape.
 *
 * @return {Object[]} Array of term objects unescaped.
 */
const unescapeTerms = terms => {
  return map(terms, unescapeTerm);
};

/**
 * The logic of this component was copied from https://github.com/WordPress/gutenberg/blob/master/packages/editor/src/components/post-taxonomies/flat-term-selector.js
 * initially, then the functionality of creating non-existing terms was removed from it.
 *
 * I considered extending the component instead, but that seemed inappropriate as we're not adding behavior but removing some.
 * Additionally this makes it easier to further customize this component.
 */
class AssignOnlyFlatTermSelector extends Component {
  constructor() {
    super(...arguments);
    this.onChange = this.onChange.bind(this);
    this.searchTerms = throttle(this.searchTerms.bind(this), 500);
    this.state = {
      loading: !isEmpty(this.props.terms),
      availableTerms: [],
      selectedTerms: [],
    };
  }

  componentDidMount() {
    if (isEmpty(this.props.terms)) {
      return;
    }

    this.initRequest = this.fetchTerms({
      include: this.props.terms.join(','),
      per_page: -1,
    });
    this.initRequest.then(
      () => {
        this.setState({loading: false});
      },
      xhr => {
        if (xhr.statusText === 'abort') {
          return;
        }
        this.setState({
          loading: false,
        });
      }
    );
  }

  componentWillUnmount() {
    invoke(this.initRequest, ['abort']);
    invoke(this.searchRequest, ['abort']);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.terms !== this.props.terms) {
      this.updateSelectedTerms(this.props.terms);
    }
  }

  fetchTerms(params = {}) {
    const {taxonomy} = this.props;
    const query = Object.assign({}, DEFAULT_QUERY, params);

    const request = apiFetch({
      path: addQueryArgs(`/wp/v2/${taxonomy.rest_base}`, query),
    });
    request.then(unescapeTerms).then(terms => {
      this.setState(state => ({
        availableTerms: state.availableTerms.concat(
          terms.filter(term => !find(state.availableTerms, availableTerm => availableTerm.id === term.id))
        ),
      }));
      this.updateSelectedTerms(this.props.terms);
    });

    return request;
  }

  updateSelectedTerms(terms = []) {
    const selectedTerms = terms.reduce((accumulator, termId) => {
      const termObject = find(this.state.availableTerms, term => term.id === termId);
      if (termObject) {
        accumulator.push(termObject.name);
      }

      return accumulator;
    }, []);
    this.setState({
      selectedTerms,
    });
  }

  onChange(termNames) {
    const uniqueTerms = uniqBy(termNames, term => term.toLowerCase());
    const allowedTerms = uniqueTerms.filter(termName =>
      find(this.state.availableTerms, term => isSameTermName(term.name, termName))
    );
    this.setState({selectedTerms: allowedTerms});
    const termNamesToIds = (names, availableTerms) => {
      return names
        .map(termName =>
          find(availableTerms, term => isSameTermName(term.name, termName)).id
        );
    };

    return this.props.onUpdateTerms(
      termNamesToIds(allowedTerms, this.state.availableTerms),
      this.props.taxonomy.rest_base
    );
  }

  searchTerms(search = '') {
    invoke(this.searchRequest, ['abort']);
    this.searchRequest = this.fetchTerms({search});
  }

  render() {
    const {slug, taxonomy, hasAssignAction} = this.props;

    if (!hasAssignAction) {
      return null;
    }

    const {loading, availableTerms, selectedTerms} = this.state;
    const termNames = availableTerms.map(term => term.name);
    const newTermLabel = get(
      taxonomy,
      ['labels', 'add_new_item'],
      slug === 'post_tag' ? __('Add New Tag') : __('Add New Term')
    );
    const singularName = get(
      taxonomy,
      ['labels', 'singular_name'],
      slug === 'post_tag' ? __('Tag') : __('Term')
    );
    const termAddedLabel = sprintf(_x('%s added', 'term'), singularName); // eslint-disable-line @wordpress/i18n-translator-comments
    const termRemovedLabel = sprintf(_x('%s removed', 'term'), singularName); // eslint-disable-line @wordpress/i18n-translator-comments
    const removeTermLabel = sprintf(_x('Remove %s', 'term'), singularName); // eslint-disable-line @wordpress/i18n-translator-comments

    return (
      <FormTokenField
        value={selectedTerms}
        suggestions={termNames}
        onChange={this.onChange}
        onInputChange={this.searchTerms}
        maxSuggestions={MAX_TERMS_SUGGESTIONS}
        disabled={loading}
        label={newTermLabel}
        messages={{
          added: termAddedLabel,
          removed: termRemovedLabel,
          remove: removeTermLabel,
        }}
      />
    );
  }
}

export default compose(
  withSelect((select, {slug}) => {
    const {getCurrentPost} = select('core/editor');
    const {getTaxonomy} = select('core');
    const taxonomy = getTaxonomy(slug);
    return {
      hasCreateAction: taxonomy ? get(getCurrentPost(), ['_links', 'wp:action-create-' + taxonomy.rest_base], false) : false,
      hasAssignAction: taxonomy ? get(getCurrentPost(), ['_links', 'wp:action-assign-' + taxonomy.rest_base], false) : false,
      terms: taxonomy ? select('core/editor').getEditedPostAttribute(taxonomy.rest_base) : [],
      taxonomy,
    };
  }),
  withDispatch(dispatch => {
    return {
      onUpdateTerms(terms, restBase) {
        dispatch('core/editor').editPost({[restBase]: terms});
      },
    };
  })
)(AssignOnlyFlatTermSelector);
