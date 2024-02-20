import { PlayArrow } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

export const Vinyl = ({ image, vinyl }) => {
  const [play, setPLay] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          height: "320px",
          width: "320px",
          zIndex: "20",
          borderRadius: "5px",
        }}
      >
        <Image
          src={image}
          alt={vinyl}
          title={vinyl}
          layout="fill"
          objectFit="center"
          objectPosition="center"
        />
        <IconButton
          sx={{ position: "absolute" }}
          onClick={() => setPLay(!play)}
        >
          <PlayArrow sx={{ color: "white" }} />
        </IconButton>
      </Box>

      {/* Vinyl */}
      <Box
        sx={{
          border: "2px solid black",
          height: "300px",
          width: "300px",
          borderRadius: "50%",
          bgcolor: "black",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
        className={play ? "vinylOut" : "vinyl"}
      >
        <Box
          sx={{
            border: "1px solid white",
            height: "120px",
            width: "120px",
            bgcolor: "white",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            height: "120px",
            width: "120px",
          }}
        >
          <Image
            src={image}
            alt={vinyl}
            title={vinyl}
            layout="fill"
            objectFit="center"
            objectPosition="center"
          />
          <Box
            sx={{
              border: "2px solid white",
              height: "20px",
              width: "20px",
              bgcolor: "white",
              borderRadius: "50%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              zIndex: "10",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};
