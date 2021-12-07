/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-02 18:21:36
 * @LastEditors: heting
 * @LastEditTime: 2021-12-07 16:48:19
 */
const url = require('url')
function createApplication() {
  this.get = {}
  this.post = {}

  const App = (req, res) => {
    let pathname = url.parse(req.url, true).pathname
    let method = req.method.toLowerCase()

    if (pathname.search('/static/images/') !== -1) {
      this.use(pathname, req, res)
    } else {
      if (this[method][pathname]) {
        if (method === 'get') {
          this[method][pathname](req, res)
        }
        else {
          let params = ''
          req.on('data', chunk => {
            params += chunk
          })
          req.on('end', () => {
            req.body = params
            this[method][pathname](req, res)
          })
        }
      } else {
        res.end('404')
      }
    }
  }

  App.get = (url, cb) => {
    this.get[url] = cb
  }
  App.post = (url, cb) => {
    this.post[url] = cb
  }

  App.use = (cb) => {
    this.use = cb
  }

  return App
}

module.exports = createApplication()