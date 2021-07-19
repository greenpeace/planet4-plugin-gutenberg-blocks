import {
  CheckboxControl,
  PanelBody,
  RangeControl
} from '@wordpress/components';
import { Fragment } from '@render';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@hooks';
import { InspectorControls } from '@wordpress/block-editor';

import { URLInput } from '../../components/URLInput/URLInput';
import { EditableColumns } from './EditableColumns';
import { Columns } from './Columns';
import { MAX_COLUMNS_AMOUNT, MIN_COLUMNS_AMOUNT } from './ColumnConstants';
import { getStyleFromClassName } from '../getStyleFromClassName';


const { __ } = wp.i18n;
const { RichText } = wp.blockEditor;

const renderEdit = (attributes, toAttribute, setAttributes, isSelected) => {
  const { columns } = attributes;

  const addColumn = () =>
    setAttributes({
      columns: [
        ...columns,
        {
          title: '',
          description: '',
          attachment: 0,
          cta_link: '',
          cta_text: '',
          link_new_tab: '',
        }
      ]
    });

  const removeColumn = () => setAttributes({ columns: columns.slice(0, -1) });

  if (!isSelected) {
    return null;
  }

  return (
    <Fragment>
      <InspectorControls>
        <PanelBody title={__('Setting', 'planet4-blocks-backend')}>
          <RangeControl
            label={__('Columns', 'planet4-blocks-backend')}
            value={columns.length}
            onChange={value => {
              if (value > columns.length && value <= 4) {
                addColumn();
              } else if (value < columns.length && value >= 2) {
                removeColumn();
              }
            }}
            min={MIN_COLUMNS_AMOUNT}
            max={MAX_COLUMNS_AMOUNT}
          />
          {columns.map((column, index) => {
            const { cta_link, link_new_tab } = column;
            return (
              <div key={`column-${index}`}>
                <URLInput
                  label={__('Column %s link', 'planet4-blocks-backend').replace('%s', index + 1)}
                  placeholder={__('Enter link for column %s', 'planet4-blocks-backend').replace('%s', index + 1)}
                  value={cta_link}
                  onChange={toAttribute('cta_link', index)}
                />
                <CheckboxControl
                  label={__('Open link in new tab', 'planet4-blocks-backend')}
                  value={link_new_tab}
                  checked={link_new_tab}
                  onChange={toAttribute('link_new_tab', index)}
                />
              </div>
            );
          })}
        </PanelBody>
      </InspectorControls>
    </Fragment>
  );
};

export const ColumnsEditor = ({ isSelected, attributes, setAttributes }) => {
  const {
    columns,
    className,
    columns_description,
    columns_title,
    columns_block_style,
    isExample,
    exampleColumns,
  } = attributes;

  // Add className for existing blocks, based on columns_block_style attribute
  useEffect(() => {
    if (columns_block_style && !className) {
      setAttributes({
        className: `is-style-${columns_block_style}`
      });
    }
  }, []);

  // Update column block style based on className attribute
  useEffect(() => {
    const styleClass = getStyleFromClassName(className);
    if (styleClass) {
      setAttributes({
        columns_block_style: styleClass
      });
    }
  }, [className]);

  const { postType } = useSelect(select => ({
    postType: select('core/editor').getCurrentPostType()
  }), []);

  const { columnImages } = useSelect(select => {
    let columnImages = [];
    columns.forEach(column => {
      if (column.attachment && column.attachment > 0) {
        const media_details = select('core').getMedia(column.attachment);
        if (media_details) {
          columnImages[column.attachment] = select('core').getMedia(column.attachment).source_url;
        }
      }
    });
    return { columnImages };
  }, [columns]);

  const toAttribute = (attributeName, index) => value => {
    if (['columns_title', 'columns_description'].includes(attributeName)) {
      setAttributes({
        [attributeName]: value
      });
    } else {
      let columns = JSON.parse(JSON.stringify(attributes.columns));
      columns[index][attributeName] = value;
      setAttributes({ columns });
    }
  }

  return (
    <section className={`block columns-block block-style-${columns_block_style} ${className ?? ''}`}>
      <div className='container'>
        {renderEdit(attributes, toAttribute, setAttributes, isSelected)}
        {!isExample &&
          <header className='articles-title-container'>
            <RichText
              tagName='h2'
              className='page-section-header'
              placeholder={__('Enter title', 'planet4-blocks-backend')}
              value={columns_title}
              onChange={toAttribute('columns_title')}
              keepPlaceholderOnFocus={true}
              withoutInteractiveFormatting
              characterLimit={40}
              multiline='false'
              allowedFormats={[]}
            />
          </header>
        }
        {!isExample &&
          <RichText
            tagName='p'
            className='page-section-description'
            placeholder={__('Enter description', 'planet4-blocks-backend')}
            value={columns_description}
            onChange={toAttribute('columns_description')}
            keepPlaceholderOnFocus={true}
            withoutInteractiveFormatting
            characterLimit={200}
            allowedFormats={['core/bold', 'core/italic']}
          />
        }
        {isExample ?
          <Columns
            columns={exampleColumns}
            isCampaign={postType === 'campaign'}
            columns_block_style={columns_block_style}
            isExample
          /> :
          <EditableColumns
            isCampaign={postType === 'campaign'}
            columns={columns}
            columns_block_style={columns_block_style}
            toAttribute={toAttribute}
            columnImages={columnImages}
          />
        }
      </div>
    </section>
  );
}
