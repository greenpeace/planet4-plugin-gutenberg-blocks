const {__} = wp.i18n;

const gravityFormWithText = ({backgroundColor}) => (
  ['core/group', {
    backgroundColor,
    align: 'full',
    style: {
      spacing: {
        padding: {
          top:'80px',
          bottom:'50px',
        },
      },
    },
  }, [
    ['core/group', {className: 'container'}, [
      ['core/columns', {}, [
        ['core/column', {}, [
          ['core/heading', {
            level: 2,
            style: {typography: {fontSize: '40px'}},
            placeholder: __('Enter title', 'planet4-blocks-backend'),
          }],
          ['core/paragraph', {
            placeholder: __('Enter description', 'planet4-blocks-backend'),
          }],
        ]],
        ['core/column', {}, [
          ['gravityforms/form', {title: false, description: false}],
        ]],
      ]],
    ]],
  ]]
);

export default gravityFormWithText;
