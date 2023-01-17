import { Check, CheckCircle, Circle, Trash } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ItensProps {
  id: number;
  description: string;
  disabled: boolean;
  handleDisable: (id: number) => void;
  handleDelete: (id: number) => void;
}

export function Itens({ description, id, disabled, handleDelete, handleDisable }: ItensProps) {

  function handleClickDelete(){
    handleDelete(id);
  }

  function handleClickDisable() {
    handleDisable(id);
  }

  return disabled ? (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.content} onPress={handleClickDisable}>
          <View style={styles.circle}>
            <Check
              size={16}
              weight="bold"
              color="#F2F2F2"
              style={styles.checkCircle}
            />
          </View>
          <Text style={styles.textDisabled} disabled>
            {description}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClickDelete}>
          <Trash size={24} color="#333333" />
        </TouchableOpacity>
      </View>
    </>
  ) : (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} onPress={handleClickDisable}>
        <View style={styles.circleBorder} />
        <Text style={styles.text}>{description}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleClickDelete}>
        <Trash size={24} color="#333333" />
      </TouchableOpacity>
    </View>
  );
}
