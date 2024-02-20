import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";

export const HeroImage = () => {
  return (
    <>
      <Box sx={{ mx: -1 }}>
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            overflow: "hidden",
            height: "1440px",
          }}
        >
          <Image
            src="/albumArtOne.svg"
            alt="Riya"
            title="Riya"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Container>
      </Box>
    </>
  );
};
