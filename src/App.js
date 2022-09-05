import { AppRouter } from "./components/navigation/AppRouter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <AppRouter />
    </div>
  );
}

export default App;
