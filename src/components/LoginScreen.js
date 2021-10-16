import React, { useState } from 'react';
import {
	Alert, ScrollView, StyleSheet, Text,
	TextInput, TouchableOpacity, View
} from 'react-native';
import Logo from './Logo';
import { getUser } from './utils/Api';
import { validateEmail } from './utils/Masks';

export default function LoginScreen({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onLogin = async () => {
		if (!validateEmail(email)) {
			Alert.alert("Erro no login", "Email inválido");
			return;
		}
		try {
			const user = await getUser(email, password);
			navigation.reset({
				index: 0,
				routes: [{ name: "Welcome", params: { user } }]
			});
		} catch (e) {
			Alert.alert("Erro no login", e.message);
		}
	}

	const onRegister = () => {
		navigation.navigate("Register")
	}

	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={{
				alignItems: 'stretch',
				paddingVertical: 0,
				paddingHorizontal: 32,
			}}
		>
			<Logo />
			<TextInput
				placeholder="email"
				value={email}
				onChangeText={val => setEmail(val)}
				style={styles.inputField}
			/>
			<TextInput
				placeholder="senha"
				value={password}
				onChangeText={val => setPassword(val)}
				secureTextEntry={true}
				style={styles.inputField}
			/>

			<View style={{ height: 32 }} />

			<TouchableOpacity
				style={styles.button}
				onPress={() => onLogin()}
			>
				<Text style={styles.buttonText}>entrar</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => onRegister()}
			>
				<Text style={styles.buttonText}>Não tenho uma conta</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inputField: {
		borderBottomWidth: 2,
		paddingBottom: 0,
		paddingHorizontal: 8,
		borderColor: "rgba(20, 33, 61, 0.5)",
		marginBottom: 16,
	},
	button: {
		alignSelf: 'center',
		backgroundColor: '#14213D',
		paddingHorizontal: 32,
		paddingVertical: 8,
		marginBottom: 16,
		borderRadius: 3333
	},
	buttonText: {
		color: 'white'
	}
});


