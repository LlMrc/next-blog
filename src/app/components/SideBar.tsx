import styled from "@emotion/styled";
import {
  AccountCircleOutlined,
  Dashboard,
  Feed,
  Group,
  PersonAdd,
  StorefrontOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider } from "@mui/material";



import Link from "next/link";

import { FC } from "react";

interface SideItem {

}



const Ul_styled = styled("ul")({
    listStyle: "none",

});

const Linkstyled = styled('div')({
    display: 'flex',
    fontSize: '1rem',
    textDecoration: 'none',
    color: '#000',
    padding: '.8rem 1rem',
    backgroundColor: '#f3f4f6',
    marginBottom: '1rem',
    borderRadius: '0.8rem',
    "&:hover":{backgroundColor: '#ECC9EE', color: '#000'}
})

const Li_style = styled("li")({
    listStyle: "none",
    textDecoration: 'none'
});

const SideBarIcon = styled("span")({
  fontSize: "1.2rem",
  display: "inline-block",
});
const TitleStyled = styled("span")({
    marginLeft: '0.5rem',
    color: 'gray',
    fontWeight: "700",
    fontSize: 'large',
    letterSpacing: '2',
    transition: " 0.5s  ease-in-out",
    "&:hover":{fontSize: 'large'}

    
});

const linkItems = [
  {
    name: "Homepage",
    href: "/",
    icon: <Dashboard />,
  },
  {
    name: "Friends",
    href: "/users",
    icon: <PersonAdd />,
  },
  {
    name: "Group",
    href: "/group",
    icon: <Group />,
  },
  {
    name: "Gallery",
    href: "/gallery",
    icon: <StorefrontOutlined />,
  },
 
  {
    name: "Sign up",
    href: "/profil",
    icon: <AccountCircleOutlined />,
  },
];

const sideBar: FC<SideItem> = () => {
  return (
    <Box  sx={{ display: { xs: "none", sm: "block", width: '250px', height: "100vh"}, margin: 'auto' } }>
    <Box  sx={{
      display: 'flex',
     flexDirection:"column", 
    alignItems: 'center',
      position: 'fixed',  marginTop: '50px '}} >
 
        <Box height={4}/>
        <Typography variant="h4" p={"10px 0"}>
        Louis Marc
      </Typography>
 
   
  <Divider/>

      
    

        <Ul_styled>

        {linkItems.map((item)=>(
            <Li_style key={item.name}>
                <Linkstyled>
                <Link href={item.href} shallow={true} style={{ textDecoration: "none", color: 'black'}}> 
                <SideBarIcon>{item.icon}</SideBarIcon>
                <TitleStyled> {item.name}</TitleStyled>
                </Link>
                </Linkstyled>
            </Li_style>
        ))}

        </Ul_styled>
   
        </Box>
    </Box>
  );
};
export default sideBar