import Constants from 'expo-constants';
import { Platform } from 'react-native';


export default {
	container: {
	    marginTop: Constants.statusBarHeight,
	    display: 'flex',
	},
	wrapper: {
	    flex: 1,
	    flexDirection: 'row',
	    backgroundColor: '#CCEECC',
	    marginVertical: 8,
	    marginHorizontal: 16,
	},
	card: {
	    flex: 7,
	    flexDirection: 'column',
	},
	image: {
	  	margin: 10,
	  	padding: 10,
	    flex: 2,
	    width: 80,
	    height: 80, 
	},
	name: {
		marginTop: 10,
	  	fontSize: 18,
	  	color: '#4c4c4c',
	  	fontWeight: '600'
	},
	age: {
		marginTop: 3,
	  	fontSize: 14,
	  	color: '#8c8c8c',
	  	fontWeight: '600'
	},
	title: {
		textAlign: 'center',
	  	fontSize: 20,
	  	color: '#4c4c4c',
	  	fontWeight: '600'
	},
	divider: {
		height: 1,
		margin: 20,
		backgroundColor: '#8c8c8c'
	}
};