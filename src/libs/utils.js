import baseConfig from './baseConfig'

export const getPixelFromNumber = (number) => {
  return number + 'px'
}

export const getGlobalConfig = () => {
  return window.BFC.config || baseConfig
}
