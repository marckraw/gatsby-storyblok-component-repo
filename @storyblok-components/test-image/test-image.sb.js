module.exports = {
  name: 'test-image',
  display_name: 'Test image',
  is_root: false,
  is_nestable: true,
  schema: {
    title: {
      type: 'text'
    },
    image: {
      type: 'custom',
      field_type: 'focus-point',
      options: [],
      required: true
    }
  }
}
