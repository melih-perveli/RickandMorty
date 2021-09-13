import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Characters from '../screens/Characters';
import OnlyCharacter from '../screens/OnlyCharacter';
const Stack = createNativeStackNavigator();

export default function CharacterStack() {
	return (
		<Stack.Navigator screenOptions={{headerShown: false,}}>
			<Stack.Screen
				name="Characters"
				component={Characters}
				options={{
					title: 'Characters',
					headerStyle: {
						backgroundColor: '#f4511e'
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold'
					}
				}}
			/>
			<Stack.Screen
				name="Character"
				component={OnlyCharacter}
				options={{
					title: '',
					headerStyle: {
						backgroundColor: '#f4511e'
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold'
					}
				}}
			/>
		</Stack.Navigator>
	);
}
