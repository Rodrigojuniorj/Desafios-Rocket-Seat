import { FormEvent, useState } from 'react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Todo } from './components/Todo'

import './global.css'

export interface TodoItensProps {
  id: number;
  description: string;
  isChecked?: boolean;
}

export function App() {
  const [newTodo, setNewTodo] = useState<TodoItensProps[]>([]);

  function todoLists(Todo: TodoItensProps){
    setNewTodo([...newTodo, Todo])
  }

  function handleToggleCheckedTodo(id: number){
    const todoChecked = newTodo.map((todo) => {
      if(todo.id === id) {
        return {
          ...todo,
          isChecked: !todo.isChecked,
        };
      }
      return todo;
    });
    setNewTodo(todoChecked)
  }

  function deleteTodo(id: number) {
    const commentsWithoutDeletedOne = newTodo.filter(todo => {
      return todo.id !== id;
    })

    setNewTodo(commentsWithoutDeletedOne);
  }

  return (
    <>
      <Header />
      <Input
        todoLists={todoLists}
        autoIncrement={newTodo.length}
      />
      <Todo
        todoList={newTodo}
        onChecked={handleToggleCheckedTodo}
        onDelete={deleteTodo}
      />
    </>
  )
}