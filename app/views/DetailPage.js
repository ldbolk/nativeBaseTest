import React, { useState } from "react";
import {
        Text,
        HStack,
        Center,
        Heading,
        VStack,
        Box,
    } from "native-base";
import NativeBaseIcon from "../../app/components/NativeBaseIcon";
import picture from '../../app/resources/images/cat.png'

import { Image } from 'react-native'

function DetailPage({ navigation }) {
    return(
        <Box
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
        >
        <VStack space={5} alignItems="center">
          <Image source={ picture }/>
          <Heading size="lg">Hi there, hello</Heading>
          <HStack space={2} alignItems="center">
            <Text>Gonna try making different modules on different pages so I suppose this'll be some kind of launcher but not really because 
              it'll be in the same app, might make some games on pages or something else. Anyhow, let's see how far we'll get
            </Text>
          </HStack>
        {/* <MenuGroup/> */}
        </VStack>
      </Box>
    )
}

export default DetailPage;