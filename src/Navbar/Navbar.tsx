import React from "react";
import "./Navbar.scss";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<i className="fa-solid fa-caret-down"></i>}
            borderRadius="2.5rem"
            size="lg"
            marginRight="auto"
          >
            Main Home
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        {/* <Button
          borderRadius="2.5rem"
          size="lg"
          _hover={{
            color: "white",
            backgroundColor: "black",
            variant: "outline",
          }}
        >
          Sign Up
        </Button>
        <Button
          colorScheme="gray"
          color="white"
          borderRadius="2.5rem"
          variant="outline"
          size="lg"
          _hover={{ color: "black", backgroundColor: "white" }}
        >
          Button
        </Button> */}
      </div>
    </>
  );
}

export default Navbar;
