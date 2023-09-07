import {useCallback, useEffect, useMemo, useState} from '@wordpress/element';

export const SpacerFrontend = ({attributes}) => {
  const [size, setSize] = useState();

  const updateSize = useCallback(() => {
    if(window.innerWidth > 1600) {
      setSize(attributes.xxlarge);
    } else if(window.innerWidth > 1200) {
      setSize(attributes.xlarge);
    } else if(window.innerWidth > 992) {
      setSize(attributes.large);
    } else if(window.innerWidth > 768) {
      setSize(attributes.medium);
    } else {
      setSize(attributes.small);
    }
  }, [attributes]);

  useEffect(() => {
    updateSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributes]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      updateSize();
    });

    updateSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useMemo(() => (
    <div style={{height: size}} />
  ), [size]);
};
