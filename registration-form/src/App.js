import "./App.css";
import { RegisterForm } from "./components/Form/Form";
import { Intro } from "./components/Intro/Intro";

function App() {
  return (
    <div className="content">
      <Intro />
      <RegisterForm />
    </div>
  );
}

export default App;
