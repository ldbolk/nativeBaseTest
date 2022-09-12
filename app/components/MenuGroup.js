import React from 'react';
import { useNavigation } from '@react-navigation/native' // Have to use this because you can't pass navigation into the menu (would work in a button tho)
import { Box, Divider, HamburgerIcon, Menu, Pressable } from 'native-base'
import ToggleDarkMode from './ToggleDarkMode';

import Game1 from '../views/Game1/Game1'

// Menu can have functions etc onOpen and onClose
function MenuGroup() {
    const navigation = useNavigation();

    return <Menu w="150" defaultIsOpen={false} trigger={triggerProps => { // bug; defaultisopen needs to be set to false otherwise downgrade nativebase
            return <Pressable {...triggerProps}>
            <HamburgerIcon size='19' style={{ marginTop: 50, marginLeft: 15 }} />
            </Pressable>;
        }}>
            <Menu.Group title="Information">
                <Menu.Item onPress={() => navigation.navigate('HomePage')}>Home page</Menu.Item>
                <Menu.Item onPress={() => navigation.navigate('DetailPage')}>About</Menu.Item>
            </Menu.Group>
            <Divider mt="3" w="100%" />
            <Menu.Group title="Games">
                <Menu.Item onPress={() => navigation.navigate('Game1')}>Game 1</Menu.Item>
                <Menu.Item>Game 2</Menu.Item>
                <Menu.Item>Game 3</Menu.Item>
            </Menu.Group>
            <Divider mt="3" w="100%" />
            <Menu.Group title="Category 3">
                <Menu.Item>Stuff 1</Menu.Item>
                <Menu.Item>Stuff 2</Menu.Item>
            </Menu.Group>
            <Divider mt="3" w="100%" />
            <Menu.Group title="Style">
                <ToggleDarkMode />
            </Menu.Group>

        </Menu>
    
}

export default MenuGroup;