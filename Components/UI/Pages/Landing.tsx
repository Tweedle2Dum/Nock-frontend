import { Button, Container, Typography } from "@mui/material";
import LandingImage from "../SVG/LandingImage";
import { NavLink } from "react-router-dom";

type Props = {};

const Landing = (props: Props) => {
  return (
    <Container maxWidth="sm">
      <LandingImage width={330} height={500} />

      <Typography variant="h4" component={"h1"} marginTop={"0px"}>
        Welcome to{" "}
        <Typography color={"primary"} variant="h4" component={"span"}>
          Nock
        </Typography>
      </Typography>
      <Typography
        variant="h5"
        component={"h5"}
        fontSize={"18px"}
        marginTop={"4px"}
      >
        Smart Attendance Tracking App
      </Typography>
      <Container sx={{ marginTop: "32px" }}>
        <Button variant="contained" color="primary">
          <NavLink to={"/login"}> Get Started</NavLink>
        </Button>
      </Container>
    </Container>
  );
};

export default Landing;
