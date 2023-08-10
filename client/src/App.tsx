import { MapContainer, TileLayer } from 'react-leaflet'
import './app.css'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'


const LAYERS={
  leaflet:'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  calles:'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
  hibrido:'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
  satelite:'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
  terreno:'http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
}

type Layers = keyof typeof LAYERS;

function App() {
  const [layer, setLayer]=useState<Layers>("calles");

  return (
    <>
      <MapContainer id='Mapa' center={[-17.39481762066563, -66.1594660433327]} zoom={13} zoomControl={false}>
        <TileLayer key={layer} url={LAYERS[layer]}
         subdomains={layer != 'leaflet' ? ['mt0', 'mt1', 'mt2', 'mt3'] : 'abc'}
        />

      </MapContainer>
      <div className='button-view'>
        <button onClick={()=> setLayer('leaflet')}>
          leaflet
        </button>
        <button onClick={()=> setLayer('calles')}>
          Calles
        </button>
        <button onClick={()=> setLayer('hibrido')}>
          Hibrido
        </button>
        <button onClick={()=> setLayer('satelite')}>
          Satelite
        </button>
        <button onClick={()=> setLayer('terreno')}>
          terreno
        </button>
      </div>
    </>
  )
}

export default App
