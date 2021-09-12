
import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';





export default function WelcomeScreen({route, navigation}) {
	const {user} = route.params;
	const firstName = user.name.split(" ")[0]
	return (
		<View style={styles.container}>
			<Text>Olá {firstName}!</Text>
			<TouchableOpacity>
				<Text>Editar perfil</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})