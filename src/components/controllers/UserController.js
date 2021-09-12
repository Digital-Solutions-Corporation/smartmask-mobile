import { getUsers, setUsers } from "../utils/Storage";

let users = null;

const initUsersIfNeeded = async (callback) => {
	if (users == null) {
		try {
			users = await getUsers(callback);
		} catch (e) {
			throw e;
		}
	}
}

const saveUsers = async (callback) => {
	try {
		await setUsers(users, callback);
	} catch (e) {
		throw e;
	}
}

export const createUser = async (name, email, password, callback) => {
	try {
		await initUsersIfNeeded(callback);
		if (email in users) {
			throw new Error("Email já foi usado.");
		}
		let newUser = {
			email,
			password,
			name,
			age: -1,
			profileSrc: ""
		};
		users[email] = newUser;
		await saveUsers(callback);
		return newUser;
	} catch (e) {
		throw e;
	}
}

export const readUser = async (email, password, callback) => {
	try {
		await initUsersIfNeeded(callback);
		if (!(email in users)) {
			throw new Error("Usuário não existe.");
		}
		if (users[email].password === password) {
			return users[email];
		} else {
			throw new Error("Senha incorreta.");
		}
	} catch (e) {
		throw e;
	}
}

export const updateUser = async (email, password, data, callback) => {
	try {
		await initUsersIfNeeded(callback);
		if (!(email in users)) {
			throw new Error("Usuário não existe.");
		}
		if (users[email].password === password) {
			//users[email] = data;
			delete users[email];
			users[data.email] = data;
			await saveUsers(callback);
		} else {
			throw new Error("Senha incorreta.");
		}
	} catch (e) {
		throw e;
	}
}

export const deleteUser = async (email, password, callback) => {
	try {
		if (!(email in users)) {
			throw new Error("Usuário não existe.");
		}
		if (users[email].password === password) {
			delete users[email];
			await saveUsers(callback);
		} else {
			throw new Error("Senha incorreta.");
		}
	} catch (e) {
		throw e;
	}
}

