import { useState, useEffect } from '@wordpress/element';
import { addQueryArgs } from '../../functions/addQueryArgs';
import { COVERS_TYPES, COVERS_LAYOUTS } from './CoversConstants';

const { apiFetch } = wp;

const isMobile = () => window.innerWidth < 768;
const isSmallWindow = () => window.innerWidth < 992;
const isMediumWindow = () => window.innerWidth >= 768 && window.innerWidth < 992;

export const useCovers = ({ post_types, tags, cover_type, initialRowsLimit, posts, layout }, noLoading) => {
  const [covers, setCovers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [row, setRow] = useState(initialRowsLimit);
  const [amountOfCoversPerRow, setAmountOfCoversPerRow] = useState(null);
  const [error, setError] = useState(null);

  const isCarouselLayout = layout === COVERS_LAYOUTS.carousel;

  const updateRowCoversAmount = () => {
    if(cover_type === COVERS_TYPES.campaign || cover_type === COVERS_TYPES.takeAction) {
      if (isCarouselLayout) {
        setAmountOfCoversPerRow(3);
      } else {
        setAmountOfCoversPerRow(isSmallWindow() ? 2 : 3);
      }
    } else {
      if (isCarouselLayout) {
        setAmountOfCoversPerRow(4);
      } else {
        if (isMobile()) {
          setAmountOfCoversPerRow(2);
        } else {
          setAmountOfCoversPerRow(isMediumWindow() ? 3 : 4);
        }
      }
    }
  };

  const loadCovers = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    const args = {
      post_types,
      cover_type,
      tags,
      posts,
      layout,
    };

    const path = addQueryArgs('planet4/v1/get-covers', args);

    try {
      const loadedCovers = await apiFetch({ path });

      if (loadedCovers) {
        setCovers(loadedCovers);
      }

    } catch (e) {
      console.log(e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const hideCover = index => {
    if (isCarouselLayout && !isSmallWindow()) {
      return index >= row * amountOfCoversPerRow || index < (row - 1) * amountOfCoversPerRow;
    } else if (!isCarouselLayout) {
      return !!initialRowsLimit && index >= row * amountOfCoversPerRow;
    }
  };

  useEffect(() => {
    if (!noLoading) {
      loadCovers();
    }
  }, [cover_type, post_types, tags, posts, layout]);

  useEffect(() => {
    updateRowCoversAmount();

    if (layout !== COVERS_LAYOUTS.carousel) {
      window.addEventListener('resize', updateRowCoversAmount);
      return () => window.removeEventListener('resize', updateRowCoversAmount);
    }
  }, [layout, cover_type]);

  useEffect(() => {
    if (initialRowsLimit !== row) {
      setRow(initialRowsLimit);
    }
  }, [initialRowsLimit]);

  return {
    covers,
    loading,
    error,
    showMoreCovers: () => setRow(row + initialRowsLimit),
    setRow,
    row,
    amountOfCoversPerRow,
    hideCover,
  };
};
