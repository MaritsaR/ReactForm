import { useState } from "react";
import Authenitcate from "./components/Authenitcate";
import SignupForm from "./components/SignupForm";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <SignupForm setToken={setToken} />
      <Authenitcate token={token} setToken={setToken} />
    </>
  );
}

export default App;
