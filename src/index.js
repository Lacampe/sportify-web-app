import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider, injectGlobal } from 'styled-components'

import { App } from './components'
import configureStore from './redux/configureStore'
import registerServiceWorker from './registerServiceWorker'
import theme from './theme'

const store = configureStore()

// GLOBAL STYLES
injectGlobal`
  body {
    font-family: ${theme.fonts.default};
    font-size: ;
    color: ;
    background-color: ;
    margin: 0px;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Route component={App} />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
