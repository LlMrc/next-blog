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


const paperStyle = {

  boxShadow:
    "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
  '&:hover':{  boxShadow:
    "0 2px 2px 0 rgba(0, 0, 0, 0), 0 0 0 1px rgba(0, 0, 0, 0)",}
}

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
      <Stack width={200} spacing={2} p={2}>
      
        <Box bgcolor={'#F8E8EE'} height='75px'  textAlign={'center'}>
       
        <Link href={"/"} style={{ textDecoration: "none" }}>
          <Typography variant="h5" color={"black"} align="center" marginTop={2} >
            Home
          </Typography>
        </Link>
        </Box>
        
        <Divider />
        
        {linkItems.map((item) => (
          <Link  key={item.name} href={item.href}  style={{textDecoration: 'none', margin:2, color: 'black'}}>
          <Paper  sx={paperStyle}>
            <Box flexDirection={"row"} alignContent={'center'} gap={2} m={2}  >
              {item.icon}
               {item.name}
            </Box>
          </Paper>
          </Link>
        ))}
      </Stack>
    </Drawer>
  );
}
