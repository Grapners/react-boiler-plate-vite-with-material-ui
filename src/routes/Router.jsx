import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Register } from "../pages/auth/Register";
import { Login } from "../pages/auth/Login";
import { NotFound } from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import withAuthRedirect from "./withAuthRedirect";
import { Settings } from "../pages/Settings";


export default function Router() {
  const AuthRequiredLogin = withAuthRedirect(Login);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        {/* ------------ all those pages which not required authorization ----------------------- */}
        <Route path="/login" element={<AuthRequiredLogin />} />
        <Route element={<PrivateRoute />}>
          {/* ------------ all those pages which required authorization ----------------------- */}
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

{/* <Route path="/host/*">
    <Route path="account-setup" element={<HostSetup />} />
    <Route path="profile" element={<HostProfile />} />
    <Route path="home" element={<HostHome />} />
    <Route path="update-profile" element={<HostUpdateProfile />} />
    <Route path="orders/:activetab?" element={<HostSessionJourney />} />
    <Route path="shipment/*">
      <Route path="options" element={<AddShipmentOptions />} />
      <Route path="track" element={<TrackShipment />} />
    </Route>
  </Route> */}