import { GiKnifeFork } from "react-icons/gi";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { BrowserRouter as Browser, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Browser>
        <div className="flex text-center justify-start items-center my-4 text-2xl">
          <GiKnifeFork  />
          <Link to={"/"} >delicouss</Link>
        </div>
          <Search />
          <Category />
          <Pages /> 
       </Browser>
    </div>
  );
}

export default App;
