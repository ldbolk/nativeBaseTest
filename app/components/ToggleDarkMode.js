  import { Switch, useColorMode, HStack, Text } from 'native-base'

function ToggleDarkMode() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <HStack space={2} alignItems="center">
        <Text>   Dark</Text>
        <Switch
          isChecked={colorMode === "light"}
          onToggle={toggleColorMode}
          aria-label={
            colorMode === "light" ? "switch to dark mode" : "switch to light mode"
          }
        />
        <Text>Light</Text>
      </HStack>
    );
}

//<Box
// _web={{
//     _text: {
//         fontFamily: "monospace",
//         fontSize: "sm",
//       },
//   }}
// px={2}
// py={1}
// _dark={{ bg: "blueGray.800" }}
// _light={{ bg: "blueGray.200" }}
// >
// App.js
// </Box>

export default ToggleDarkMode;