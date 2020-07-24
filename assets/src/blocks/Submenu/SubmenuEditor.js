import { Component, Fragment } from '@wordpress/element';
import { Button, PanelBody } from '@wordpress/components';
import { SubmenuLevel } from "./SubmenuLevel";
import { SubmenuFrontend } from './SubmenuFrontend';
import { InspectorControls } from '@wordpress/block-editor';
import { getSubmenuStyle } from './getSubmenuStyle';

const { __ } = wp.i18n;
const { RichText } = wp.editor;

export class SubmenuEditor extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { postId, attributes, setAttributes } = this.props;
    if (!attributes.postId) {
      setAttributes({ postId });
    }
  }

  renderEdit() {
    const { attributes, setAttributes } = this.props;

    function addLevel() {
      setAttributes({ levels: attributes.levels.concat({ heading: 0, link: false, style: 'none' }) });
    }

    function onHeadingChange(index, value) {
      let levels = JSON.parse(JSON.stringify(attributes.levels));
      levels[index].heading = Number(value);
      setAttributes({ levels });
    }

    function onLinkChange(index, value) {
      let levels = JSON.parse(JSON.stringify(attributes.levels));
      levels[index].link = value;
      setAttributes({ levels });
    }

    function onStyleChange(index, value) {
      let levels = JSON.parse(JSON.stringify(attributes.levels));
      levels[index].style = value; // Possible values: "none", "bullet", "number"
      setAttributes({ levels });
    }

    function removeLevel() {
      setAttributes({ levels: attributes.levels.slice(0, -1) });
    }

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={__('Setting', 'p4ge')}>
            {attributes.levels.map((level, i) => (
              <SubmenuLevel
                {...level}
                onHeadingChange={onHeadingChange}
                onLinkChange={onLinkChange}
                onStyleChange={onStyleChange}
                index={i}
                key={i}
              />
            )
            )}
            <Button
              isPrimary
              onClick={addLevel}
              disabled={attributes.levels.length >= 3 || attributes.levels.slice(-1)[0].heading === 0}
              style={{ marginRight: 5 }}
            >
              Add level
          </Button>
            <Button
              isSecondary
              onClick={removeLevel} disabled={attributes.levels.length <= 1}
            >
              Remove level
          </Button>
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  }

  renderView() {
    const { attributes, setAttributes, className, submenu_style } = this.props;

    const style = getSubmenuStyle(className, submenu_style);

    return (
      <Fragment>
        <section className={`block submenu-block submenu-${style}`}>
          <RichText
            tagName="h2"
            placeholder={__('Enter title', 'p4ge')}
            value={attributes.title}
            onChange={title => setAttributes({ title })}
            keepPlaceholderOnFocus={true}
            withoutInteractiveFormatting
            characterLimit={60}
            multiline="false"
          />
          <SubmenuFrontend isEditing {...attributes} />
        </section>
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        {this.props.isSelected && this.renderEdit()}
        {this.renderView()}
      </Fragment>
    );
  };
}
