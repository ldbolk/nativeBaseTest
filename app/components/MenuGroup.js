import React from 'react';
import { useNavigation } from '@react-navigation/native' // Have to use this because you can't pass navigation into the menu (would work in a button tho)
import { Box, Divider, HamburgerIcon, Menu, Pressable } from 'native-base'


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
                <Menu.Item onPress={() => navigation.navigate('TestPage')}>Test Page</Menu.Item>
            </Menu.Group>
            <Divider mt="3" w="100%" />
            <Menu.Group title="Games">
                <Menu.Item>Game 1</Menu.Item>
                <Menu.Item>Game 2</Menu.Item>
            </Menu.Group>
        </Menu>
    
}

export default MenuGroup;