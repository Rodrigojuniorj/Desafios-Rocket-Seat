import { useState } from 'react';

import { Check, ClipboardText, Trash } from 'phosphor-react'

import styles from './Todo.module.css';
import { TodoItensProps } from '../App';
import { Task } from './Task';

const lists = [
  {
    id: 1,
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  }
]

export interface TodoProps {
  todoList: TodoItensProps[];
  onChecked: (id: number) => void;
  onDelete: (id: number) => void;
}

export function Todo({ todoList, onChecked, onDelete}: TodoProps) {
  
  function handleChecked(id: number){
    onChecked(id)
  }

  function deleteTodo(id: number){
    onDelete(id)
  }

  const sumChecked = todoList.filter(item => {
    if(item.isChecked){
      return true;
    }
  }).length

  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <div className={styles.wrapperHeader}>
          <p>Tarefas criadas <span>{todoList.length}</span></p>
          <p>Concluídas <span>{sumChecked} de {todoList.length}</span></p>
        </div>
      </header> 
      <div>
        { todoList.length > 0 ? 
          (
            <div  className={styles.listContainer}>
              {todoList.map(item => (
                <Task
                  key={item.id}
                  id={item.id}
                  todoList={todoList}
                  description={item.description}
                  isChecked={item.isChecked}
                  handleChecked={handleChecked}
                  onChecked={onChecked}
                  onDeleteTodo={deleteTodo}
                  onDelete={onDelete}
                />
              ))}
            </div>
          )
          :
          (
            <div className={styles.noList}>
              <p >
                <ClipboardText size={56} />
              </p>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

