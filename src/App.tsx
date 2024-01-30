import { Route, Routes } from "react-router-dom";
import RootLayout from "../Components/UI/Layouts/RootLayout";
import Landing from "../Components/UI/Pages/Landing";
import Login from "../Components/UI/Pages/Login";
import Register from "../Components/UI/Pages/Register";
import Reset from "../Components/UI/Pages/Reset";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/reset" element={<Reset />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
