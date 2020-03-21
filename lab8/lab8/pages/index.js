import NameSearch from "../components/NameSearch"; 
import IdSearch from "../components/IdSearch"; 

const Main = () => {
  return (
    <div>
      <h2>Search Pokedex</h2>
      <NameSearch/>
      <IdSearch/>
      <h2>Results:</h2>
      <div id="reportingArea"></div>
    </div>
  );
}

export default Main; 