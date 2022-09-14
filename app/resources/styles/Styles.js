import { Appearance, Dimensions } from 'react-native';

const colorScheme = Appearance.getColorScheme();
var page = {}
if( colorScheme === 'dark' ) {
    this.page = {
        backgroundColor: "#263238",
        alignItem: 'center',
        flex: 1
    }
} else {
    this.page = {
        backgroundColor: '#ECEFF1',
        alignItem: 'center',
        flex: 1
    }
}


const container = {
    flex: 1,
    backgroundColor: '#000',
}

const Pcontainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 30
}

const card = {
    display: 'flex',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: 20,
    marginVertical: 10
}

const searchContainer = {
    position: 'absolute',
    marginBottom: 70,
    left: '20%',
    zIndex: 1,
    marginTop: 10
}

const searchField = {
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    width: 250,
    borderRadius: 50
}

const image = {
    width: 200,
    height: 200
}

const text = {
    fontSize: 22,
    marginBottom: 15
}

const indicator = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
}

export {
    page, container, Pcontainer, card, searchContainer,
    searchField, image, text, indicator
}