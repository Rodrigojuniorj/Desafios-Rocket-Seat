import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';
import { TodoItensProps } from '../App';
import styles from './Input.module.css';

interface InputProps {
    todoLists: (Todo: TodoItensProps) => void;
    autoIncrement: number;
}

export function Input({todoLists, autoIncrement}: InputProps) {
    const [newTodoText, setNewTodoText] = useState('');

    function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTodoText(event.target.value);
    }

    function handleNewTodo(event: FormEvent){
      event.preventDefault();

      const todoItem = {
            id: autoIncrement + 1,
            description: newTodoText
        }
      
      todoLists(todoItem)
      setNewTodoText('');
    }
    
    function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    return (
        <form onSubmit={handleNewTodo} className={styles.content}>
            <input 
                type="text"
                placeholder='Adicione uma nova tarefa'
                value={newTodoText}
                onChange={handleNewTodoChange}
                onInvalid={handleNewTodoInvalid}
                required
            />
            <button type='submit' >
                Criar <PlusCircle size={16} />
            </button>
        </form>
    )
}