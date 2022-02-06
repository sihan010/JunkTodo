import React, { useState, useEffect, createRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput as RNTextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../features/store";
import { ActivityIndicator, TextInput, useTheme } from "react-native-paper";
import { addNewTodo } from "../features/todos/todoSlice";
import TodoItem from "../components/TodoItem";
import FakeTodo from "../types/FakeTodo";
import { getTodosThunk } from "../features/todos/todoThunk";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../navigation";
import MainHeader from "../components/MainHeader";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const { todos, loading } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigation = useNavigation<NavigationProps>();
  let todoInputRef = createRef<RNTextInput>();

  useEffect(() => {
    dispatch(getTodosThunk({ search: "abc", limit: 10 }));
  }, [dispatch]);

  const [todo, setTodo] = useState("");
  const addTodo = () => {
    let newTodo: FakeTodo = {
      id: todos[todos.length - 1].id + 1,
      userId: 3,
      title: todo,
      completed: false,
    };
    dispatch(addNewTodo(newTodo));
    //todoInputRef.current?.props.value;
  };

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: theme.colors.surface,
      }}
    >
      <MainHeader navigation={navigation} appName="JunkToDo" />
      <View style={styles.surface}>
        <TextInput
          ref={todoInputRef}
          autoComplete={false}
          mode="outlined"
          placeholder="Type Todo Content"
          value={todo}
          label="New Todo"
          onChangeText={(t) => setTodo(t)}
          style={{ width: "100%" }}
          right={
            <TextInput.Icon
              name="plus-circle"
              onPress={addTodo}
              color="#16A085"
              size={32}
            />
          }
        />
      </View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {loading ? (
          <ActivityIndicator animating={true} size={28} />
        ) : (
          todos.map((item, index) => {
            return <TodoItem key={index} item={item} />;
          })
        )}
      </ScrollView>
      <StatusBar style="light" backgroundColor="#000000" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  surface: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
