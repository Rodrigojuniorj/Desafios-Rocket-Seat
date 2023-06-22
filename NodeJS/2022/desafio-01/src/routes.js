import { randomUUID } from 'node:crypto'
import { Database } from './database.js'
import { buildRoutePath } from './utils/build-rout-path.js'

const database = new Database()

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const { search } = req.query

      const tasks = database.select('tasks', search ? {
        title: search,
        description: search
      } : null)

      return res.end(JSON.stringify(tasks))
    }
  },
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const { title, description } = req.body

      if(!title || !description){
        return res.writeHead(404).end('É necessário inserir todos os campos!')
      }

      const tasks = database.select('tasks')

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date()
      }

      database.insert('tasks', task)

      return res.writeHead(201).end()
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params

      const result = database.delete('tasks', id)

      if(!result) {
        return res.writeHead(404).end('ID inválido')
      }

      return res.writeHead(204).end()
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params
      const { title, description} = req.body

      if(!title || !description){
        return res.writeHead(404).end('É necessário inserir todos os campos!')
      }

      const result = database.update('tasks', id, {
        title,
        description
      })

      if(!result) {
        return res.writeHead(404).end('ID inválido')
      }

      return res.writeHead(204).end()
    }
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: (req, res) => {
      const { id } = req.params

      database.update('tasks', id, {}, true)

      return res.writeHead(204).end()
    }
  }
]
