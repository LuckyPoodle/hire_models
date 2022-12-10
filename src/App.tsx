import Search from "./pages/Search";
import { useContext,useState } from "react";
import SelectedModelContext from "./context/selectedModel";
import { TypeSupermodelsFields } from "./utils/APIResponsesTypes";

function App() {

  const selectedModel = useState(null as TypeSupermodelsFields | null);
  const [selected, _] = useContext(SelectedModelContext);

  return (
    <div className="container">
     
      <h1>Hire Your Supermodel!</h1>
      <h2>{selected?.name}</h2>
      <Search />
    </div>
  );
}

export default App;
