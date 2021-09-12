import AsyncStorage from "@react-native-async-storage/async-storage";

const USERS_KEY = "SMARTMASK_USERS"

export const getUsers = async (callback) => {
	try {
		const json = await AsyncStorage.getItem(USERS_KEY, callback);
		return json != null ? JSON.parse(json) : {};
	} catch (e) {
		throw new Error("Erro ao obter usuários.");
	}
}

export const setUsers = async (users, callback) => {
	try {
		const json = JSON.stringify(users);
		await AsyncStorage.setItem(USERS_KEY, json, callback);
	} catch (e) {
		throw new Error("Erro ao salvar os usuários.");
	}
}



