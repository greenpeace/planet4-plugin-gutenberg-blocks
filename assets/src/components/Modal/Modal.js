import { Fragment } from '@wordpress/element';

export const Modal = ({ isShowing, hide, children }) => isShowing ? wp.element.createPortal(
  <Fragment>
    <div className="react-modal-overlay">
      <div>
        { children }
      </div>
    </div>
  </Fragment>, document.body
) : null;
