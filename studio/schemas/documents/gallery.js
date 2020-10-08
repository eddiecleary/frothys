import { GrGallery as icon } from 'react-icons/Gr'

export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  icon,
  fields: [
    {
     name: 'name',
     title: 'Name',
     type: 'string',
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{type: 'mainImage'}],
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'gallery'
    }
  }
}
