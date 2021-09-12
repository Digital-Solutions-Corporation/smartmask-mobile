import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import WelcomeScreen from './WelcomeScreen';


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
				/>
				<Stack.Screen
					name="Register"
					component={RegisterScreen}
				/>
				<Stack.Screen
					name="Welcome"
					component={WelcomeScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}