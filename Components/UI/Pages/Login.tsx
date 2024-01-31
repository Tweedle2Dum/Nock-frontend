import { Box, Typography } from "@mui/material";
import BackButton from "../Elements/BackButton";
import LoginForm from "../Modules/LoginForm";
type Props = {};

const Login = (props: Props) => {
  return (
    <Box component={"main"}>
      <Box component={"main"} marginTop={"40px"}>
        <BackButton />
        <Box marginTop={"30px"}>
          <Typography fontSize={"32px"} fontWeight={'700'}>Log In</Typography>
        </Box>
      </Box>
      <Box marginTop={'32px'}><LoginForm/></Box>
    </Box>
  );
};

export default Login;
