import React, { useState, useEffect } from 'react';
import { Button, View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

async function getEpisodes(page) {
	const url = 'https://rickandmortyapi.com/api/episode/?page=' + page;
	const episodes = await fetch(url).then((resp) => resp.json()).then(function(data) {
		return data.results;
	});
	return episodes;
}

export default function Episodes({ navigation }) {
	const [ page, setPage ] = useState(1);

	const [ episodes, setEpisodes ] = useState([]);

	useEffect(
		() => {
			async function fetchData() {
				const episodes = await getEpisodes(page);
				setEpisodes(episodes);
			}
			fetchData();
		},
		[ page ]
	);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={episodes}
				renderItem={({ item }) => (
					<View
						style={{ flex: 1, flexDirection: 'column', margin: 1, backgroundColor: '#d1d3ff', height: 25 }}
					>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate('Episode', {
									episode: item
								});
							}}
						>
							<Text style={{ fontSize: 20 }}>
								{item.id} ) {item.name}
							</Text>
						</TouchableOpacity>
					</View>
				)}
				numColumns={1}
				keyExtractor={(item, index) => index}
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
						if (page < 3) setPage(page + 1);
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
		paddingTop: 10
	},

	imageGrid: {
		justifyContent: 'center',
		flex: 1,
		height: 250
	}
});
