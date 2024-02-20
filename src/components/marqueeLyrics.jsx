import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";

export const Lyrics = () => {
  return (
    <Box sx={{ mx: -4, bgcolor: "#4F200D" }}>
      <Container maxWidth="xl">
        <Marquee autoFill={true}>
          <Typography
            sx={{
              color: "#4F200D",
              fontSize: "100px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              textShadow:
                "-1px 1px 0 #FFF8EA, 1px 1px 0 #FFF8EA, 1px -1px 0 #FFF8EA, -1px -1px 0 #FFF8EA",
            }}
          >
            To Live For The Hope Of It All.
          </Typography>
        </Marquee>
        <Marquee autoFill={true} direction="right">
          <Typography
            sx={{
              color: "#4F200D",
              fontSize: "100px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              textShadow:
                "-1px 1px 0 #FFF8EA, 1px 1px 0 #FFF8EA, 1px -1px 0 #FFF8EA, -1px -1px 0 #FFF8EA",
            }}
          >
            To Live For The Hope Of It All.
          </Typography>
        </Marquee>
      </Container>
    </Box>
  );
};
