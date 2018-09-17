const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/search/state', (req, res) => {
      const actualPage = '/search'
      const queryParams = { text: req.query.text, state: req.query.state }
      app.render(req, res, actualPage, queryParams)
  });

  server.get('/politician/:id', (req, res) => {
    const actualPage = '/politician'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  });

  server.get('/search/textual', (req, res) => {
    const actualPage = '/search'
    const queryParams = { terms: req.query.terms }
    app.render(req, res, actualPage, queryParams)
  });

  server.get('/politician', (req, res) => {
    const actualPage = '/'
    //const queryParams = { text: req.params.text }
    app.render(req, res, actualPage)
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})