import { GiPineapple as icon } from 'react-icons/Gi'
export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon,
  fields: [
    {
     name: 'name',
     title: 'Name',
     type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image'
    },
    {
      name: 'items',
      title: 'Menu Items',
      type: 'array',
      of: [{type: 'menuItem'}]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'icon'
    }
  }
}
