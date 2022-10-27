import NavBar from "./NavBar/NavBar";
import SneackersInfo from "./SneackersInfo/SneackersInfo";
import SneackersList from "./SneackersLIst/SneackersList";

function App() {
  return (
    <div className="px-8 md:px-8 lg:container font-poppins">
      <NavBar />
      <SneackersList />
      <SneackersInfo />
    </div>
  );
}

export default App;
