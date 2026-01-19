import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/port logo.webp";
import { TbMenuDeep } from "react-icons/tb";
import { useState } from "react";

const TopNav = () => {
    const [MenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Box position={"relative"} w={"100vw"}>
        <Box
          position={"fixed"}
          h={"12vh"}
          w={"100%"}
          zIndex={"5000"}
          hideFrom={"md"}
          mb={"1rem"}
          p={"1rem"}
          bg={"rgba(250,250,250,.2)"}
          backdropFilter={"blur(10px)"}
          boxShadow={"0 0 10px rgba(0,0,0,.3)"}
        >
          <HStack justifyContent={"space-between"}>
            <Flex alignItems={"center"} gap={".5rem"}>
              <Image src={logo} w={"1.5rem"} />
              <Heading>Oscar Obiora</Heading>
            </Flex>
            <Box
              p={".5rem"}
              bg={"rgba(0,0,0,.2)"}
              borderRadius={"50%"}
              cursor={"pointer"}
              onClick={()=> {
                MenuOpen ? setMenuOpen(false) : setMenuOpen(true)
              }}
            >
              <TbMenuDeep size={"1.5rem"} />
            </Box>
          </HStack>
        </Box>

        <Box
          position={"absolute"}
          zIndex={"5000"}
          top={"12vh"}
          left={"-70vw"}
          height={"88vh"}
          width={"70vw"}
          bg={"#212223"}
          className={MenuOpen ? "openMenu" : ""}
          transitionProperty={'className'}
          transitionDuration={'.3s'}
          hideFrom={'md'}
        >
          <Heading m={"1.5rem 2rem"}>Menu</Heading>
          <Stack alignItems={"center"} gap={"1rem"}>
            <Text color={"#999999"} fontSize={"1.2rem"}>
              Home
            </Text>
            <Text color={"#999999"} fontSize={"1.2rem"}>
              About
            </Text>
            <Text color={"#999999"} fontSize={"1.2rem"}>
              Services
            </Text>
            <Text color={"#999999"} fontSize={"1.2rem"}>
              Skills
            </Text>
            <Text color={"#999999"} fontSize={"1.2rem"}>
              Resume
            </Text>
            <Text color={"#999999"} fontSize={"1.2rem"}>
              Portfolio
            </Text>
            <Text color={"#999999"} fontSize={"1.2rem"}>
              Testimonials
            </Text>
            <Text color={"#999999"} fontSize={"1.2rem"}>
              Contact
            </Text>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default TopNav;
