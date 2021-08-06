import { useState, useEffect } from 'react';

export const useDynamicHeight = (wrapperRef) => {
  const [ blockHeight, setBlockHeight ] = useState(0);

  const updateBlockHeight = () => {
    if(wrapperRef && wrapperRef.current) {
      setBlockHeight(wrapperRef.current.getBoundingClientRect().height);
    }
  };

  const onResizeHandler = (evt) => {
    evt.preventDefault();
    updateBlockHeight();
  };

  useEffect(() => {
    updateBlockHeight();
  }, [
    wrapperRef,
  ]);

  useEffect(() => {
    window.addEventListener('resize', onResizeHandler);

    return () => {
      window.removeEventListener('resize', onResizeHandler);
    }
  }, []);

  return [
    blockHeight,
  ];
}
