import { getGlobalConfig, getPixelFromNumber } from './utils'

export const createRootNode = (config) => {
  const rootNode = document.createElement('div')
  rootNode.id = config.rootDomId
  Object.assign(rootNode.style, {
    width: getPixelFromNumber(config.width),
    height: getPixelFromNumber(config.height),
    backgroundColor: config.backgroundColor
  })

  if (config.mount) {
    document.getElementById(config.mount).append(rootNode)
  } else {
    document.getElementsByTagName('body').append(rootNode)
  }

  return rootNode
}

const positionRootNode = () => {
  const config = getGlobalConfig()
}
