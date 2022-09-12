import React, { useState } from "react";
import {
  Text,
  HStack,
  Center,
  Heading,
  VStack,
} from "native-base";
import NativeBaseIcon from "../../app/components/NativeBaseIcon";

import ToggleDarkMode from '../components/ToggleDarkMode'
import MenuGroup from '../components/MenuGroup'

function Homepage() {
    return(
        <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
        >
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="lg">Congrats, it loaded</Heading>
          <HStack space={2} alignItems="center">
            <Text>I'm keeping the logo because it looks nice</Text>
          </HStack>
          {/* <Link href="https://docs.nativebase.io" isExternal> */}
            <Text color="primary.500" fontSize={"xl"}>
              Lorem text
            </Text>
          {/* </Link> */}
          <ToggleDarkMode />
        {/* <MenuGroup/>  */}
        {/* we don't pass on navigation into MenuGroup because it's not a single component; it has multiple routes */}
        </VStack>
      </Center>
    )
}


  

export default Homepage;