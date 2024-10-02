import "./App.css";
import Room from "./components/room";
import Sidebar from "./components/sidebar";
import { container, main } from "./styles/main";

function App() {
  return (
    <main className={main}>
      <div className={container}>
        <Sidebar />
        <Room />
      </div>
    </main>
  );
}

export default App;
