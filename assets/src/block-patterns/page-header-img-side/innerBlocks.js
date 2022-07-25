const innerBlocks = [
    ['core/group', {}, [
      ['core/heading', {
        level: 1,
        backgroundColor: 'white',
        placeholder: 'Enter title'
      }]
    ]],
    ['core/paragraph', {
      placeholder: 'Enter description',
      style: { typography: { fontSize: '1.25rem'} }
    }],
    ['core/buttons', {}, [
      ['core/button', {className: 'is-style-cta'}]
    ]],
];

export default innerBlocks;
