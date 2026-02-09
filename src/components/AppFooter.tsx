import { Box, Typography, Container } from "@mui/material";

export function AppFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        mt: "auto",
        color: "#fff",
        backgroundColor: "#1a1a1a",
        border: "1px #D4AF37 solid",
        margin: "5px"
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="#fff" align="center">
          © {new Date().getFullYear()} by Minh Vu. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
