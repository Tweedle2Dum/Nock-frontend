import { ThemeProvider, createTheme } from "@mui/material";
import  { ReactNode } from "react";

type Props = { children: ReactNode };

const CustomThemeProvider = (props: Props) => {
  const theme = createTheme({
    palette:{
      primary:{
        main:'#3d73dd'
      }

    },
    components:{
     MuiButton:{
      styleOverrides:{
        root:{
          width:"281px",
          height:'60px',
          textTransform:'none',
          fontSize:'1rem'
        }
      }
     }
    },
    typography: {
      fontFamily: "ProductSans",
      
    },
  });
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomThemeProvider;
