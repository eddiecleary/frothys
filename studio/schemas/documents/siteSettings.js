export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'hours',
      type: 'array',
      title: 'Store Hours',
      description: 'Update Store Hours Here',
      of: [{type: 'hours'}]
    },
    {
      name: 'banner',
      type: 'string',
      title: 'Site Banner',
      description: 'Enter a short description to show a popup on your homepage. i.e. Change of store hours or sales alerts. Delete this text remove the banner',
    }
  ]
}
