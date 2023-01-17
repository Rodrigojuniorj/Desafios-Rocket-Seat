import { useState } from "react";
import { Text, View } from "react-native";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Todo } from "../../components/Todo";
import { styles } from "./styles";

export interface Todos {
  id: number;
  description: string;
  disabled: boolean;
}

export function Home() {
  const [todos, setTodos] = useState<Todos[]>([]);

  const todosCreate = todos.filter(todo => todo.disabled === false);
  const todosCongrate = todos.filter(todo => todo.disabled === true);

  return (
    <View style={styles.container}> 
      <Header />
      <Input 
        setInput={setTodos}
        todos={todos}
      />
      <View style={styles.content}>
        <View style={styles.contentItem}>
          <Text style={styles.contentItemText1}>Criadas</Text>
          <View style={styles.numberItem}>
            <Text style={styles.number}>{todosCreate.length}</Text>
          </View>
        </View>
        <View style={styles.contentItem}>
          <Text style={styles.contentItemText2}>Concluídas</Text>
          <View style={styles.numberItem}>
            <Text style={styles.number}>{todosCongrate.length}</Text>
          </View>
        </View>
      </View>
      <Todo 
        listTodo={todos ? todos : null}
        setInput={setTodos}
      />
    </View>
  );
}