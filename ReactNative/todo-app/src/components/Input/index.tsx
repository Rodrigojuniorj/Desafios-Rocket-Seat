import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { PlusCircle } from 'phosphor-react-native'
import { Todos } from "../../screens/Home";
import { useState } from "react";

interface InputProps {
  setInput: (data: Todos[]) => void;
  todos: Todos[];
}

export function Input({ setInput, todos }: InputProps) {
  const [text, setText] = useState('');

  function handleAddTodo() {
    if(!text){
      alert('Informe uma tarefa');
      return;
    }

    const data = {
      id: new Date().getTime(),
      description: text,
      disabled: false
    }

    setInput([...todos, data]);
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        value={text}
        onChangeText={value => setText(value)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTodo} >
        <PlusCircle size={25} color="#F2F2F2" />
      </TouchableOpacity>
    </View>
  );
}
