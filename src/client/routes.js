import React from 'react'

import Home from 'pages/Home'
import CreateDocument from 'pages/CreateDocument'
import NoMatch from 'pages/NoMatch'

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />
  },
  {
    path: '/document',
    exact: true,
    main: () => <CreateDocument />
  },
  {
    path: '/document/:id',
    exact: true,
    main: () => <CreateDocument />
  },
  {
    main: () =>  <NoMatch />
  }
]

export default routes
