export default {
  name: 'hours',
  title: 'Hours',
  type: 'object',
  fields: [
      {
        name: 'day', 
        title: 'Day',
        type: 'string'
      },
      {
        name: 'hours', 
        title: 'Hours',
        type: 'string'
      }
    ],
  preview: {
    select: {
      title: 'day',
      subtitle: 'hours',
    }
  }
}
