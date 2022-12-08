import Supermodel from './components/Supermodel';
import Search from './pages/Search';
import {NATIONALITIES,LOCATIONS} from './utils/constants';

function App() {
  return (
    <div className="container">
      <h1>Hire Your Supermodel!</h1>
      <Search />
      <Supermodel name="Aeg" height="160" nationality={NATIONALITIES[0]} location={LOCATIONS[0]} id="1" images={[]} />
      <Supermodel name="El" height="170" nationality={NATIONALITIES[1]} location={LOCATIONS[1]} id="1" images={[]} />
      

    </div>
  );
}

export default App;
