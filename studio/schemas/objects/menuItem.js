export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  fields: [
      {name: 'name', type: 'string', title: 'Item Name'},
      {name: 'price', type: 'number', title: 'Item Price'}
    ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
    }
  }
}