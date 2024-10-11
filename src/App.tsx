import { RouterProvider } from "react-router-dom";
import RootRouter from "Routers/root.router";
import "./App.css";

function App() {
  return <RouterProvider router={RootRouter} />;
}

export default App;
