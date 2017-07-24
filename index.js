
const bfc = (function () {

  const init = function () {
    console.log('Hi, I\'m BFC')
  }

  return {
    init: init
  }

}())

module.exports = bfc