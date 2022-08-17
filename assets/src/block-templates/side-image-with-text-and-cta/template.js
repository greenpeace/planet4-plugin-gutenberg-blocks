import mainThemeUrl from '../main-theme-url';

const template = ({
  title = null,
  titlePlaceholder = 'Enter title',
  backgroundColor = null,
  alignFull = false,
  mediaPosition = 'left'
}) => ([
  ['core/media-text', {
    mediaType: 'image',
    mediaPosition,
    mediaUrl: `${mainThemeUrl}/images/placeholders/placeholder-546x415.jpg`,
    isStackedOnMobile: true,
    backgroundColor,
    alignFull
  }, [
    ['core/heading', {level: 2, placeholder: titlePlaceholder, content: title}],
    ['core/paragraph', {placeholder: 'Enter description'}],
    ['core/buttons', {}, [
      ['core/button']
    ]]
  ]]
]);

export default template;
