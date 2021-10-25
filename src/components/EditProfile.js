
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { deleteUser, updateUser } from './utils/Api';
import { validateEmail } from './utils/Masks';





export default function EditProfile({ route, navigation }) {
	const { user } = route.params;

	const [userName, setUserName] = useState(user.nome);
	const [userEmail, setUserEmail] = useState(user.email);
	//const [userAge, setUserAge] = useState(user.age);

	const onSave = async () => {
		if (userName === "") {
			Alert.alert("Erro ao editar perfil", "Nome não pode ser vazio")
		}
		if (!validateEmail(userEmail)) {
			Alert.alert("Erro ao editar perfil", "Email inválido");
			return;
		}
		try {
			let newUser = {
				...user,
				nome: userName,
				email: userEmail
			};
			const a = await updateUser(newUser);
			navigation.reset({
				index: 0,
				routes: [{ name: "Welcome", params: { user: newUser } }]
			});
		} catch (e) {
			Alert.alert("Erro ao editar perfil", e.message);
		}
	}

	const onDelete = async () => {
		try {
			const status = await deleteUser(user.id);
			if (status === 200) {
				navigation.reset({
					index: 0,
					routes: [{ name: "Login" }]
				});
			}
		} catch (e) {
			Alert.alert("Erro ao editar perfil", e.message);
		}
	}

	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={{
				alignItems: 'stretch',
				paddingVertical: 32,
				paddingHorizontal: 32,
			}}
		>
			<Text style={styles.inputName}>Nome </Text>
			<TextInput
				placeholder="nome"
				value={userName}
				onChangeText={val => setUserName(val)}
				style={styles.inputField}
			/>
			<Text style={styles.inputName}>Email </Text>
			<TextInput
				placeholder="email"
				value={userEmail}
				onChangeText={val => setUserEmail(val)}
				style={styles.inputField}
			/>
			<TouchableOpacity
				style={styles.saveBtn}
				onPress={() => onSave()}
			>
				<Text style={styles.saveBtnTxt}>Salvar</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.deleteBtn}
				onPress={() => onDelete()}
			>
				<Text style={styles.deleteBtnTxt}>Deletar Perfil</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		
	},
	inputName: {
		color: "rgba(20, 33, 61, 0.5)"
	},
	inputField: {
		borderBottomWidth: 2,
		paddingBottom: 0,
		//paddingHorizontal: 8,
		marginBottom: 32,
		borderColor: "rgba(20, 33, 61, 0.5)",
	},
	saveBtn: {
		backgroundColor: '#14213D',
		paddingHorizontal: 32,
		paddingVertical: 8,
		marginBottom: 16,
		borderRadius: 3333,
		alignSelf: 'center'
	},
	saveBtnTxt: {
		color: 'white',
	},
	deleteBtn: {
		backgroundColor: '#fc033d',
		paddingHorizontal: 32,
		paddingVertical: 8,
		marginBottom: 16,
		borderRadius: 3333,
		alignSelf: 'center'
	},
	deleteBtnTxt: {
		color: 'white',
	}
})