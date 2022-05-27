const { useSelect } = wp.data;

/**
 * Return an editable image block
 *
 * - display image credits in caption during edition
 */
export const ImageBlockEdit = (BlockEdit) => {
  return (props) => {
    if ( 'core/image' !== props.name ) {
      return <BlockEdit { ...props } />;
    }

    const { attributes, clientId } = props;
    const { id, caption, className } = attributes;

    // Get image data
    const image = useSelect(select => id ? select('core').getMedia(id) : null);
    const credits = image?.meta?._credit_text;
    // Compile data for insertion
    const image_credits = credits && credits.length > 0 && caption && ! caption.includes(credits)
      ? (credits.includes('©') ? credits : `© ${credits}`)
      : null;
    const block_id = clientId ? `block-${clientId}` : null;

    if (!caption && credits && (!className || !className.includes('no-caption'))) {
      attributes.className = className ? `${className} no-caption` : 'no-caption';
    }

    return (
      <>
        <BlockEdit { ...props } />
        { block_id && image_credits &&
          <style dangerouslySetInnerHTML={{__html:
            `#${block_id} figcaption::after { content: " ${image_credits}"; }`
          }}>
          </style>
        }
      </>
    );
  }
}
