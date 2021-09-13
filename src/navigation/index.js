import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharacterStack from './characterStack';
import EpisodeStack from './episodeStack';
const Tab = createBottomTabNavigator();

export default function Navigator() {
	return (
		<NavigationContainer screenOptions={{headerShown: false}} >
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => null,
					tabBarActiveTintColor: 'tomato',
					tabBarInactiveTintColor: 'gray'
				})}
			>
				<Tab.Screen
					options={{ tabBarLabel: 'Karakterler', tabBarLabelStyle: { fontSize: 21 } }}
					name="Karakterler"
					component={CharacterStack}
				/>
				<Tab.Screen
					options={{ tabBarLabel: 'Bölümler', tabBarLabelStyle: { fontSize: 21 } }}
					name="Bölümler"
					component={EpisodeStack}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
