import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import NavbarHeader from "./components/NavbarHeader";

function App() {
  const [allPhotosData, setAllPhotosData] = useState([]);

  useEffect(() => {
    //on render:
    // call this api with a limit of 3 phots and save it to the state allPhotosData
    fetch(
      `https://picsum.photos/v2/list?page=${Math.floor(
        Math.random() * 20
      )}&limit=30`
    )
      .then((res) => res.json())
      .then((data) => setAllPhotosData(data));
  }, []);

  return (
    <div className="app-main">
      <NavbarHeader />
      {/* in the galleries component map through all the photos and display them with
      with the framer motion animaiton
      link to the code for framer motion:  
      https://www.framer.com/docs/examples/#animating-gradients
      */}
      <Gallery photos={allPhotosData} />
    </div>
  );
}

export default App;
