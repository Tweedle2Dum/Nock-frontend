import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
type Props = {};

const RootLayout = (props: Props) => {
  return (
    <main className="min-h-full">
      <Container maxWidth="sm">
        <Outlet />
      </Container>
    </main>
  );
};

export default RootLayout;
