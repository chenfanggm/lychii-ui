import './normalize'
import './styles/main.scss'
import lychii from './libs/lychii'

const initLychii = (config) => {
  const lychiiInstance = lychii(config)

  let MOUNT_NODE = 'body'
  if (config && config.mount)
    MOUNT_NODE = config.mount

  document.querySelector(MOUNT_NODE)
    .append(lychiiInstance.rootDom)
}

if (__DEBUG__) {
  initLychii()
}

module.exports = initLychii