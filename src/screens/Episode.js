import React from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function Episode({ route, navigation }) {
	const { episode } = route.params;

	return (
		<SafeAreaView style={styles.container}>
			<Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15 }}>Bölüm Adı : {episode.name}</Text>
			<Text style={{ fontSize: 15, marginBottom: 15 }}>Bölüm : {episode.episode}</Text>

			<Button color="red" title="Tüm Bölümlere Geri Dön" onPress={() => navigation.goBack()} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 320
	}
});
