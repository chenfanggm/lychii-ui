
const bfc = (function () {

  const init = function (config) {

    const bfcRootDom = document.createElement('div')
    bfcRootDom.innerText = 'Hello, here\'s BFC'

    if (config && config.mount) {
      const rootParent = document.getElementById(config.mount)
      rootParent.append(bfcRootDom)
    } else {
      const body = document.getElementsByTagName('body')
      body.append(bfcRootDom)
    }
  }

  return {
    init: init
  }

}())

// self bootstrap if in dev mode
if (__DEV__) {
  bfc.init({
    mount: 'root'
  })
}

export default bfc
