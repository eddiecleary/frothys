export default {
  name: 'hours',
  title: 'Hours',
  type: 'object',
  fields: [
      {name: 'day', type: 'string', title: 'Day'},
      {name: 'hours', type: 'string', title: 'Hours'}
    ],
  preview: {
    select: {
      title: 'day',
      subtitle: 'hours',
    }
  }
}
