import './normalize'
import baseConfig from './libs/baseConfig'
import { initBFCWithGlobalRef } from './libs/core'

import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'

const BFC = (function () {

  const init = function (configOverride) {
    const config = Object.assign({}, baseConfig, configOverride)
    const BFC = initBFCWithGlobalRef(config)
    document.querySelector(config.mount)
      .append(BFC.rootNode)

    const root = document.getElementById('root')
    // bootstrap react
    let render = () => {
      ReactDOM.render(
        <AppContainer />,
        root
      )
    }

    // development tools
    if (__DEV__) {
      if (module.hot) {
        const renderError = (error) => {
          const RedBox = require('redbox-react').default
          ReactDOM.render(<RedBox error={error} />, root)
        }

        // wrap render in try/catch
        const renderApp = render
        render = () => {
          try {
            renderApp()
          } catch (error) {
            console.error(error)
            renderError(error)
          }
        }

        // setup hot module replacement
        module.hot.accept('../containers/AppContainer', () =>
          setImmediate(() => {
            ReactDOM.unmountComponentAtNode(root)
            render()
          })
        )
      }
    }

    render()
  }

  return {
    init: init
  }

}())

// self bootstrap if in dev mode
if (__DEV__) {
  BFC.init({
    mount: '#root'
  })
}

module.exports = BFC
