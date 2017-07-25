import './normalize'
import React from 'react'
import ReactDOM from 'react-dom'
import baseConfig from './libs/baseConfig'
import { createRootNode } from './libs/core'
import MainLayout from 'layout/MainLayout'

const BFC = (function () {

  const init = function (configOverride) {
    const config = Object.assign({}, baseConfig, configOverride)
    const BFC = {
      config: config
    }

    if (!window.BFC) window.BFC = BFC
    const rootNode = createRootNode(config)


    // setup react render
    let render = () => {
      ReactDOM.render(
        <MainLayout />,
        rootNode
      )
    }

    // development tools
    if (__DEV__) {
      if (module.hot) {
        const renderError = (error) => {
          const RedBox = require('redbox-react').default
          ReactDOM.render(<RedBox error={error} />, rootNode)
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
        module.hot.accept('./', () =>
          setImmediate(() => {
            ReactDOM.unmountComponentAtNode(rootNode)
            render()
          })
        )
      }
    }

    // --------------------------------------
    // Go!
    // --------------------------------------
    render()
  }

  return {
    init: init
  }

}())

// self bootstrap if in dev mode
if (__DEV__) {
  BFC.init({
    mount: 'root'
  })
}

module.exports = BFC
