import { useState, useEffect } from '@wordpress/element';

export const useBackgroundImage = (image) => {
  const [ backgroundImage, setBackgroundImage ] = useState({});
  useEffect(() => {
    if(image) {
      setBackgroundImage({ backgroundImage: `url(${image})` });
    }
  }, [ image ]);

  return [
    backgroundImage,
  ];
};
