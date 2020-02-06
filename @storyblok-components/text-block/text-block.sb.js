module.exports = {
  name: 'text-block',
  display_name: 'Text block',
  is_root: false,
  is_nestable: true,
  schema: {
    title: {
      type: 'text'
    },
    color: {
      type: 'text'
    },
    text_weight: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'normal',
          name: 'normal'
        },
        {
          value: 'light',
          name: 'light'
        }
      ],
      default_value: 'normal',
      can_sync: true
    },
    content: {
      type: 'markdown',
      rich_markdown: false
    }
  }
}
