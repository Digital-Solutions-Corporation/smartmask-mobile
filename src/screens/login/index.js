import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Colors from '../../colors';
import Images from '../../images';

export default function Login({ navigation }) {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [loading, setLoading] = useState(false);

	const onLogin = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setTimeout(() => {
				navigation.reset({
					index: 0,
					routes: [{ name: "Main" }]
				});
			}, 100);
		}, 2000);
	}

	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={styles.scrollViewContainer}
		>
			<Image source={Images.logoBig} style={styles.logo} />
			<Text style={styles.logoType}>smartmask</Text>
			<View style={styles.fieldContainer}>
				<Text style={styles.fieldName}>Email</Text>
				<TextInput
					value={email}
					placeholder="Insira o seu email aqui"
					style={styles.field}
					onChangeText={val => setEmail(val)}
				/>
			</View>
			<View style={styles.fieldContainer}>
				<Text style={styles.fieldName}>Senha</Text>
				<TextInput
					value={senha}
					placeholder="Insira a sua senha aqui"
					secureTextEntry={true}
					style={styles.field}
					onChangeText={val => setSenha(val)}
				/>
			</View>
			<Text style={styles.fakeLink}>Esqueci minha senha</Text>
			<Text style={styles.fakeLink}>Não tenho conta</Text>
			{!loading && (
				<TouchableOpacity
					style={styles.button}
					onPress={() => onLogin()}
				>
					<Text style={styles.buttonText}>Entrar</Text>
				</TouchableOpacity>
			)}
			{loading && (
				<ActivityIndicator
					style={styles.loadingIndicator}
					color={Colors.primary} size="large"
				/>
			)}

		</ScrollView>
	);
}


const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
	},
	scrollViewContainer: {
		flexDirection: 'column',
		alignItems: 'stretch',
		paddingHorizontal: 32,
		paddingVertical: 64
	},
	logo: {
		width: 160,
		height: 70,
		resizeMode: 'contain',
		alignSelf: 'center'
	},
	logoType: {
		alignSelf: 'center',
		fontSize: 32,
		color: Colors.primary,
		opacity: .5,
		marginBottom: 32
	},
	fieldContainer: {
		marginBottom: 32,
	},
	fieldName: {
		opacity: .5,
		paddingHorizontal: 8,
		color: Colors.primary,
	},
	field: {
		position: 'relative',
		borderBottomWidth: 2,
		paddingBottom: 0,
		paddingHorizontal: 8,
		borderColor: "rgba(20, 33, 61, 0.5)",
	},
	fakeLink: {
		color: Colors.primary,
		opacity: .5,
		alignSelf: 'flex-end',
		marginBottom: 4
	},
	button: {
		marginTop: 32,
		alignSelf: 'center',
		backgroundColor: Colors.primary,
		paddingHorizontal: 32,
		paddingVertical: 8,
		borderRadius: 9999
	},
	buttonText: {
		color: 'white',
		fontSize: 24
	},
	loadingIndicator: {
		marginTop: 32,
		alignSelf: 'center'
	}
});