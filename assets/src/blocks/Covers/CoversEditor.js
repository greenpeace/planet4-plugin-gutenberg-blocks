import {
  SelectControl,
  PanelBody
} from '@wordpress/components';
import { Fragment } from '@render';
import { useEffect } from '@hooks';

import { InspectorControls } from '@wordpress/block-editor';
import TagSelector from '../../components/TagSelector/TagSelector';
import PostSelector from '../../components/PostSelector/PostSelector';
import PostTypeSelector from '../../components/PostTypeSelector/PostTypeSelector';
import { Covers, COVER_TYPES } from './Covers';
import { useCovers } from './useCovers';
import { getStyleFromClassName } from '../getStyleFromClassName';

const { RichText } = wp.blockEditor;
const { __ } = wp.i18n;

const renderEdit = (attributes, toAttribute) => {
  const { initialRowsLimit, posts, tags, cover_type, post_types } = attributes;

  const rowLimitOptions = [
    { label: __('1 Row', 'planet4-blocks-backend'), value: 1 },
    { label: __('2 Rows', 'planet4-blocks-backend'), value: 2 },
    { label: __('All rows', 'planet4-blocks-backend'), value: 0 },
  ];

  return (
    <InspectorControls>
      <PanelBody title={__('Setting', 'planet4-blocks-backend')}>
        <SelectControl
          label='Rows to display'
          value={initialRowsLimit}
          options={rowLimitOptions}
          onChange={value => toAttribute('initialRowsLimit')(Number(value))}
        />

        {!posts.length &&
          <div>
            <TagSelector
              value={tags}
              onChange={toAttribute('tags')}
            />
            <p className='FieldHelp'>
              {__('Associate this block with Actions that have specific Tags', 'planet4-blocks-backend')}
            </p>
          </div>
        }

        {cover_type === COVER_TYPES.content && !posts.length &&
          <PostTypeSelector
            value={post_types}
            onChange={toAttribute('post_types')}
          />
        }

        {cover_type !== COVER_TYPES.campaign && !tags.length && !post_types.length &&
          <div>
            <label>{__('Manual override', 'planet4-blocks-backend')}</label>
            <PostSelector
              value={posts}
              onChange={toAttribute('posts')}
              placeholder={__('Select articles', 'planet4-blocks-backend')}
              postType={cover_type === COVER_TYPES.content ? 'post' : 'act_page'}
            />
          </div>
        }
      </PanelBody>
    </InspectorControls>
  );
}

const renderView = (attributes, toAttribute) => {
  const { initialRowsLimit, cover_type, title, description, className } = attributes;

  const { covers, loading, row } = useCovers(attributes);

  const coversProps = {
    covers,
    initialRowsLimit,
    row,
    loadMoreCovers: () => {},
    cover_type,
  };

  return (
    <section className={`block covers-block ${cover_type}-covers-block ${className ?? ''}`}>
      <header>
        <RichText
          tagName='h2'
          className='page-section-header'
          placeholder={__('Enter title', 'planet4-blocks-backend')}
          value={title}
          onChange={toAttribute('title')}
          keepPlaceholderOnFocus={true}
          withoutInteractiveFormatting
          characterLimit={60}
          multiline='false'
          allowedFormats={[]}
        />
      </header>
      <RichText
        tagName='p'
        className='page-section-description'
        placeholder={__('Enter description', 'planet4-blocks-backend')}
        value={description}
        onChange={toAttribute('description')}
        keepPlaceholderOnFocus={true}
        withoutInteractiveFormatting
        characterLimit={400}
        allowedFormats={['core/bold', 'core/italic']}
      />
      {!loading && !covers.length ?
        <div className='EmptyMessage'>
          {__(`Block content is empty. Check the block's settings or remove it.`, 'planet4-blocks-backend')}
        </div> :
        <Covers {...coversProps} />
      }
    </section>
  );
}

export const CoversEditor = ({ attributes, setAttributes, isSelected }) => {
  const { className, post_types } = attributes;

  useEffect(() => {
    const styleClass = getStyleFromClassName(className);
    if (styleClass) {
      setAttributes({
        cover_type: styleClass,
        posts: [],
        post_types: className.includes('content') ? post_types : [],
      });
    }
  }, [className]);

  const toAttribute = attributeName => value => setAttributes({ [attributeName]: value });

  return (
    <Fragment>
      {isSelected && renderEdit(attributes, toAttribute)}
      {renderView(attributes, toAttribute)}
    </Fragment>
  );
}

