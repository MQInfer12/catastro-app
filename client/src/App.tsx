import { MapContainer, WMSTileLayer } from "react-leaflet";
import "./app.css";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
/* import { useState } from 'react'


const LAYERS = {
  calles:'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
  hibrido:'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
  satelite:'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
  terreno:'http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
} as const;

type Layer = (typeof LAYERS)[keyof typeof LAYERS]; */

function App() {
  /* const [layer, setLayer]=useState<Layer>(LAYERS.calles); */
  const wmsOTB = `http://186.121.246.218:6080/arcgis/services/planificacion/otbsDb/MapServer/WMSServer`;
  const wmsDEM = `http://186.121.246.218:6080/arcgis/services/catastro/DEM_500/MapServer/WMSServer`;

  const wmsNameStreet = `http://186.121.246.218:6080/arcgis/services/planificacion/viasWms/MapServer/WMSServer`;
  const wmsNumberApple = `http://186.121.246.218:6080/arcgis/services/catastro/manzanasWms/MapServer/WMSServer`;
  //

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    /*     const firstUrl =
      "http://186.121.246.218:6080/arcgis/services/planificacion/viasWms?";
    const secondUrl = "/MapServer/WMSServer";
    const result = firstUrl + searchInput + secondUrl;
    setSearchLayer(result); */
  };

  useEffect(() => {
    const handleGetData = async () => {
      try {
        const response = await fetch(wmsNumberApple, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result);
        }
      } catch (err) {
        console.error(err);
      }
    };
    handleGetData();
  }, [wmsNumberApple]);

  return (
    <>
      <form className="inputContainer">
        <input
          type="text"
          placeholder="Buscar"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={(e) => handleSearch(e)}>Buscar</button>
      </form>

      <MapContainer
        id="Mapa"
        center={[-17.39481762066563, -66.1594660433327]}
        zoom={13}
        zoomControl={false}
      >
        <WMSTileLayer
          url={wmsDEM}
          layers="0"
          format="image/png"
          transparent={true}
        />
        <WMSTileLayer
          url={wmsOTB}
          layers="0"
          format="image/png"
          transparent={true}
        />

        <WMSTileLayer
          url={wmsNameStreet}
          layers="0"
          format="image/png"
          transparent={true}
        />
        {/* 
        {searchLayer && (
          <WMSTileLayer
            url={searchLayer}
            layers="0"
            format="image/png"
            transparent={true}
          />
        )} */}

        <WMSTileLayer
          url={wmsNumberApple}
          layers="0"
          format="image/png"
          transparent={true}
        />
      </MapContainer>
    </>
  );
}

export default App;

{
  /* <div className='button-view'>
        <button onClick={()=> setLayer(LAYERS.calles)}>
          Streets
        </button>
        <button onClick={()=> setLayer(LAYERS.satelite)}>
          Satelite
        </button>
        <button onClick={()=> setLayer(LAYERS.hibrido)}>
          Hibrido
        </button>
        <button onClick={()=> setLayer(LAYERS.terreno)}>
          Terreno
        </button>
      </div> */
}
