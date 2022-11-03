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
import { __, _x, sprintf } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { CheckboxControl } from '@wordpress/components';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

/**
 * Module constants
 */
const DEFAULT_QUERY = {
  per_page: -1,
  orderby: 'count',
  order: 'desc',
  _fields: 'id,name',
};
const isSameTermName = ( termA, termB ) => termA.toLowerCase() === termB.toLowerCase();

/**
 * Returns a term object with name unescaped.
 * The unescape of the name property is done using lodash unescape function.
 *
 * @param {Object} term The term object to unescape.
 *
 * @return {Object} Term object with name property unescaped.
 */
const unescapeTerm = ( term ) => {
  return {
    ...term,
    name: unescapeString( term.name ),
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
const unescapeTerms = ( terms ) => {
  return map( terms, unescapeTerm );
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
    super( ...arguments );
    this.onChange = this.onChange.bind( this );
    this.state = {
      availableTerms: [],
      selectedTerms: [],
    };
  }

  componentDidMount() {
    this.fetchTerms();
  }

  fetchTerms( params = {} ) {
    const { taxonomy } = this.props;
    const query = Object.assign({}, DEFAULT_QUERY, params);

    const request = apiFetch( {
      path: addQueryArgs( `/wp/v2/${ taxonomy.rest_base }`, query ),
    } );
    request.then( unescapeTerms ).then( ( terms ) => {
      this.setState({
        availableTerms: terms,
        selectedTerms: this.props.terms
      });
    });

    return request;
  }

  onChange(id, checked) {
    let { selectedTerms } = this.state;

    const newTerms = checked ? [...selectedTerms, id] : selectedTerms.filter(term => term !== id);

    this.setState({
      selectedTerms: newTerms,
    });

    return this.props.onUpdateTerms(
      newTerms,
      this.props.taxonomy.rest_base
    );
  }

  render() {
    const { slug, taxonomy, hasAssignAction } = this.props;

    if ( ! hasAssignAction ) {
      return null;
    }

    const { availableTerms, selectedTerms } = this.state;
    const newTermLabel = get(
      taxonomy,
      [ 'labels', 'add_new_item' ],
      slug === 'post_tag' ? __( 'Add New Tag' ) : __( 'Add New Term' )
    );
    const singularName = get(
      taxonomy,
      [ 'labels', 'singular_name' ],
      slug === 'post_tag' ? __( 'Tag' ) : __( 'Term' )
    );
    const termAddedLabel = sprintf( _x( '%s added', 'term' ), singularName );
    const termRemovedLabel = sprintf( _x( '%s removed', 'term' ), singularName );
    const removeTermLabel = sprintf( _x( 'Remove %s', 'term' ), singularName );

    return availableTerms.map(({ id, name }) =>
      <CheckboxControl
        key={name}
        label={name}
        value={id}
        checked={selectedTerms.includes(id)}
        onChange={checked => this.onChange(id, checked)}
      />
    );
  }
}

export default compose(
  withSelect( ( select, { slug } ) => {
    const { getCurrentPost } = select( 'core/editor' );
    const { getTaxonomy } = select( 'core' );
    const taxonomy = getTaxonomy( slug );
    return {
      hasCreateAction: taxonomy ? get( getCurrentPost(), [ '_links', 'wp:action-create-' + taxonomy.rest_base ], false ) : false,
      hasAssignAction: taxonomy ? get( getCurrentPost(), [ '_links', 'wp:action-assign-' + taxonomy.rest_base ], false ) : false,
      terms: taxonomy ? select( 'core/editor' ).getEditedPostAttribute( taxonomy.rest_base ) : [],
      taxonomy,
    };
  } ),
  withDispatch( ( dispatch ) => {
    return {
      onUpdateTerms( terms, restBase ) {
        dispatch( 'core/editor' ).editPost( { [ restBase ]: terms } );
      },
    };
  } ),
)( AssignOnlyFlatTermSelector );
