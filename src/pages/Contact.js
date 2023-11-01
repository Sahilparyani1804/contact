import { Box, Typography } from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const Contact = () => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm")); // Update the screen size breakpoint as needed
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          width: "300px",
          marginTop: "40px",
          height: "50px",
          textAlign: "center",
          alignItems: "center",
          padding: "20px",
          fontSize: "40px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        CONTACT US
      </Typography>
      <Box
        sx={{
          columnGap: "16px",
          flexWrap: "wrap",
          rowGap: "20px",
          width: "90%",
          display: "flex",
          flexDirection: isScreenSmall ? "column" : "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "300px",
            height: "250px",
            border: "1px solid grey",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              marginTop: "15px",
              marginBottom: "15px",
              width: "80%",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <LocationOnIcon
              sx={{
                marginLeft: "0px",
                fontSize: "40px",
                position: "relative",
                left: "0px",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                position: "relative",
                textAlign: "left",
                marginTop: "10px",
              }}
            >
              Address
            </Typography>
            <Typography>
              Smart Avenu, unit FO-02, 4th floor, 28/A, 80 Feet Rd, Michael
              Palaya, Indiranagar , Bengaluru, Karnataka 560038
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "300px",
            height: "250px",
            border: "1px solid grey",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              marginTop: "15px",
              marginBottom: "15px",
              width: "80%",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <CallIcon
              sx={{
                marginLeft: "0px",
                fontSize: "40px",
                position: "relative",
                left: "0px",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                position: "relative",
                textAlign: "left",
                marginTop: "10px",
              }}
            >
              Give Us a Call
            </Typography>
            <Typography>To be Updated Soon...</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "300px",
            height: "250px",
            border: "1px solid grey",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              marginTop: "15px",
              marginBottom: "15px",
              width: "80%",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <EmailOutlinedIcon
              sx={{
                marginLeft: "0px",
                fontSize: "40px",
                position: "relative",
                left: "0px",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                position: "relative",
                textAlign: "left",
                marginTop: "10px",
              }}
            >
              Email Us On
            </Typography>
            <Typography>
              {" "}
              <a href="mailto:services@noregret.in">
                services@noregret.in
              </a>{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
