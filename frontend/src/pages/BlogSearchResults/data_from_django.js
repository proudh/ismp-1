const blogSearchDataDjango = {
  count: 3,
  next: null,
  previous: null,
  results: [
    {
      id: 3,
      blogpost: {
        id: 3,
        media_url: 'https://www.youtube.com/watch?v=8G89StDuGe4',
        author: {
          id: 1,
          created_at: '2020-06-08T23:15:11.516027Z',
          updated_at: '2020-06-08T23:15:11.516045Z',
          bio: '',
          image: '',
          user: 1
        },
        slug: '',
        is_featured: false,
        topic_set: [],
        tag_set: []
      },
      title_content: 'english training',
      body_content: '<p>talk to people</p>',
      language: 'en',
      is_draft: false,
      created_at: '2020-05-07T00:00:00Z',
      updated_at: '2020-05-07T00:00:00Z',
      publish_at: '2020-06-02T18:04:44.296110Z'
    },
    {
      id: 2,
      blogpost: {
        id: 2,
        media_url: 'https://wallpaperplay.com/walls/full/a/5/8/199352.jpg',
        author: {
          id: 2,
          created_at: '2020-06-08T23:15:11.523951Z',
          updated_at: '2020-06-08T23:15:11.523967Z',
          bio: '',
          image: '',
          user: 2
        },
        slug: '',
        is_featured: false,
        topic_set: [
          {
            id: 2,
            name: 'housing tips',
            description: 'Still waiting on a description for this.',
            blogpost: [2]
          }
        ],
        tag_set: []
      },
      title_content: 'test blogpost with html',
      body_content: '<div>hello world</div>',
      language: 'en',
      is_draft: true,
      created_at: '2020-05-07T00:00:00Z',
      updated_at: '2020-05-07T00:00:00Z',
      publish_at: null
    },
    {
      id: 1,
      blogpost: {
        id: 1,
        media_url: 'https://www.youtube.com/watch?v=9fJEFi3ccwI',
        author: {
          id: 1,
          created_at: '2020-06-08T23:15:11.516027Z',
          updated_at: '2020-06-08T23:15:11.516045Z',
          bio: '',
          image: '',
          user: 1
        },
        slug: '',
        is_featured: true,
        topic_set: [
          {
            id: 1,
            name: 'English Training: Writing',
            description:
              'English is difficult to master, especially in the university setting.  We will cover basic and advance English writing techniques such as essay organization, professional email writing, and common grammar mistakes to help you succeed in your classes and research!',
            blogpost: [1]
          }
        ],
        tag_set: []
      },
      title_content: 'my blogpost',
      body_content: 'hello world',
      language: 'en',
      is_draft: false,
      created_at: '2020-05-07T00:00:00Z',
      updated_at: '2020-05-07T00:00:00Z',
      publish_at: '2020-06-02T18:04:44.296110Z'
    }
  ]
};

export default blogSearchDataDjango;
