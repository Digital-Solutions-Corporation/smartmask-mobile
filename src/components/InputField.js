import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";





export default function InputField({placeholder, value, onChangeText, error = "", secureTextEntry = false}) {
	const [changed, setChanged] = useState(false);

	const onInputTextChange = (val) => {
		setChanged(true);
		onChangeText(val);
	}

	if (changed && value === "") {
		error = "Não pode ser vazio";
	}
	
	if (error === "") {
		return (
			<View style={styles.container}>
				<TextInput
					placeholder={placeholder}
					value={value}
					style={styles.inputField}
					onChangeText={onChangeText}
					secureTextEntry={secureTextEntry}
				/>
			</View>
		)
	}
	else {
		return (
			<View style={styles.container}>
				<TextInput
					placeholder={placeholder}
					value={value}
					style={[styles.inputField, {borderColor: "rgb(240, 125, 125)"}]}
					onChangeText={onInputTextChange}
					secureTextEntry={secureTextEntry}
				/>
				<Text style={styles.error}>{error}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 16
	},
	inputField: {
		borderBottomWidth: 2,
		paddingBottom: 4,
		paddingHorizontal: 8,
		borderColor: "rgba(20, 33, 61, 0.5)",
	},
	error: {
		color: "rgb(240, 125, 125)"
	}
});