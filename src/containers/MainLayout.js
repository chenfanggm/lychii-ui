import React from 'react'
import ReactDOM from 'react-dom'
import Canvas from './Canvas'

class MainLayout extends React.Component {

  static state = {
    hello: 1
  }

  render () {
    return (
      <div ref='h1'>
        <Canvas />
        asdfas
        asdfas
      </div>
    )
  }
}


//const rootNode = getGlobalRootNode()
const rootNode = document.getElementById('root')
// bootstrap react
let render = () => {
  ReactDOM.render(
    <MainLayout />,
    rootNode
  )
}

// development tools
if (__DEV__) {
  if (module.hot) {
    const renderError = (error) => {
      const RedBox = require('redbox-react').default
      ReactDOM.render(<RedBox error={error} />, rootNode)
    }

    // wrap render in try/catch
    const renderApp = render
    render = () => {
      try {
        console.log(1)
        renderApp()
      } catch (error) {
        console.error(error)
        renderError(error)
      }
    }

    var context = require.context("./", false, /\.js$/)
    // setup hot module replacement
    module.hot.accept(context.id, () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(rootNode)
        render()
      })
    )
  }
}


export default MainLayout
