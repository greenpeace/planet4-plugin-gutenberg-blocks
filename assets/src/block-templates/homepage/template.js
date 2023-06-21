import gravityFormWithText from '../templates/gravity-form-with-text';

const {__} = wp.i18n;

const template = () => (
  [
    ['core/group', {}, [
      ['planet4-blocks/carousel-header'],
      ['planet4-block-templates/issues', {
        titlePlaceholder: __('The issues we work on', 'planet4-blocks'),
      }],
      ['core/spacer', {height: '88px'}],
      ['planet4-blocks/articles', {
        article_heading: __('Read our Stories', 'planet4-blocks'),
      }],
      ['core/spacer', {height: '56px'}],
      ['planet4-block-templates/side-image-with-text-and-cta', {
        title: __('Get to know us', 'planet4-blocks'),
      }],
      ['core/spacer', {height: '30px'}],
      ['planet4-block-templates/side-image-with-text-and-cta', {
        title: __('We win campaigns', 'planet4-blocks'),
        mediaPosition: 'right',
      }],
      ['core/spacer', {height: '56px'}],
      ['planet4-blocks/covers'],
      ['core/spacer', {height: '72px'}],
      gravityFormWithText(),
    ]],
  ]
);

export default template;
