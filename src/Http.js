class Http {
  constructor (root) {
    this.root = root
  }

  get (route, params) {
    return window.fetch(`${this.root}/${route}?${this.objToParams(params)}`)
    .then((stream) => {
      return stream.json()
    })
  }

  objToParams (obj) {
    let str = ''
    for (let key in obj) {
      if (str !== '') {
        str += '&'
      }
      str += `${key}=${window.encodeURI(obj[key])}`
    }
    return str
  }
}

export default Http
