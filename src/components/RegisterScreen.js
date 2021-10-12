import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView } from "react-native";
import Logo from "./Logo";
import { createUser } from "./utils/Api";
import { validateEmail } from "./utils/Masks";

export default function RegisterScreen({navigation}) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");

	const onRegister = async() => {
		if (name === "") {
			Alert.alert("Erro no cadastro", "Nome não pode ser vazio");
			return;
		}
		if (!validateEmail(email)) {
			Alert.alert("Erro no cadastro", "Email inválido");
			return;
		}
		if (password === "") {
			Alert.alert("Erro no cadastro", "Senha não pode ser vazio");
			return;
		}
		if (password !== passwordConfirmation) {
			Alert.alert("Erro no cadastro", "Senhas não conferem");
			return;
		}
		
		try {
			const user = await createUser({name, email: email.trim(), password});
			navigation.reset({
				index: 0,
				routes: [{name: "Welcome", params: {user}}]
			});
		} catch (e) {
			Alert.alert("Erro no cadastro", e.message);
		}
	}

	const onLogin = () => {
		navigation.navigate("Login");
	}

	return (
		<View
			style={styles.container}
			behavior="padding"
		>
			<Logo />
			<TextInput
				placeholder="nome"
				value={name}
				onChangeText={val => setName(val)}
				style={styles.inputField}
			/>
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
			<TextInput
				placeholder="confirme sua senha"
				value={passwordConfirmation}
				onChangeText={val => setPasswordConfirmation(val)}
				secureTextEntry={true}
				style={styles.inputField}
			/>

			<View style={{height: 32}}/>

			<TouchableOpacity
				style={styles.button}
				onPress={() => onRegister()}
			>
				<Text style={styles.buttonText}>cadastrar</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => onLogin()}
			>
				<Text style={styles.buttonText}>Já tenho uma conta</Text>
			</TouchableOpacity>
		</View>
	)
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
		paddingVertical: 64,
		paddingHorizontal: 64,
		//overflow: 'scroll',
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