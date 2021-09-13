import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Episode from '../screens/Episode';
import Episodes from '../screens/Episodes';

const Stack = createNativeStackNavigator();

export default function EpisodeStack() {
	return (
		<Stack.Navigator screenOptions={{headerShown: false,}}>
			<Stack.Screen name="Episodes" component={Episodes} />
			<Stack.Screen
				name="Episode"
				component={Episode}
				options={{
					
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
