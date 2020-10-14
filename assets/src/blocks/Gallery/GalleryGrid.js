import { Modal } from "../../components/Modal/Modal";
import { useModal } from '../../components/Modal/useModal';
import { Lightbox } from '../../components/Lightbox/Lightbox';

export const GalleryGrid = ({ images }) => {
  const {isShowing, toggle} = useModal();

  return (
    <div className="container">
      <button className="button-default" onClick={toggle}>Show Modal</button>
      <div className="grid-row">
        {images.map(image => (
          <div key={image.image_src} className="grid-item">
            <img
              src={image.image_src}
              style={{ objectPosition: image.focus_image }}
              alt={image.alt_text}
            />
          </div>
        ))}
      </div>
      <Modal
        isShowing={isShowing}
        hide={toggle}>
          <Lightbox images={ images } />
      </Modal>
    </div>
  )
};
