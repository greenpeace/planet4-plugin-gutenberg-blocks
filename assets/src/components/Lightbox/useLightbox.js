import { useState } from '@wordpress/element';

export const useLightbox = () => {
  const [ isOpen, setIsOpen ] = useState( false );
  const [ index, setIndex ] = useState( 0 );

  const openLightbox = ( idx ) => {
    setIsOpen( true );
    setIndex( idx );
  };

  const closeLightbox = () => {
    setIsOpen( false );
  };

  return { isOpen, index, openLightbox, closeLightbox };
};
