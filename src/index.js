import React from 'react'
import ReactDOM from 'react-dom'
import MainLayout from 'layout/MainLayout'

const bfc = (function () {

  const init = function (config) {
    const bfcMountNode = document.createElement('div')
    bfcMountNode.id = 'bfc-root'

    // setup render
    let render = () => {
      ReactDOM.render(
        <MainLayout />,
        bfcMountNode
      )
    }

    if (config && config.mount) {
      const mountParent = document.getElementById(config.mount)
      mountParent.appendChild(bfcMountNode)
    } else {
      const body = document.getElementsByTagName('body')
      body.append(bfcMountNode)
    }

    // development tools
    if (__DEV__) {
      if (module.hot) {
        const renderApp = render
        const renderError = (error) => {
          const RedBox = require('redbox-react').default
          ReactDOM.render(<RedBox error={error} />, bfcMountNode)
        }

        // wrap render in try/catch
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
            ReactDOM.unmountComponentAtNode(bfcMountNode)
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
  bfc.init({
    mount: 'root'
  })
}

module.exports = bfc
