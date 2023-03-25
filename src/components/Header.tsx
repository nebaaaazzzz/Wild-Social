import { Avatar, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <HStack
      zIndex={99}
      bg="white"
      position="sticky"
      top="0"
      shadow={"md"}
      p={2}
      justifyContent={"space-between"}
    >
      <Button variant={"outline"} px="7" py="0" size="md" rounded={"3xl"}>
        archive
      </Button>
      <HStack>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Text>Abrahmov</Text>
      </HStack>
    </HStack>
  );
}

export default Header;
