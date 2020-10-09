export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
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
      description: 'Add a popup site banner to homepage for important news and updates. Delete this text to remove the banner. Must re-deploy site for changes to take effect.',
    }
  ]
}
