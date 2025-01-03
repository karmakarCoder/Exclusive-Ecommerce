import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/home";
import Root from "./root/Root";
import SignUp from "./auth/signup/Signup";
import Sign from "./auth/sign/Sign";
import Contact from "./pages/contact/Contact";
import Private from "./private/Private";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/sign" element={<Sign />} />
      <Route element={<Private />}>
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
