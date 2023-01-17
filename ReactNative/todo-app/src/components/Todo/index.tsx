import { Clipboard } from "phosphor-react-native";
import { FlatList, Text, View } from "react-native";
import { Todos } from "../../screens/Home";
import { Itens } from "./components/Itens";

import { styles } from "./styles";

interface TodoProps {
  listTodo: Todos[] | null;
  setInput: (data: Todos[]) => void;
}

export function Todo({ listTodo, setInput }: TodoProps) {

  function handleDisable(id: number) {

    const newList = listTodo?.map((item) => {
      if (item.id === id) {
        item.disabled = !item.disabled;
      }
      return item;
    });

    setInput(newList!);
   
  }

  function handleDelete(id: number) {
    const newList = listTodo?.filter((item) => item.id !== id);

    setInput(newList!);
  }

  return listTodo ? (
    <FlatList
      style={{
        paddingHorizontal: 24,
        marginTop: 20,
        marginBottom: 30,
      }}
      data={listTodo}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <Itens
          id={item.id}
          description={item.description}
          disabled={item.disabled}
          handleDisable={handleDisable}
          handleDelete={handleDelete}
        />
      )}
    />
  ) : (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          borderTopColor: "#262626",
          borderTopWidth: 1,
        }}
      />
      <Clipboard
        size={56}
        color="#808080"
        style={{
          marginTop: 20,
        }}
      />
      <Text style={styles.textBold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
