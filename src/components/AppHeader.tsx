import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

export interface NavItem {
  label: string;
  path: string;
}

export interface UserMenuItem {
  label: string;
  action: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Pricing", path: "/pricing" },
  { label: "Blog", path: "/blog" },
];

interface NavMenuProps {
  items: NavItem[];
  onNavigate: (path: string) => void;
  variant: "menu" | "button";
}

export function NavMenu({ items, onNavigate, variant }: NavMenuProps) {
  return (
    <>
      {items.map(({ label, path }) =>
        variant === "menu" ? (
          <MenuItem key={path} onClick={() => onNavigate(path)}>
            <Typography textAlign="center">{label}</Typography>
          </MenuItem>
        ) : (
          <Button
            key={path}
            onClick={() => onNavigate(path)}
            sx={{ my: 2, color: "white" }}
          >
            {label}
          </Button>
        )
      )}
    </>
  );
}

export function AppHeader() {
  const navigate = useNavigate();

  const [navAnchor, setNavAnchor] = React.useState<HTMLElement | null>(null);
  const [userAnchor, setUserAnchor] = React.useState<HTMLElement | null>(null);

  const openNav = (e: React.MouseEvent<HTMLElement>) =>
    setNavAnchor(e.currentTarget);

  const closeNav = () => setNavAnchor(null);

  const openUser = (e: React.MouseEvent<HTMLElement>) =>
    setUserAnchor(e.currentTarget);

  const closeUser = () => setUserAnchor(null);

  const handleNavigate = (path: string) => {
    closeNav();
    navigate(path);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo (desktop) */}
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 2,
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            LOGO
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
            <IconButton color="inherit" onClick={openNav}>
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={navAnchor}
              open={Boolean(navAnchor)}
              onClose={closeNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <NavMenu
                items={NAV_ITEMS}
                onNavigate={handleNavigate}
                variant="menu"
              />
            </Menu>
          </Box>

          {/* Logo (mobile) */}
          <Typography
            variant="h6"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            LOGO
          </Typography>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
            <NavMenu
              items={NAV_ITEMS}
              onNavigate={handleNavigate}
              variant="button"
            />
          </Box>

          {/* User menu */}
          <Box>
            <Tooltip title="Account settings">
              <IconButton onClick={openUser}>
                <Avatar alt="User" />
              </IconButton>
            </Tooltip>

            <Menu
              anchorEl={userAnchor}
              open={Boolean(userAnchor)}
              onClose={closeUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              sx={{ marginTop:"32px" }}
            >
              <MenuItem onClick={closeUser}>Profile</MenuItem>
              <MenuItem onClick={closeUser}>Account</MenuItem>
              <MenuItem onClick={closeUser}>Dashboard</MenuItem>
              <MenuItem onClick={closeUser}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
