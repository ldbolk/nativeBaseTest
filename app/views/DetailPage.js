import React, { useState } from "react";
import {
        Text,
        HStack,
        Center,
        Heading,
        VStack,
    } from "native-base";
import NativeBaseIcon from "../../app/components/NativeBaseIcon";

import MenuGroup from "../components/MenuGroup";

function DetailPage({ navigation }) {
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
        {/* <MenuGroup/> */}
        </VStack>
      </Center>
    )
}

export default DetailPage;