import { errorFilter } from '../libs/utils'

const API = {
  MESSAGE: '/api/v1/message'
}


export const getAllMessage = (username) => {
  return new Promise(function (resolve, reject) {
    fetch(API.MESSAGE, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(errorFilter())
      .then((messages) => {
        resolve(messages)
      })
      .catch((error) => {
      })
  })
}
