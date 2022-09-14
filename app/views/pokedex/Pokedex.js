import { createStackNavigator } from "react-navigation-stack";

import Pokemon from './Pokemon';
import Details from './Details';
import { createAppContainer } from "react-navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const appNavigator = createStackNavigator(
    {
        Pokemon: {
            screen: Pokemon,
            navigationOptions: {
                headerShown: false
            }
        },
        Details: {
            screen: Details
        }
    },
    {
        initialRouteName: 'Pokemon'
    }
)

const AppContainer = createAppContainer(appNavigator);

function Pokedex() {
    return <AppContainer/>
}

export default Pokedex;