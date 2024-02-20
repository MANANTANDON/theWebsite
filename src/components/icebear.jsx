import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const IceBear = ({ fetchAnswer, change, error }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const anchor = document.getElementById("iceBear");
      const rekt = anchor.getBoundingClientRect();

      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;

      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

      const eyes = document.querySelectorAll(".eye");
      eyes.forEach((eye) => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
      });
    });
  }, []);

  function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  }

  const changeHandler = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const clickHandler = () => {
    fetchAnswer(value);
    setValue("");
  };
  return (
    <Container maxWidth="xl" sx={{ height: "100vh" }}>
      <Box
        sx={{
          height: "fit-content",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: "fit-content",
            position: "sticky",
            padding: "10px",
            top: "20px",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              height: "120px",
              width: "200px",
            }}
          >
            <Image
              id="iceBear"
              src="/whiteBearTwo.png"
              alt="White Bear"
              title="White Bear"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              border: "2px solid #4F200D",
              bgcolor: "#4F200D",
              color: "white",
              padding: "10px 20px 10px 20px",
              borderRadius: "20px",
            }}
          >
            Ice Bear
          </Box>
          <Box id="eyes">
            <Image
              className="eye"
              src="/eye.png"
              alt="Left Eye"
              title="Left Eye"
              style={{ top: "-130px", left: "61px" }}
              height={16}
              width={16}
            />
            <Image
              className="eye"
              src="/eye.png"
              alt="Right Eye"
              title="Right Eye"
              height={16}
              width={16}
              style={{ top: "-128px", left: "78px" }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {change ? (
          <Box
            sx={{
              height: "50vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ color: "#4F200D", fontSize: "20px" }}>
              {" "}
              Scroll Down
            </Typography>
            <KeyboardArrowDown sx={{ color: "#4F200D" }} />
          </Box>
        ) : (
          <>
            <Typography sx={{ color: "#4F200D" }}>
              Whats written on your pendant ?
            </Typography>
            <TextField size="small" onChange={changeHandler} value={value} />
            <Button
              variant="outlined"
              sx={{
                border: "0.5px solid #4F200D",
                bgcolor: "#4F200D",
                color: "white",
                "&:hover": {
                  color: "#4F200D",
                  bgcolor: "transparent",
                  border: "0.5px solid #4F200D",
                },
              }}
              onClick={clickHandler}
            >
              ready !
            </Button>{" "}
            {error && error}
          </>
        )}
      </Box>
    </Container>
  );
};
