import React from 'react';
import { Button, View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';

export default function OnlyCharacter({ route, navigation }) {
	const { character } = route.params;

	return (
		<SafeAreaView style={styles.container}>
			<Image style={styles.card} source={{ uri: character.image }} />
			<Text>Name : {character.name}</Text>
			<Text>Species : {character.species}</Text>
			<Button color="green" title="Tüm Karakterlere Geri Dön" onPress={() => navigation.goBack()} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	card: {
		marginTop: 140,
		width: 300,
		height: 300,
		borderWidth: 10,
		borderRadius: 100,
		padding: 150
	}
});
