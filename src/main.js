import './normalize'
import baseConfig from './libs/baseConfig'
import { createRootNode, positionRootNode } from './libs/core'
import './libs/render'

import React from 'react'

const BFC = (function () {

  const init = function (configOverride) {

    const config = Object.assign({}, baseConfig, configOverride)
    const rootNode = createRootNode(config)

    const BFC = {
      config: config,
      rootNode: rootNode
    }
    // create global reference
    if (!window.BFC) window.BFC = BFC

    BFC.position = positionRootNode()
    document.querySelector(config.mount).append(BFC.rootNode)
  }

  return {
    init: init
  }

}())

BFC.init()

module.exports = BFC
