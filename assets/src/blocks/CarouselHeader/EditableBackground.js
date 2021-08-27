import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Button, Dropdown } from '@wordpress/components';
import { toSrcSet } from './CarouselHeaderEditor';
const { __ } = wp.i18n;

export const EditableBackground = ({
  image_url,
  image_alt,
  image_id,
  image_srcset,
  index,
  focalPoints,
  changeSlideImage,
  addSlide,
  removeSlide,
  slides,
}) => (
  <MediaUploadCheck>
    <MediaUpload
      onSelect={image => {
        const { id, alt_text, url, sizes } = image;
        changeSlideImage(index, id, url, alt_text, toSrcSet(Object.values(sizes)));
      }}
      allowedTypes={['image']}
      value={image_id}
      render={mediaUploadInstance => (
        <>
          <div className='background-holder'>
            {!image_url ?
              <ImagePlaceholder /> :
              <img
                alt={image_alt}
                src={image_url}
                srcSet={image_srcset}
                style={{ objectPosition: `${focalPoints?.x * 100}% ${focalPoints?.y * 100}%` }}
              />
            }
          </div>
          <Dropdown
            position='bottom left'
            className='carousel-header-editor-controls'
            renderToggle={({ onToggle }) => (
              <Button
                isPrimary
                icon='edit'
                onClick={onToggle}
              >
                {__('Edit', 'planet4-blocks-backend')}
              </Button>
            )}
            renderContent={({ onToggle }) => (
              <div className='carousel-header-editor-controls-menu'>
                <Button
                  icon={image_url ? 'edit' : 'plus-alt2'}
                  onClick={() => {
                    mediaUploadInstance.open();
                    onToggle();
                  }}
                >
                  {image_url ?
                    __('Change image', 'planet4-blocks-backend') :
                    __('Add image', 'planet4-blocks-backend')
                  }
                </Button>
                {image_url && (
                  <Button
                    icon='trash'
                    onClick={() => {
                      changeSlideImage(index, null, '', '');
                      onToggle();
                    }}
                  >
                    {__('Remove image', 'planet4-blocks-backend')}
                  </Button>
                )}
                {slides.length < 4 && (
                  <Button
                    icon='plus-alt2'
                    onClick={() => {
                      addSlide();
                      onToggle();
                    }}
                  >
                    {__('Add slide', 'planet4-blocks-backend')}
                  </Button>
                )}
                {slides.length > 1 &&
                  <Button
                    icon='trash'
                    onClick={() => {
                      removeSlide();
                      onToggle();
                    }}
                  >
                    {__('Remove slide', 'planet4-blocks-backend')}
                  </Button>
                }
              </div>
            )}
          />
        </>
      )}
    />
  </MediaUploadCheck>
);
