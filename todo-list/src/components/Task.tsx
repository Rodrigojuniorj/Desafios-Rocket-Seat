import { Check, Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { TodoProps } from './Todo';

interface TaskProps extends TodoProps{
  id: number;
  description: string;
  isChecked?: boolean;
  handleChecked: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

export function Task({ id, description, isChecked, handleChecked, onDeleteTodo, ...rest }: TaskProps) {

  return (
    <div
      className={styles.listItem}
    > 
      {
        isChecked ? (
          <button onClick={() => handleChecked(id)} className={styles.checkedButton} >
            <div >
              <Check />
            </div>
          </button>
        ) :
        (
          <button onClick={() => handleChecked(id)} className={styles.checkContainer} >
            <div />
          </button>
        )
      }
      <p className={isChecked ? styles.checkedItem : ''}>{description}</p>
      <button 
        onClick={() => onDeleteTodo(id)}
        type="button" 
        title='Deletar comentário'
      >
        <Trash size={20} />
      </button>
    </div>
  )
}

