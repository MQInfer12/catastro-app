import { MapContainer, TileLayer } from 'react-leaflet'
import './app.css'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'


const LAYERS = {
  calles:'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
  hibrido:'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
  satelite:'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
  terreno:'http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
} as const;

type Layer = (typeof LAYERS)[keyof typeof LAYERS];

function App() {
  const [layer, setLayer]=useState<Layer>(LAYERS.calles);

  return (
    <>
      <MapContainer id='Mapa' center={[-17.39481762066563, -66.1594660433327]} zoom={13} zoomControl={false}>
        <TileLayer 
          url={layer}
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        />
      </MapContainer>
      <div className='button-view'>
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
      </div>
    </>
  )
}

export default App
