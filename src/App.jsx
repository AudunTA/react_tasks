import { useState } from "react";
import "./App.css";
import Header from "./assets/components/Header";
import Message from "./assets/components/Message";
import Colorpicker from "./assets/components/Colorpicker";
function App() {
  const [message, setMessage] = useState(false);

  return (
    <div className="App">
      <Header page="Homepage" />
      <Message message={message} />
      <Colorpicker />
    </div>
  );
}

export default App;
