import React from 'react';
import { MapContainer, TileLayer, Marker, Popup,useMap } from 'react-leaflet';
import './Map.scss';
import { useSelector} from 'react-redux';
// import './leaflet.css';



function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
  
    return null;
  }



function MapBottom() {
    let pos = useSelector((state) => state.data.data);

    const position = [51.505, -0.09];
    return (
        <div className="leaflet-container" id="mapid">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={pos==null?position:[pos.lat,pos.lng]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
                </Marker>
                <ChangeMapView coords={pos==null?position:[pos.lat,pos.lng]} />
            </MapContainer>
        </div>
    )
}


export default MapBottom
