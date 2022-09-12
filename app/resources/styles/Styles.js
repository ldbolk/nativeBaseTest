import { Appearance, Dimensions } from 'react-native';

const colorScheme = Appearance.getColorScheme();

if( colorScheme === 'dark' ) {
    const page = {
        backgroundColor: "#263238",
        alignItem: 'center',
        flex: 1
    }
} else {
}

const page = {
    backgroundColor: '#000',
    alignItem: 'center',
    flex: 1
}

const container = {
    flex: 1,
    backgroundColor: '#fff',
}


export {
    page, container
}