import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import WelcomeScreen from './WelcomeScreen';
import EditProfile from './EditProfile';


const Stack = createNativeStackNavigator();


export default function Navigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Login"
				screenOptions={{
				  headerShown:false
				}}
			>
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{
						title: "Login"
					}}
				/>
				<Stack.Screen
					name="Register"
					component={RegisterScreen}
					options={{
						title: "Registre-se"
					}}
				/>
				<Stack.Screen
					name="Welcome"
					component={WelcomeScreen}
					options={{
						title: "Tela inicial"
					}}
				/>
				<Stack.Screen
					name="EditProfile"
					component={EditProfile}
					options={{
						title: "Editar perfil"
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}