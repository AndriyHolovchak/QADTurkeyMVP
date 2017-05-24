import React from 'react'

import Home from 'pages/Home'
import NoMatch from 'pages/NoMatch'

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />
  },
  {
    main: () =>  <NoMatch />
  }
]

export default routes
