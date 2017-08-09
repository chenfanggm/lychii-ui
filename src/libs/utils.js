export const getPixelFromNumber = (number) => {
  return number + 'px'
}

export const errorFilter = ({ withJsonFilter } = { withJsonFilter: true }) =>
  (response) => {
    if (!response.ok) {
      throw response
    }

    if (withJsonFilter) {
      return response.json()
    }

    return response
  }
