import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaMapPin } from "react-icons/fa";

// Create a custom marker using divIcon for better styling
const createCustomIcon = () => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="position: relative;">
        <div style="
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 3px solid white;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            width: 12px;
            height: 12px;
            background: white;
            border-radius: 50%;
            transform: rotate(45deg);
          "></div>
        </div>
        <div style="
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 8px solid #1E293B;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        "></div>
      </div>
    `,
    iconSize: [40, 50],
    iconAnchor: [20, 50],
    popupAnchor: [0, -50],
    tooltipAnchor: [0, -50]
  });
};

const WorldMap = ({office}) => {
    const customIcon = createCustomIcon();

    return (
      <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          className="h-full w-full"
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            maxZoom={19}
          />
          {office.map((location, index) => (
            <Marker
              key={index}
              position={location.position}
              icon={customIcon}
            >
              {/* Tooltip shows on hover */}
              <Tooltip 
                direction="top" 
                offset={[0, -10]}
                opacity={1}
                className="custom-tooltip"
              >
                <div className="font-semibold text-sm">
                  <FaMapPin className="inline mr-1" />
                  {location.country}
                </div>
              </Tooltip>

              {/* Popup shows on click */}
              <Popup className="custom-popup" maxWidth={300}>
                <div className="p-2">
                  <h3 className="text-lg font-display font-bold text-primary mb-3 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-secondary" />
                    {location.country}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-start gap-2 text-gray-700">
                      <FaMapPin className="text-secondary mt-1 flex-shrink-0" />
                      <span>{location.address}</span>
                    </p>
                    {location.phone && (
                      <p className="flex items-center gap-2 text-gray-700">
                        <FaPhone className="text-secondary" />
                        <a href={`tel:${location.phone}`} className="hover:text-secondary transition-colors">
                          {location.phone}
                        </a>
                      </p>
                    )}
                    {location.email && (
                      <p className="flex items-center gap-2 text-gray-700">
                        <FaEnvelope className="text-secondary" />
                        <a href={`mailto:${location.email}`} className="hover:text-secondary transition-colors">
                          {location.email}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Custom CSS for tooltips and popups */}
        <style jsx global>{`
          .custom-tooltip {
            background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%) !important;
            border: 2px solid #3B82F6 !important;
            border-radius: 8px !important;
            padding: 8px 12px !important;
            color: white !important;
            font-weight: 600 !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
          }
          
          .custom-tooltip::before {
            border-top-color: #3B82F6 !important;
          }

          .leaflet-popup-content-wrapper {
            border-radius: 12px !important;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) !important;
            padding: 0 !important;
          }

          .leaflet-popup-content {
            margin: 0 !important;
            min-width: 200px !important;
          }

          .leaflet-popup-tip {
            box-shadow: 0 3px 14px rgba(0, 0, 0, 0.15) !important;
          }

          .custom-marker {
            cursor: pointer;
            transition: transform 0.2s ease;
          }

          .custom-marker:hover {
            transform: scale(1.1);
            z-index: 1000 !important;
          }
        `}</style>
      </div>
    );
  };
  
  export default WorldMap;