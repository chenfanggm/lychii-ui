import React from 'react'
import ReactDOM from 'react-dom'
import { getPixelFromNumber } from './utils'
import defaultConfig from './defaultConfig'
import RootContainer from '../containers/RootContainer'

export default (function () {
  let lychiiInstance = null

  return (configOverride) => {
    const config = Object.assign({}, defaultConfig, configOverride)
    if (lychiiInstance) return lychiiInstance
    return new Lychii(config)
  }
}())

class Lychii {

  config = null
  rootDom = null
  rootPos = null

  constructor(config) {
    this.config = config
    this.rootDom = createRootDom(config)
    this.rootPos = this.repositionRootDom()
    initRender(this.rootDom)
  }

  repositionRootDom() {
    const windowInnerWidth = window.innerWidth
    const windowInnerHeight = window.innerHeight
    let rootLeft = windowInnerWidth - this.config.width
    let rootTop = windowInnerHeight - this.config.height

    if (this.config.layout.type === 'bottom-right') {
      Object.assign(this.rootDom.style, {
        position: 'fixed',
        right: this.config.layout.right,
        bottom: this.config.layout.bottom
      })
      rootLeft -= this.config.layout.right
      rootTop -= this.config.layout.bottom
    }

    return {
      x: rootLeft,
      y: rootTop
    }
  }
}

// ----------------------------------
// Private Method
// ----------------------------------
const createRootDom = (config) => {
  const rootDom = document.createElement('div')
  rootDom.id = config.rootId
  Object.assign(rootDom.style, {
    width: getPixelFromNumber(config.width),
    height: getPixelFromNumber(config.height)
  })
  return rootDom
}

const initRender = (rootDom) => {
  let render = () => {
    ReactDOM.render(
      <RootContainer />,
      rootDom
    )
  }

  // development tools
  if (__DEV__) {
    if (module.hot) {
      const renderError = (error) => {
        const RedBox = require('redbox-react').default
        ReactDOM.render(<RedBox error={error} />, rootDom)
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
          ReactDOM.unmountComponentAtNode(rootDom)
          const RootContainer = require('../containers/RootContainer').default

          ReactDOM.render(
            <RootContainer />,
            rootDom
          )
        })
      )
    }
  }

  render()
}

