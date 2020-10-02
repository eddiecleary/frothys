export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f76cea17b9bbcb243bcfdca',
                  title: 'Sanity Studio',
                  name: 'frothys-studio',
                  apiId: 'b35220a8-f04c-4bb6-90a6-5cfde05d136a'
                },
                {
                  buildHookId: '5f76cea1388531b25fdee0be',
                  title: 'Blog Website',
                  name: 'frothys',
                  apiId: 'bfe01487-38ee-4a5b-8bb0-587ae3c7f218'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eddiecleary/frothys',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://frothys.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
