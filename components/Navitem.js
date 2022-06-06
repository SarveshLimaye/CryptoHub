import React from "react";

import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
} from '@chakra-ui/react'

const NavItem = ({ icon, title, active, navSize}) => {

    return (
        <Flex
        mt={30}
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
    >
        <Menu placement="right">
            <Link
                backgroundColor={active && "#AEC8CA"}
                p={3}
                borderRadius={8}
                _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
                w={navSize == "large" && "100%"}
            >
                <MenuButton w="100%">
                    <Flex>
                        <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "white"} />
                        <Text ml={5} color="white"  display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                    </Flex>
                </MenuButton>
            </Link>
        </Menu>
    </Flex>
    )

}

export default NavItem