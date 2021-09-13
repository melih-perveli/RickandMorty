import React, { useState, useEffect } from 'react';
import { Button, View, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

async function getCharacters(page) {
	const url = 'https://rickandmortyapi.com/api/character/?page=' + page;
	const characters = await fetch(url).then((resp) => resp.json()).then(function(data) {
		return data.results;
	});
	return characters;
}

export default function CharactersScreen({ navigation }) {
	const [ characters, setCharacters ] = useState([]);
	const [ page, setPage ] = useState(1);

	useEffect(
		() => {
			async function fetchData() {
				const characters = await getCharacters(page);
				setCharacters(characters);
			}
			fetchData();
		},
		[ page ]
	);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				keyExtractor={(item, index) => index}
				data={characters}
				renderItem={({ item }) => (
					<View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate('Character', {
									character: item
								});
							}}
						>
							<Image
								style={styles.imageGrid}
								source={{
									uri: item.image
								}}
							/>
						</TouchableOpacity>
					</View>
				)}
				numColumns={4}
			/>

			<View style={{ flexDirection: 'row', backgroundColor: '#d1d3ff', justifyContent: 'space-between' }}>
				<Button
					color="#0060a3"
					title="Bir Önceki Sayfa"
					onPress={() => {
						if (page > 0) setPage(page - 1);
					}}
				/>

				<Button
					color="#003153"
					title="Bir Sonraki Sayfa"
					onPress={() => {
						if (page < 20) setPage(page + 1);
					}}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		justifyContent: 'center',
		flex: 1,
		paddingTop: 1
	},

	imageGrid: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 124
	}
});
