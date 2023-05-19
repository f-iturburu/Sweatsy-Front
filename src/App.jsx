import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/protectedRoute";
import Home from "./views/home/home";
import Login from "./views/login/login";
import SignUp from "./views/signup/signUp";
import LoginRedirect from "./routes/loginRedirect";
import VerticalNavbar from "./layouts/verticalNav/nav";

function App() {
  return (
    <>
      <BrowserRouter>
       
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={
                // <ProtectedRoute>
                <>
                <VerticalNavbar />
                  <Home />
                </>
                // </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/login"
              element={
                // <LoginRedirect>
                  <Login />
                /* </LoginRedirect> */
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
