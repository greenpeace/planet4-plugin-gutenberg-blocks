export const useToAttribute = (setAttributes) => {
  const toAttribute = (attributeName) => value => {
    if(setAttributes) {
      setAttributes({
        [attributeName]: value,
      });
    }
  };

  return [
    toAttribute,
  ];
};
