import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ERROR_CODE, readUser, UserException } from './controllers/UserController';
import InputField from './InputField';
import Logo from './Logo';
import { validateEmail } from './utils/Masks';

export default function LoginScreen({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

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

	const onLogin = async() => {
		if (emailError !== "") return;
		try {
			const user = await readUser(email.trim(), password);
			navigation.reset({
				index: 0,
				routes: [{name: "Welcome", params: {user}}]
			});
		} catch (e) {
			if (e instanceof UserException) {
				if (e.code == ERROR_CODE.USER) {
					setEmailError(e.message);
				} else if (e.code == ERROR_CODE.PASSWORD) {
					setPasswordError(e.message);
				}
			} else {
				Alert.alert("Erro no login", e.message);
			}
		}
	}

	const onRegister = () => {
		navigation.navigate("Register")
	}

	return (
		<View style={styles.container}>
			<Logo />
			<InputField
				placeholder="email"
				value={email}
				error={emailError}
				onChangeText={onEmailChanged}
			/>
			<InputField
				placeholder="senha"
				value={password}
				error={passwordError}
				onChangeText={onPasswordChanged}
				secureTextEntry={true}
			/>

			<View style={{height: 32}}/>
			
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
		</View>
	);
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



