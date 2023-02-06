import "./App.css";
import AuthForm from "./components/auth-form";
import Controller from "./components/controls";
import { socket, WebsocketProvider } from "./contexts/WebsocketContext";

function App() {
  return (
    <div>
      {/* <AuthForm />  */}
      <Controller />
    </div>
  );
}

export default App;
