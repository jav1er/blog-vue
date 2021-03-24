import axios from "axios"

class HttpRequest {
  constructor() {
    console.log("en el constructor de httpRequest")
  }

  putRequest(direction, object) {
    return new Promise((resolve, reject) => {
      axios
        .put(direction, object)
        .then(res => {
          if (res.data.status != "success") {
            reject("ocurrio un error")
          }
          resolve(res.data)
        })
        .catch()
    })
  }

  getRequest(direction) {
    return new Promise((resolve, reject) => {
      axios
        .get(direction)
        .then(res => {
          if (res.data.status != "success") {
            reject("ocurrio un error")
          }
          resolve(res.data)
        })
        .catch()
    })
  }

  postRequest(direction, object) {
    return new Promise((resolve, reject) => {
      axios
        .post(direction, object)
        .then(res => {
          if (res.data.status != "success") {
            reject("ocurrio un error")
          }
          resolve(res.data)
        })
        .catch()
    })
  }
}

export default HttpRequest
