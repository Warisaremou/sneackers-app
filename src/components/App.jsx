import NavBar from "./NavBar/NavBar";
import Sneackers from "./Sneackers/Sneackers";
import Layout from "./Layout";
import { useState } from "react";
import { AllSneackersList } from "../data/AllSneackersList";

function App() {
  const [openMenu, setIsOpen] = useState(false);
  const [sneackerDetails, setSneackerDetails] = useState(AllSneackersList);

  return (
    <>
      <div className="px-6 md:px-8 lg:container font-poppins">
        <NavBar openMenu={openMenu} setIsOpen={setIsOpen} />
        <Sneackers
          sneackerDetails={sneackerDetails}
          setSneackerDetails={setSneackerDetails}
        />
      </div>
      <Layout openMenu={openMenu} setIsOpen={setIsOpen} />
    </>
  );
}

export default App;
