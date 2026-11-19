import { Box, Button, InputBase, Stack, Typography } from "@mui/material";
import { FiArrowLeft, FiAperture, FiSearch, FiRadio } from "react-icons/fi";

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: "620px" },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        alignItems: "center",
        gap: { xs: 6, md: 8 },
        px: { xs: 2.5, md: 7, lg: 10 },
        py: { xs: 8, md: 10 },
        overflow: "hidden",
      }}
    >
      {/* Background atmosphere */}
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          right: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(22,48,31,0.35) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Text content */}
      <Stack
        spacing={3}
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 540,
          order: { xs: 2, md: 1 },
        }}
      >
        <Stack direction="row" sx={{ spacing: 1.5, alignItems: "center" }}>
          <Box
            sx={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              bgcolor: "primary.main",
              boxShadow: "0 0 12px rgba(223,255,87,0.6)",
            }}
          />
          <Typography
            sx={{
              fontFamily: "JetBrains Mono",
              fontSize: 11,
              letterSpacing: 2,
              color: "primary.main",
              direction: "ltr",
            }}
          >
            LOST FA / DIGITAL ARCHIVE
          </Typography>
        </Stack>

        <Typography
          component="h1"
          sx={{
            fontSize: { xs: 36, sm: 46, md: 58 },
            fontWeight: 700,
            lineHeight: 1.55,
            letterSpacing: "-1.5px",
          }}
        >
          بعضی چیزها
          <Box component="span" sx={{ color: "primary.main" }}>
            {" "}
            گم می‌شوند،
          </Box>
          <br />
          اما نباید فراموش شوند.
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: { xs: 14, md: 15 },
            lineHeight: 2.2,
            maxWidth: 440,
          }}
        >
          آرشیوی برای ثبت، جستجو و دنبال کردن رد رسانه‌هایی که از دسترس خارج
          شده‌اند؛ آثاری که هنوز داستانشان تمام نشده است.
        </Typography>

        {/* Search */}
        <Box
          component="form"
          onSubmit={(event) => event.preventDefault()}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            p: 0.8,
            mt: 1,
            maxWidth: 460,
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 1.5,
            transition: "border-color 180ms ease",
            "&:focus-within": {
              borderColor: "primary.main",
            },
          }}
        >
          <FiSearch size={19} color="#9FBE3F" />

          <InputBase
            fullWidth
            placeholder="نام اثر، موضوع یا شناسه پرونده..."
            inputProps={{ "aria-label": "جستجو در آرشیو" }}
            sx={{
              px: 1,
              fontSize: 13,
              color: "text.primary",
              "& input::placeholder": {
                color: "text.secondary",
                opacity: 1,
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            endIcon={<FiArrowLeft />}
            sx={{
              minWidth: "auto",
              px: 2,
              py: 1,
              whiteSpace: "nowrap",
              fontSize: 12,
              borderRadius: 1,
              boxShadow: "none",
            }}
          >
            جستجو
          </Button>
        </Box>

        <Stack
          direction="row"
          sx={{
            pt: 1,
            color: "text.secondary",
            alignItems: "center",
            spacing: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: "JetBrains Mono",
              fontSize: 10,
              direction: "ltr",
            }}
          >
            PRESERVE WHAT REMAINS
          </Typography>
          <Box sx={{ width: 35, height: "1px", bgcolor: "divider" }} />
          <Typography sx={{ fontSize: 11 }}>ردی از فراموشی</Typography>
        </Stack>
      </Stack>

      {/* Archive artifact visual */}
      <Box
        sx={{
          position: "relative",
          order: { xs: 1, md: 2 },
          width: "100%",
          maxWidth: 500,
          justifySelf: "center",
          aspectRatio: "1 / 1",
          display: "grid",
          placeItems: "center",
        }}
      >
        {/* Outer frame */}
        <Box
          sx={{
            position: "absolute",
            inset: "5%",
            border: "1px solid rgba(242,244,234,0.10)",
            transform: "rotate(-8deg)",
          }}
        />

        {/* Main artifact */}
        <Box
          sx={{
            position: "relative",
            width: "78%",
            height: "82%",
            overflow: "hidden",
            bgcolor: "#101812",
            border: "1px solid rgba(242,244,234,0.15)",
            boxShadow: "0 30px 90px rgba(0,0,0,0.5)",
            backgroundImage: `
              radial-gradient(ellipse at 50% 45%, rgba(74,112,65,0.35), transparent 55%),
              linear-gradient(145deg, #1a281d, #080d09 75%)
            `,
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              opacity: 0.2,
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(255,255,255,0.08) 4px)",
              pointerEvents: "none",
            },
          }}
        >
          {/* Abstract signal */}
          <Box
            sx={{
              position: "absolute",
              width: "65%",
              aspectRatio: "1",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              border: "1px solid rgba(223,255,87,0.3)",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              boxShadow: "0 0 70px rgba(223,255,87,0.08)",
            }}
          >
            <Box
              sx={{
                width: "72%",
                aspectRatio: "1",
                border: "1px dashed rgba(223,255,87,0.35)",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
              }}
            >
              <FiAperture size="42%" color="#DFFF57" style={{ opacity: 0.8 }} />
            </Box>
          </Box>

          {/* Crosshair details */}
          <Box
            sx={{
              position: "absolute",
              top: "12%",
              left: "12%",
              width: 22,
              height: 22,
              borderTop: "1px solid #DFFF57",
              borderLeft: "1px solid #DFFF57",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "12%",
              right: "12%",
              width: 22,
              height: 22,
              borderBottom: "1px solid #DFFF57",
              borderRight: "1px solid #DFFF57",
            }}
          />

          {/* Artifact metadata */}
          <Stack
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              left: 16,
            }}
          >
            <Typography
              sx={{
                fontFamily: "JetBrains Mono",
                fontSize: 9,
                color: "rgba(242,244,234,0.5)",
                direction: "ltr",
              }}
            >
              UNKNOWN SIGNAL / 001
            </Typography>
          </Stack>

          <Stack
            direction={"row"}
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              position: "absolute",
              bottom: 16,
              right: 16,
              left: 16,
            }}
          >
            <Typography
              sx={{
                fontFamily: "JetBrains Mono",
                fontSize: 9,
                color: "rgba(242,244,234,0.55)",
                direction: "ltr",
              }}
            >
              SIGNAL LOST
            </Typography>
            <FiRadio color="#DFFF57" size={15} />
          </Stack>
        </Box>

        {/* Floating case label */}
        <Box
          sx={{
            position: "absolute",
            bottom: "8%",
            right: { xs: 0, md: "-4%" },
            px: 2,
            py: 1.5,
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0 12px 35px rgba(0,0,0,0.35)",
          }}
        >
          <Typography
            sx={{
              fontFamily: "JetBrains Mono",
              fontSize: 9,
              color: "primary.main",
              direction: "ltr",
            }}
          >
            ARCHIVE CASE
          </Typography>
          <Typography sx={{ fontSize: 13, fontWeight: 600, mt: 0.5 }}>
            پرونده شماره ۰۰۱
          </Typography>
        </Box>

        {/* Side index */}
        <Typography
          sx={{
            position: "absolute",
            top: "20%",
            left: 0,
            writingMode: "vertical-rl",
            fontFamily: "JetBrains Mono",
            fontSize: 9,
            letterSpacing: 2,
            color: "rgba(242,244,234,0.3)",
            direction: "ltr",
          }}
        >
          UNIDENTIFIED / UNRECOVERED
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
