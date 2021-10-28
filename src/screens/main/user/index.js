import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import Colors from '../../../colors';
import Header from '../../../components/header';
import Images from '../../../images';

export default function User({ navigation }) {
	return (
		<View style={styles.container}>
			<Header navigation={navigation} title="Perfil"/>
			<ScrollView
				contentContainerStyle={styles.scrollViewContainer}
			>
				<View style={styles.top}>
					<View style={styles.profileFrame}>
						<View style={styles.profileImageContainer}>
							<Image style={styles.profileImage} source={Images.userPhoto}/>
						</View>
					</View>
					<View style={styles.userInfo}>
						<Text style={styles.userName}>Gabriel Henrique</Text>
						<Text style={styles.userAge}>18 Anos</Text>
					</View>
				</View>
				<View style={styles.profileField}>
					<Text style={styles.profileFieldName}>Email</Text>
					<Text style={styles.profileFieldValue}>ghsoares99795@gmail.com</Text>
				</View>
				<View style={styles.profileField}>
					<Text style={styles.profileFieldName}>Celular</Text>
					<Text style={styles.profileFieldValue}>(19) 92048-7886</Text>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 16
	},
	scrollViewContainer: {
		flexDirection: 'column',
		alignItems: 'stretch',
		paddingHorizontal: 8
	},
	top: {
		flexDirection: 'row',
		marginBottom: 16,
	},
	profileFrame: {
		width: 100,
		height: 100,
		padding: 4,
		backgroundColor: Colors.primary,
		borderRadius: 999
	},
	profileImageContainer: {
		width: "100%",
		height: "100%",
		borderRadius: 999,
		overflow: 'hidden'
	},
	profileImage: {
		width: "100%",
		height: "100%",
	},
	userInfo: {
		marginLeft: 16
	},
	userName: {
		fontSize: 24,
		color: Colors.primary
	},
	userAge: {
		fontSize: 16,
		color: Colors.primary,
		opacity: .8
	},
	profileField: {
		marginBottom: 16
	},
	profileFieldName: {
		color: Colors.primary,
		fontSize: 24,
	},
	profileFieldValue: {
		color: Colors.primary,
		fontSize: 16,
		opacity: .75
	}
});