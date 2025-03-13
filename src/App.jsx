import { RouterProvider } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "./routers/routers";
import { Toaster } from "react-hot-toast";
import AutoOpenModal from "./components/Booking/AutoOpenModal";

function App() {
  return (
    <>
      <Toaster />
      <AutoOpenModal />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
