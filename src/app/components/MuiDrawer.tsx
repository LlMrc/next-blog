import {
  Dashboard,
  PersonAdd,
  Group,
  StorefrontOutlined,
  AccountCircleOutlined,
  Menu,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const linkItems = [
  {
    name: "Users",
    href: "/users",
    icon: <PersonAdd />,
  },
  {
    name: "Groups",
    href: "/group",
    icon: <Group />,
  },
  {
    name: "My gallery",
    href: "/gallery",
    icon: <StorefrontOutlined />,
  },

  {
    name: "Sign up",
    href: "/profil",
    icon: <AccountCircleOutlined />,
  },
];
export default function MuiDrawer({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: () => void;
}) {
  return (
    <Drawer
    
      anchor="left"
      aria-label="mui drawer"
      open={isOpen}
      onClose={setOpen}
    >
      <Stack width={200} spacing={2} padding={2}>
        <Box p={2} />
        <Link href={"/"} style={{ textDecoration: "none" }}>
          <Typography variant="h5" color={"black"} align="center" >
            Home
          </Typography>
        </Link>
        <Divider />
        
        {linkItems.map((item) => (
          <Paper  key={item.name} >
            <Box flexDirection={"row"} alignContent={'center'} gap={2} m={2}  >
              {item.icon}
              <Link href={item.href}  style={{textDecoration: 'none', margin:2, color: 'black'}}> {item.name}</Link>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Drawer>
  );
}
