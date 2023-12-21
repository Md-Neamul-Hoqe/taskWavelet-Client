import { Outlet } from "react-router-dom";
import Navbar from "./pages/shared/Navbar";
import Footer from "./pages/shared/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-150px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
