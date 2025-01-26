import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import location from "../assets/pin.png";

const customIcon = new L.Icon({
    iconUrl: location,
    iconSize: [41, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

const WorldMap = ({office}) => {
    return (
      <div className="w-full h-[500px]">
        <MapContainer
          center={[20, 0]} // Initial map center
          zoom={2} // Initial zoom level
          className="h-full w-full"
        >
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />
          {office.map((office, index) => (
            <Marker
              key={index}
              position={office.position}
              icon={customIcon}
            >
              <Popup>
                <h2>{office.country}</h2>
                <p>{office.address}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    );
  };
  
  export default WorldMap;