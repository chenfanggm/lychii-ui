import { getGlobalConfig, getGlobalRootNode, getPixelFromNumber } from './utils'
import React from 'react'
import ReactDOM from 'react-dom'
import RootContainer from '../containers/RootContainer'

export const createRoot = (config) => {
  const root = document.createElement('div')
  root.id = config.rootId
  Object.assign(root.style, {
    width: getPixelFromNumber(config.width),
    height: getPixelFromNumber(config.height)
  })
  return root
}

export const positionRoot = (_config) => {
  const config = _config || getGlobalConfig()
  const root = config.root || getGlobalRootNode()
  const innerWidth = window.innerWidth
  const innerHeight = window.innerHeight
  const nodeLeft = innerWidth - config.width
  const nodeTop = innerHeight - config.height

  if (config.layout === 'bottom-right') {
    Object.assign(root.style, {
      position: 'fixed',
      right: '3px',
      bottom: '3px'
    })
  }

  return {
    x: nodeLeft,
    y: nodeTop
  }
}

export const initRender = (_config) => {
  const config = _config || getGlobalConfig()
  const root = config.root || getGlobalRootNode()

  let render = () => {
    ReactDOM.render(
      <RootContainer />,
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
      module.hot.accept(['../containers/RootContainer'], () =>
        setImmediate(() => {
          ReactDOM.unmountComponentAtNode(root)
          const RootContainer = require('../containers/RootContainer').default

          ReactDOM.render(
            <RootContainer />,
            root
          )
        })
      )
    }
  }

  render()
}
