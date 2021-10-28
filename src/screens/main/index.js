import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import About from './about';
import PanelsContainer from './panels';
import User from './user';

const Drawer = createDrawerNavigator();

export default function AppMain() {
	return (
		<Drawer.Navigator
			initialRouteName="Panels"
			screenOptions={{
				headerShown: false
			}}
		>
			<Drawer.Screen
				name="Panels"
				component={PanelsContainer}
				options={{
					title: "Home"
				}}
			/>
			<Drawer.Screen
				name="User"
				component={User}
				options={{
					title: "Perfil"
				}}
			/>
			<Drawer.Screen
				name="About"
				component={About}
				options={{
					title: "Sobre"
				}}
			/>
		</Drawer.Navigator>
	);
}

