import { useState } from "react";
import {
  Box,
  Container,
  IconButton,
  Typography,
  Collapse,
} from "@mui/material";
import { FiMenu, FiX, FiRadio, FiArrowUpLeft } from "react-icons/fi";

const navItems = [
  { label: "آرشیو", href: "#archive", active: true },
  { label: "تازه‌ها", href: "#latest" },
  { label: "جستجو", href: "#search" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        bgcolor: "rgba(11, 16, 13, 0.88)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid",
        borderColor: "rgba(242, 244, 234, 0.09)",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            minHeight: { xs: 70, md: 82 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            direction: "ltr",
          }}
        >
          {/* Brand */}
          <Box
            component="a"
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              color: "text.primary",
              textDecoration: "none",
              minWidth: 160,
            }}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                border: "1px solid rgba(223, 255, 87, 0.45)",
                display: "grid",
                placeItems: "center",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 5,
                  border: "1px solid rgba(223, 255, 87, 0.2)",
                },
              }}
            >
              <FiRadio size={17} color="#DFFF57" />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontWeight: 700,
                  fontSize: 17,
                  letterSpacing: "1.5px",
                  lineHeight: 1.2,
                }}
              >
                LOST<span style={{ color: "#DFFF57" }}>FA</span>
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 8,
                  letterSpacing: 1.5,
                  color: "text.secondary",
                  mt: 0.5,
                }}
              >
                DIGITAL MEMORY ARCHIVE
              </Typography>
            </Box>
          </Box>

          {/* Desktop navigation */}
          <Box
            component="nav"
            aria-label="ناوبری اصلی"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 5,
              direction: "rtl",
            }}
          >
            {navItems.map((item) => (
              <Box
                key={item.label}
                component="a"
                href={item.href}
                sx={{
                  position: "relative",
                  textDecoration: "none",
                  color: item.active ? "primary.main" : "text.secondary",
                  fontSize: 14,
                  transition: "color 180ms ease",
                  "&:hover": {
                    color: "text.primary",
                  },
                  ...(item.active && {
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      bottom: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      boxShadow: "0 0 10px #DFFF57",
                    },
                  }),
                }}
              >
                {item.label}
              </Box>
            ))}
          </Box>

          {/* Archive metadata + mobile menu */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 3,
              minWidth: 160,
            }}
          >
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  boxShadow: "0 0 8px #DFFF57",
                }}
              />

              <Typography
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 10,
                  color: "text.secondary",
                  letterSpacing: 1,
                }}
              >
                ARCHIVE ONLINE
              </Typography>
            </Box>

            <Typography
              sx={{
                display: { xs: "none", md: "block" },
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 11,
                color: "rgba(242,244,234,0.35)",
                borderLeft: "1px solid rgba(242,244,234,0.12)",
                pl: 2,
              }}
            >
              LF / 001
            </Typography>

            <IconButton
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "text.primary",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 1,
              }}
            >
              {menuOpen ? <FiX size={19} /> : <FiMenu size={19} />}
            </IconButton>
          </Box>
        </Box>

        {/* Mobile navigation */}
        <Collapse in={menuOpen}>
          <Box
            component="nav"
            aria-label="ناوبری موبایل"
            sx={{
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              direction: "rtl",
              borderTop: "1px solid rgba(242,244,234,0.08)",
              py: 1.5,
            }}
          >
            {navItems.map((item, index) => (
              <Box
                key={item.label}
                component="a"
                href={item.href}
                onClick={() => setMenuOpen(false)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: 1.8,
                  px: 1,
                  textDecoration: "none",
                  color: item.active ? "primary.main" : "text.secondary",
                  fontSize: 14,
                  borderBottom:
                    index !== navItems.length - 1
                      ? "1px solid rgba(242,244,234,0.06)"
                      : "none",
                }}
              >
                {item.label}
                <FiArrowUpLeft size={14} />
              </Box>
            ))}
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
};

export default Header;
