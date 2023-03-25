import { GalleryData } from "./GalleryData";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(GalleryData);
  const collection = [...new Set(GalleryData.map((item) => item.title))];

  const fliterData = (itemData) => {
    const filteredData = GalleryData.filter((item) => item.title === itemData);
    setData(filteredData);
  };
  console.log(data);

  return (
    <div className="App">
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li>
              <button
                onClick={() => {
                  setData(GalleryData);
                }}
              >
                All
              </button>
            </li>
            {collection.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    fliterData(item);
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="galleryContainer">
          {data.map((item) => (
            <div key={item.id} className="galleryItem">
              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
