import { Outlet } from "react-router-dom";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
function App() {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;