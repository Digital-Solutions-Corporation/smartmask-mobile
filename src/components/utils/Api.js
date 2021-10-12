const URL = "http:10.0.0.100:8080/";

export const createUser = async (userData) => {
	userData = {
		cellphone: 0,
		age: 0,
		genre: 0,
		photoUrl: "a",
		...userData
	}
	try {
		const body = JSON.stringify({
			nome: userData.name,
			email: userData.email,
			senha: userData.password,
			telefone: userData.cellphone,
			idade: userData.age,
			genero: userData.genre,
			fotoUrl: userData.photoUrl
		});
		const response = await fetch(URL + "addUsuario", {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-type': 'application/json'
			},
			body
		});

		const txt = await response.text();
		const json = JSON.parse(txt);

		return json;
	} catch (e) {
		throw e;
	}
};

export const getUser = async (email, senha) => {
	try {
		const response = await fetch(URL + `authUsuario?email=${email}&senha=${senha}`);

		const txt = await response.text();
		console.log(txt);
		const json = JSON.parse(txt);

		return json;
	} catch (e) {
		throw e;
	}
}

export const updateUser = async (user) => {
	try {
		const body = JSON.stringify(user);
		const response = await fetch(URL + "update", {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-type': 'application/json'
			},
			body
		});

		const txt = await response.text();
		const json = JSON.parse(txt);

		return json;
	} catch (e) {
		throw e;
	}
}

export const deleteUser = async (id) => {
	try {
		const response = await fetch(URL + `delete/${id}`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-type': 'application/json'
			}
		});

		return response.status;
	} catch (e) {
		throw e;
	}
}

