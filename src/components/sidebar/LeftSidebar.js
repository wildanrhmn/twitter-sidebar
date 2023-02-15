import React from "react";
import { Box, Button } from "@chakra-ui/react";
import Styles from "../../styles/LeftSidebar.module.css"
import { options } from "../../assets/IconOptions";
import SidebarLink from "./SidebarLink";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

import {
  Home,
  Search,
  NotificationsNone,
  Email,
  BookmarkBorder,
  ListAlt,
  PersonOutline,
  MoreHoriz,
} from "@mui/icons-material";

function LeftSidebar() {

  return (
    <Box className={Styles.sidebarBox}>
      <SidebarLink text="Home" Icon={Home} />
      <SidebarLink text="Search" Icon={Search} />
      <SidebarLink text="Notifications" Icon={NotificationsNone} />
      <SidebarLink text="Messages" Icon={Email} />
      <SidebarLink text="Bookmarks" Icon={BookmarkBorder} />
      <SidebarLink text="Lists" Icon={ListAlt} />
      <SidebarLink text="Contacts" Icon={PersonOutline} />

      <Menu placement="right-end">
        <MenuButton className={Styles.menuButton} as={Button} leftIcon={<MoreHoriz />} bgColor="transparent" aria-label="Options">
            More
        </MenuButton>
        <MenuList className={Styles.menuList}>
            {options.map((option) => (
              <MenuItem  className={Styles.menuItem}>{option.icon}{option.link}</MenuItem >
            ))}
        </MenuList>
      </Menu>

      <Button 
      colorScheme="twitter"
      width="100%"
      borderRadius={18}
      fontSize="16px"
      height="46px"
      >Tweet</Button>

    </Box>
  );
}

export default LeftSidebar;
