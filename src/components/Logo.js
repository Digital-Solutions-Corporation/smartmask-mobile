import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';



export default function Logo() {
	return (
		<View style={styles.container}>
			<Image
				resizeMode="contain"
				source={require("../img/logo.png")}
				style={styles.logo}
			/>
			<Text style={styles.title}>smartmask</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginTop: 64,
	},
	logo: {
		width: 180,
		height: 75,
	},
	title: {
		fontSize: 32,
		fontWeight: "600",
		color: "rgba(20, 33, 61, 0.3)",
		marginBottom: 64
	}
});