
import {
  AccountCircleOutlined,
  Dashboard,
  Group,
  PersonAdd,
  StorefrontOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, styled } from "@mui/material";

import Link from "next/link";

import { FC } from "react";

interface SideItem {}

const Ulstyled = styled("ul")({
  listStyle: "none",
  listStyleType: "none",
  padding: 0,
});

const Linkstyled = styled("div")({
  display: "flex",
  fontSize: "1rem",
  textDecoration: "none",
  color: "#000",
  padding: ".8rem 1rem",
  backgroundColor: "#f3f4f6",
  marginBottom: "1rem",
  borderRadius: "0.8rem",
  boxShadow:
  "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
  "&:hover": { 
    backgroundColor: "rgba(0, 0, 0, 0.12)", 
    boxShadow:
    "0 2px 2px 0 rgba(0, 0, 0, 0), 0 0 0 1px rgba(0, 0, 0, 0)",
},
});

const Li_style = styled("li")({
  listStyle: "none",
  textDecoration: "none",
});

const SideBarIcon = styled("span")({
  fontSize: "1.2rem",
  display: "inline-block",
});
const TitleStyled = styled("span")({
  marginLeft: "0.7rem",
  color: "gray",
  fontWeight: "800",
  fontSize: "large",
  letterSpacing: "2",
  transition: " 0.5s  ease-in-out",
  "&:hover": { fontSize: "large" },
});

const linkItems = [
  {
    name: "Homepage",
    href: "/",
    icon: <Dashboard />,
  },
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
    href: "/",
    icon: <AccountCircleOutlined />,
  },
];
const sideStyle = {
  
  alignItems: "center",
  position: "fixed",

  maxWidth: "275px",
 height: '100vh',
 padding: 2,
 
};

const sideBar: FC<SideItem> = () => {
  return (
  
      <Box sx={sideStyle}>
        <Box height={2} />
        <Typography variant="h4" p={"10px 0"} noWrap={true}>
          Louis Marc Leonard
        </Typography>

        <Divider />

        <Ulstyled>
          {linkItems.map((item) => (
            <Li_style key={item.name}>
              <Link
                href={item.href}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Linkstyled>
                  <SideBarIcon>{item.icon}</SideBarIcon>
                  <TitleStyled> {item.name}</TitleStyled>
                </Linkstyled>
              </Link>
            </Li_style>
          ))}
        </Ulstyled>

        
      </Box>

  );
};
export default sideBar;
