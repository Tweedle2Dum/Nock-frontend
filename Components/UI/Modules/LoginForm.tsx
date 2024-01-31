import { Box, Button, FormControl, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ChangeEvent, useState } from "react";

type Props = {};
type IFormData = {
  email: string;
  password: string;
};

const LoginForm = (props: Props) => {
  const [formData, setFormData] = useState<IFormData>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {};

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <FormControl
      defaultValue=""
      required
      sx={{ minWidth: "100%" }}
      onSubmit={handleSubmit}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
          fullWidth={true}
          onChange={handleChange}
        />
        <TextField
          fullWidth={true}
          id="outlined-basic"
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          name="password"
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box marginTop={"32px"} display={"flex"} justifyContent={"center"}>
        <Button type="submit" variant={"contained"}>
          Login
        </Button>
      </Box>
    </FormControl>
  );
};

export default LoginForm;
