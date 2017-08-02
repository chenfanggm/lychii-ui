import './normalize'
import './styles/main.scss'
import baseConfig from './libs/baseConfig'
import { createRoot, positionRoot, initRender } from './libs/core'

import React from 'react'

const LYCHII = (function () {

  const init = function (configOverride) {
    const config = Object.assign({}, baseConfig, configOverride)
    const root = createRoot(config)
    Object.assign(config, { root: root })
    const rootPosition = positionRoot(config)
    Object.assign(config, { position: rootPosition })
    // go render app
    initRender(config)

    // create global LYCHII reference
    const LYCHII = {
      config: config
    }
    if (!window.LYCHII) window.LYCHII = LYCHII

    document.querySelector(config.mount)
      .append(config.root)
  }

  return {
    init: init
  }

}())

LYCHII.init()

module.exports = LYCHII
