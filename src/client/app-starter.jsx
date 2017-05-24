import { render } from 'react-dom'
import React, { Component } from 'react'

import rootSaga from 'models/saga'
import createStore from 'models/store'
import createHistory from 'history/createBrowserHistory'

import { Provider } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import Toaster from 'components/toasterComponent'

import "styles/app.scss"

import routes from 'routes'

const history = createHistory()
const store = createStore(history)

store.runSaga(rootSaga).done

render(
    <Provider store={store}>
      <div>
        <Toaster/>
        <Router history={history}>
          <Switch>
            { routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>
        </Router>
      </div>
    </Provider>,
  document.getElementById('app')
)
