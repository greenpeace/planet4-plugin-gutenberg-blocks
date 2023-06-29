import {Button, ButtonGroup, PanelBody} from '@wordpress/components';
import {InspectorControls, MediaUpload, useBlockProps} from '@wordpress/block-editor';
import {createPortal} from 'react-dom';
import ArchivePicker from './styles/master-theme/assets/src/js/Components/ArchivePicker';
import assign from 'lodash.assign';

const {addFilter} = wp.hooks;
const {Fragment, useState} = wp.element;
const {__} = wp.i18n;

// Enable spacing control on the following blocks
const targetBlocks = [
  'core/image',
];

const captionStyleOptions = [
  {
    label: __('Medium'),
    value: 'medium',
  },
];

const captionAlignmentOptions = [
  {
    label: __('Left'),
    value: 'left',
  },
  {
    label: __('Center'),
    value: 'center',
  },
  {
    label: __('Right'),
    value: 'right',
  },
];

export const setupImageBlockExtension = function() {
  addExtraAttributes();
  addExtraControls();
  addMediaArchiveOption();
};



export const addMediaArchiveOption = function() {
  const {createHigherOrderComponent} = wp.compose;

  const withUploadButton = createHigherOrderComponent(BlockEdit => {
    return props => {
      if (props.name !== 'core/image') {
        return <BlockEdit {...props} />;
      }

      const {attributes, setAttributes} = props;
      const {url, alt} = attributes;
      const [showElt, setShowElt] = useState(false);
      const blockProps = useBlockProps();
      const MediaArchivePopUp = () => {
        return (
          <div className="media-archive-modal">
            <div className="header">
              <h4>Media Archive</h4>
              <span onClick={() => setShowElt(false)} role="presentation">X</span>
              <ArchivePicker />
            </div>
          </div>
        );
      };

      return (
        <Fragment>
          <div {...blockProps}>
            <BlockEdit {...props} />
            <div className="media-archive-btn">
              <MediaUpload
                onSelect={media =>
                  setAttributes({url: media.url, alt: media.alt})}
                type="image"
                value={{url, alt}}
                render={() => (
                  <Button onClick={() => setShowElt(true)} isTertiary>
                    Media Archive
                  </Button>
                )}
              />
            </div>
          </div>
          {showElt && createPortal(<MediaArchivePopUp />, document.body)}
        </Fragment>
      );
    };
  }, 'withUploadButton');

  addFilter('editor.BlockEdit', 'planet4-blocks/overrides/image-block-layout', withUploadButton);
};


const addExtraAttributes = function() {
  const addCaptionStyleAttributes = (settings, name) => {
  // Do nothing if it's another block than our defined ones.
    if (!targetBlocks.includes(name)) {
      return settings;
    }

    // Use Lodash's assign to gracefully handle if attributes are undefined
    settings.attributes = assign(settings.attributes, {
      captionStyle: {
        type: 'string',
        default: captionStyleOptions[0].value,
      },
      captionAlignment: {
        type: 'string',
        default: captionAlignmentOptions[1].value,
      },
    });

    return settings;
  };

  addFilter('blocks.registerBlockType', 'planet4-blocks/overrides/image', addCaptionStyleAttributes);
};

const addExtraControls = function() {
  const {createHigherOrderComponent} = wp.compose;

  const withCaptionStyle = createHigherOrderComponent(BlockEdit => {
    return props => {
      // Do nothing if it's another block than our defined ones.
      if (!targetBlocks.includes(props.name)) {
        return (
          <BlockEdit {...props} />
        );
      }

      const {captionAlignment} = props.attributes;

      const updateCaptionAlignment = value => {
        const className = props.attributes.className || '';
        const classNameBase = className.split('caption-alignment-')[0];
        const newClassName = classNameBase + ` caption-alignment-${value}`;
        props.setAttributes({className: newClassName});
      };

      return (
        <Fragment>
          <BlockEdit {...props} />
          <InspectorControls>
            <PanelBody
              title={__('Planet4 Image Options')}
              initialOpen={true}
            >
              {/* eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control */}
              <label>Caption alignment</label>
              <ButtonGroup>
                {
                  captionAlignmentOptions.map((option, key) => {
                    return <Button
                      key={key}
                      value={option.value}
                      onClick={() => {
                        props.setAttributes({
                          captionAlignment: option.value,
                        });
                        updateCaptionAlignment(option.value);
                      }}
                      isPrimary={captionAlignment === option.value}
                      isSecondary={captionAlignment !== option.value}>
                      { option.label }
                    </Button>;
                  })
                }
              </ButtonGroup>
            </PanelBody>
          </InspectorControls>
        </Fragment>
      );
    };
  }, 'withCaptionStyle');

  addFilter('editor.BlockEdit', 'planet4-blocks/overrides/image-controls', withCaptionStyle);
};
