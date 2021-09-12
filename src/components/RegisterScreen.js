import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createUser, ERROR_CODE, UserException } from "./controllers/UserController";
import InputField from "./InputField";
import Logo from "./Logo";
import { validateEmail } from "./utils/Masks";

export default function RegisterScreen({navigation}) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const onNameChanged = (val) => {
		setName(val);
	}

	const onEmailChanged = (val) => {
		if (validateEmail(val)) {
			setEmailError("");
		} else {
			setEmailError("Formato inválido");
		}
		setEmail(val);
	}

	const onPasswordChanged = (val) => {
		setPassword(val);
	}

	const onPasswordConfirmationChanged = (val) => {
		if (val === password) {
			setPasswordError("");
		} else {
			setPasswordError("Senhas não conferem");
		}
		setPasswordConfirmation(val);
	}

	const onRegister = async() => {
		if (emailError !== "" || passwordError !== "") return;
		
		try {
			const user = await createUser(name, email.trim(), password);
			navigation.reset({
				index: 0,
				routes: [{name: "Welcome", params: {user}}]
			});
		} catch (e) {
			if (e instanceof UserException) {
				if (e.code == ERROR_CODE.EMAIL) {
					setEmailError(e.message);
				}
			} else {
				Alert.alert("Erro no login", e.message);
			}
		}
	}

	const onLogin = () => {
		navigation.navigate("Login");
	}

	return (
		<View style={styles.container}>
			<Logo />
			<InputField
				placeholder="nome"
				value={name}
				onChangeText={onNameChanged}
			/>
			<InputField
				placeholder="email"
				value={email}
				error={emailError}
				onChangeText={onEmailChanged}
			/>
			<InputField
				placeholder="senha"
				value={password}
				onChangeText={onPasswordChanged}
				secureTextEntry={true}
			/>
			<InputField
				placeholder="confirme sua senha"
				value={passwordConfirmation}
				error={passwordError}
				onChangeText={onPasswordConfirmationChanged}
				secureTextEntry={true}
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