import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
//LAYOUTS
import RootLayout from "../Components/UI/Layouts/RootLayout";
//PAGES
import Landing from "../Components/UI/Pages/Landing";
import Login from "../Components/UI/Pages/Login";
import Register from "../Components/UI/Pages/Register";
import Reset from "../Components/UI/Pages/Reset";
//PROVIDERS
import CustomThemeProvider from "../Components/Providers/ThemeProvider";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/reset" element={<Reset />}></Route>
        </Route>
      </>
    )
  );
  return (
    <>
      <CustomThemeProvider>
        <RouterProvider router={routes}></RouterProvider>
      </CustomThemeProvider>
    </>
  );
}

export default App;
