import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import TodoList from './src/components/TodoList';

const App = (props) => {
	return (
		<View>
			<TodoList />
		</View>
	);
};

const styles = StyleSheet.create({});

export default App;
