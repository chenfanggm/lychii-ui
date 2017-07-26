import baseConfig from './baseConfig'

export const getPixelFromNumber = (number) => {
  return number + 'px'
}

export const getGlobalBFC = () => {
  return window.BFC
}

export const getGlobalConfig = () => {
  return window.BFC.config || baseConfig
}

export const getGlobalRootNode = () => {
  return window.BFC.rootNode
}

