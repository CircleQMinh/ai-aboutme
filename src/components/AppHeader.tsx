import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { baseRepoName } from "../shared/types";

export interface NavItem {
  label: string;
  path: string;
}

export interface UserMenuItem {
  label: string;
  action: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: `${baseRepoName}/` },
  { label: "Ask about me", path: `${baseRepoName}/chat` },
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

  const openNav = (e: React.MouseEvent<HTMLElement>) =>
    setNavAnchor(e.currentTarget);

  const closeNav = () => setNavAnchor(null);



  const handleNavigate = (path: string) => {
    closeNav();
    navigate(path);
  };

  return (
    <AppBar position="static" sx={{
      backgroundColor: "#1a1a1a",
      border: "1px #D4AF37 solid",
      margin:"5px",
      width: "99%"
    }}>
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
            Minh Vu
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


        </Toolbar>
      </Container>
    </AppBar>
  );
}
