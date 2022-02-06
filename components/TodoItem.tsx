import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { markCompletedById, removeTodoById } from "../features/todos/todoSlice";
import FakeTodo from "../types/FakeTodo";
import { Paragraph } from "react-native-paper";

interface TodoItemProps {
  item: FakeTodo;
}

const TodoItem = ({ item }: TodoItemProps) => {
  const dispatch = useDispatch();
  const removeTodo = (id: number) => {
    dispatch(removeTodoById(id));
  };
  const markCompleted = (id: number) => {
    dispatch(markCompletedById(id));
  };
  return (
    <View style={styles.surface}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, padding: 5 }}>
          <Paragraph style={{ fontSize: 20 }}>{item.title}</Paragraph>
          <Paragraph style={{ fontSize: 16 }}>User: {item.userId}</Paragraph>
          <Paragraph
            style={{
              fontSize: 14,
            }}
          >
            Completed:{" "}
            <Paragraph
              style={{
                fontSize: 16,
                color: item.completed ? "#27AE60" : "#D35400",
              }}
            >
              {item.completed ? "Yes" : "No"}
            </Paragraph>
          </Paragraph>
        </View>
        <View style={styles.actionPanel}>
          <TouchableOpacity
            onPress={() => markCompleted(item.id)}
            style={styles.actionItem}
          >
            <Icon name="check-circle" size={30} color="#2980B9" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => removeTodo(item.id)}
            style={styles.actionItem}
          >
            <Icon name="close-circle" size={30} color="#CB4335" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  surface: {
    flex: 1,
    margin: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#9B59B6",
  },
  actionPanel: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    backgroundColor: "#17202A",
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
  },
  actionItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TodoItem;
