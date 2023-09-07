import {useCallback, useEffect, useMemo, useState} from '@wordpress/element';

export const SpacerFrontend = ({attributes}) => {
  const [size, setSize] = useState();

  const updateSize = useCallback(() => {
    if(window.innerWidth > 1200) {
      setSize(attributes.xlarge);
    } else if(window.innerWidth > 992) {
      setSize(attributes.large);
    } else if(window.innerWidth > 768) {
      setSize(attributes.medium);
    } else {
      setSize(attributes.small);
    }
  }, [size]);

  useEffect(() => {
    window.addEventListener('resize', function(evt) {
      updateSize();
    })

    updateSize();
  }, []);

  return useMemo(() => (
    <div style={{height: `${size}px`, backgroundColor: 'lightgrey'}} />
  ), [attributes, size]);
}
