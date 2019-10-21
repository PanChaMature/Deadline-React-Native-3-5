import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TODOS } from '../utils/data.js';
import { useState } from 'react';

  const TodoItem = props => {
    const statusStyle = {
      backgroundColor: props.todo.status === 'Done' ? 'blue' : 'green'
    };
    return (
      <TouchableOpacity
        key={props.todo.body}
        style={[styles.todoItem, statusStyle]}
        onpress ={() => props.onToggleTodo(props.todo.id)}
     >
       <Text styles={styles.todoText}>
          {props.idx + 1}: {props.todo.body}
        </Text>
      </TouchableOpacity>
  );
  };

export default function AllScreen(props) {
  const [todoList, setTodoList] = useState(TODOS);

  const onToggleTodo = id => {
    const todo = todoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);
  };
  return ( 
    <View style={styles.container}>
      {todoList.map((todo, idx) => {
        return(
          <TodoItem
            idx={idx}
            todo={todo}
            key={todo.body}
            onToggleTodo={onToggleTodo}
          />
        );
      })}
    </View>
  );
}

AllScreen.navigationOptions = {
  title: 'All Todos'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  todoItem: {
    margin: 5,
    padding: 10,
    width: '95%',
    minHeight: 20,
    color: 'white',
    borderRadius: 5,
    flexWrap: 'wrap'
  },
  todoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
});