export const getQueryParam = (key, defaultValue) => {
  const urlParams = new URLSearchParams(window.location.search);

  return urlParams.get(key) || defaultValue;
};
