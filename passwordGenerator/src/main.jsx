import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div className="flex w-full flex-col gap-4 max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-white text-orange-500">
      <h1 className="self-center font-extrabold text-6xl">PassGenPro</h1>
      <App />
    </div>
  </>
);
