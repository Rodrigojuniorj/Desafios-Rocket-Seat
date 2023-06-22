import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'
import { extractQueryParams } from './utils/extract-query-params.js'

// GET, POST, PUT, PATCH, DELETE

// Get => Buscar um recurso no back-end
// Post => Criar um recurso no back-end
// Put => Alterar um recurso no back-end
// Patch => Alterar um recurso específico
// Delete => Deletar um recurso no back-end

// Steteful - Stateless

// Cabeçalhos (Requisição/resposta) => Metadados

// HTTP = status code

// Query Parameters:
// Route Parameters:
// Request Body: 

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  const route = routes.find(route => {
    return route.method === method && route.path.test(url)
  })

  if(route) {
    const routeParams = req.url.match(route.path)

    const { query, ...params } = routeParams.groups

    req.params = params
    req.query = query ? extractQueryParams(query) : {}

    return route.handler(req, res)
  }

  return res.writeHead(404).end()
})

server.listen(3333)