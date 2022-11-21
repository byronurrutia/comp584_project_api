import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import NavbarHeader from "./components/NavbarHeader";

function App() {
  const [allPhotosData, setAllPhotosData] = useState([]);

  useEffect(() => {
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
      <Gallery photos={allPhotosData} />
    </div>
  );
}

export default App;
