import { BrowserRouter } from "react-router-dom";
import Pages from "./Pages/Pages";
import Nav from "./Components/Nav";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Nav />
         <Pages />  
      </BrowserRouter>
     
    </div>
  );
}

export default App;
