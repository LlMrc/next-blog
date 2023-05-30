import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import { Category } from '@mui/icons-material';
import Link from 'next/link';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
       sx={{display: {sm:'block', md:'none'}}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Category/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
        <Link
          href="/group/pages/photography"
          style={{ textDecoration: "none" }}
        >
            Photography
            </Link>
            </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link
          href="/group/pages/finance"
          style={{ textDecoration: "none" }}
        >
            Finance
            </Link>
            </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link
          href="/group/pages/travel"
          style={{ textDecoration: "none" }}
        >
         Travel
            </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <Link
          href="/group/pages/art"
          style={{ textDecoration: "none" }}
        >
            Art
            </Link>
            </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link
          href="/group/pages/cinema"
          style={{ textDecoration: "none" }}
        >
            Cinema
            </Link>
            </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link
          href="/group/pages/Car"
          style={{ textDecoration: "none" }}
        >
            Car
            </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
        <Link
          href="/group/pages/sport"
          style={{ textDecoration: "none" }}
        >
            Sport
            </Link>
            </MenuItem>
      </Menu>
    </div>
  );
}
