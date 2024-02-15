import { Outlet } from "react-router-dom";

import MainNavigation from "../components/navigation/MainNavigation";
import Footer from "../components/footer/Footer";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
