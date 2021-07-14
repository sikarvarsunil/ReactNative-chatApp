export default {
  id: 1,
  users: [{
    id: 'u1',
    name: 'suneel',
    imageUrl: 'https://i.pravatar.cc/150'
  },
  {
    id: 'u2',
    name: 'Vijay',
    imageUrl: 'https://i.pravatar.cc/150'
  }],
  messages: [{
    id: 'm1',
    content: 'hi vijay, how r you?',
    createdAt: 'Wed Jul 14 2021 23:08:27',
    user: {
      id: 'u1',
      name: 'suneel'
    }
  },
  {
    id: 'm2',
    content: 'I am fine',
    createdAt: 'Wed Jul 14 2021 23:08:27',
    user: {
      id: 'u2',
      name: 'vijay'
    }
  },
  {
    id: 'm3',
    content: 'i am going to movie',
    createdAt: 'Wed Jul 14 2021 23:08:27',
    user: {
      id: 'u2',
      name: 'vijay'
    }
  },
  {
    id: 'm4',
    content: 'i am in office right now',
    createdAt: 'Wed Jul 14 2021 23:08:27',
    user: {
      id: 'u1',
      name: 'suneel'
    }
  },
  {
    id: 'm5',
    content: 'ok, meet me in evening',
    createdAt: 'Wed Jul 14 2021 23:08:27',
    user: {
      id: 'u2',
      name: 'vijay'
    }
  },
  {
    id: 'm6',
    content: 'ok sure',
    createdAt: 'Wed Jul 14 2021 23:08:27',
    user: {
      id: 'u1',
      name: 'suneel'
    }
  },
  {
    id: 'm7',
    content: 'please book the tickets',
    createdAt: 'Wed Jul 14 2021 23:08:27',
    user: {
      id: 'u2',
      name: 'vijay'
    }
  }]
}