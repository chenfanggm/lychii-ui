import { getGlobalConfig, getGlobalRootNode, getPixelFromNumber } from './utils'

export const createRootNode = (config) => {
  const rootNode = document.createElement('div')
  rootNode.id = config.rootDomId
  Object.assign(rootNode.style, {
    width: getPixelFromNumber(config.width),
    height: getPixelFromNumber(config.height),
    backgroundColor: config.backgroundColor
  })
  return rootNode
}

export const positionRootNode = () => {
  const config = getGlobalConfig()
  const rootNode = getGlobalRootNode()
  const innerWidth = window.innerWidth
  const innerHeight = window.innerHeight
  const nodeLeft = innerWidth - config.width
  const nodeTop = innerHeight - config.height

  if (config.layout === 'bottom-right') {
    Object.assign(rootNode.style, {
      position: 'fixed',
      right: 0,
      bottom: 0
    })
  }

  return {
    x: nodeLeft,
    y: nodeTop
  }
}
