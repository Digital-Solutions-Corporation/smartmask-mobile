
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen({route, navigation}) {
	const {user} = route.params;
	const firstName = user.name.split(" ")[0];

	const onEditProfile = () => {
		navigation.navigate("EditProfile", {user});
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Olá {firstName}!</Text>
			<Text style={styles.subtitle}>Esse é o seu painel de controle da sua SmartMask</Text>
			<TouchableOpacity
				style={styles.editProfileBtn}
				onPress={() => onEditProfile()}
			>
				<Text style={styles.editProfileBtnTxt}>Editar perfil</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: 32,
		paddingHorizontal: 16
	},
	title: {
		fontSize: 32,
		marginBottom: 16
	},
	subtitle: {
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 24
	},
	editProfileBtn: {
		backgroundColor: '#14213D',
		paddingHorizontal: 32,
		paddingVertical: 8,
		marginBottom: 16,
		borderRadius: 3333
	},
	editProfileBtnTxt: {
		color: 'white',
	}
})