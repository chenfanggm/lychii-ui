import React from 'react'
import ReactDOM from 'react-dom'
import MainLayout from '../containers/MainLayout'

//const rootNode = getGlobalRootNode()
const rootNode = document.getElementById('root')
// bootstrap react
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
        console.log(1)
        renderApp()
      } catch (error) {
        console.error(error)
        renderError(error)
      }
    }

    // setup hot module replacement
    module.hot.accept(['../containers/MainLayout.js', '../containers/Canvas', './render.js'], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(rootNode)
        const MainLayout = require('../containers/MainLayout').default

        ReactDOM.render(
          <MainLayout />,
          rootNode
        )
      })
    )
  }
}

render()
