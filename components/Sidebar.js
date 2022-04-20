import React from 'react';
import { Flex, IconButton ,LinkBox} from "@chakra-ui/react"
import { FaList , FaRegNewspaper } from "react-icons/fa";
import {BsCurrencyBitcoin , BsCurrencyExchange} from "react-icons/bs";
import {AiOutlineHome} from "react-icons/ai"
import {useState} from "react";
import Link from 'next/link';


import NavItem from './Navitem'


const Sidebar = () => {
const [navSize, changeNavSize] = useState("large")
return (
        <div>

<Flex
 pos="sticky"
 left="5"
 height="100%"
 marginTop="0vh"
 boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
 w={navSize == "small" ? "75px" : "200px"}
 flexDirection="column"
 justifyContent="space-between"
 background="#06113C"

>

<Flex
 p="5%"
 flexDirection="column"
 alignItems="flex-start"
 as="nav"
 onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
>

<IconButton
    background="none"
    color="white"
    icon={<FaList />}
    mt="5"
    ml="3"
    _hover={{ bg: "none" }}
    as="nav"
    
/>
                <Link href="/"><NavItem navSize={navSize} icon={AiOutlineHome} title="Home"/></Link>
                <Link href="/Crypto"><LinkBox w="100%"><NavItem navSize={navSize} icon={BsCurrencyBitcoin} title="Coins" /> </LinkBox></Link>
                <Link href="/Exchange"><LinkBox w="100%"><NavItem navSize={navSize} icon={BsCurrencyExchange} title="Exchange" /></LinkBox></Link>
                <Link href="/News"><LinkBox w="100%"><NavItem navSize={navSize} icon={FaRegNewspaper} title="News" /></LinkBox></Link>


</Flex>


</Flex>



        </div>
        


    )







}

export default Sidebar
