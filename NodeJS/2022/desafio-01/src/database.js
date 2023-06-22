import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url)

export class Database {
  #database = {}

  constructor() {
    fs.readFile(databasePath, 'utf-8').then(data => {
      this.#database = JSON.parse(data)
    })
    .catch(() => {
      this.#persist()
    })
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database))
  }

  select(table, search){
    let data = this.#database[table] ?? []
    
    if(search) {
      data = data.filter(row => {
        return Object.entries(search).some(([key, value]) => {
          return row[key].toLowerCase().includes(value.toLowerCase())
        })
      })

    }

    return data
  }

  insert(table, data){
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }

    this.#persist()
    
    return data;
  }

  update(table, id, data, isPatch = false) {
    const rowIndex = this.#database[table].findIndex(row => row.id === id)

    if (rowIndex > -1) {
     
      if (isPatch) {

        this.#database[table][rowIndex] = { 
          id,
          title: this.#database[table][rowIndex]['title'],
          description: this.#database[table][rowIndex]['description'],
          completed_at: this.#database[table][rowIndex]['completed_at'] ? null : new Date(),
          created_at: this.#database[table][rowIndex]['created_at'],
          updated_at: this.#database[table][rowIndex]['updated_at'],
        }

        this.#persist()

        return true
      }

      this.#database[table][rowIndex] = { 
        id, 
        ...data,
        completed_at: null,
        created_at: this.#database[table][rowIndex]['updated_at'],
        updated_at: new Date()
      }
      this.#persist()

      return true
    }

    return null
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex(row => row.id === id)

    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1)
      this.#persist()

      return true
    }

    return null
  }
}