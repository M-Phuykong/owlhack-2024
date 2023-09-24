// Map.js

import "./map.css";
import "leaflet/dist/leaflet.css";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import Modal from 'react-modal';

const customIcon = new Icon({
  iconUrl: require("../assets/images/pinpoint.png"),
  iconSize: [38, 38],
});


const markers = [
  {
    geocode: [39.94887, -75.150026],
    popUp: "Independence Hall",
    description: "Description: Independence Hall, located in Philadelphia, Pennsylvania, is an iconic and historic landmark that holds immense significance in American history. This stately Georgian-style building was completed in 1753 and is most famous as the site where both the Declaration of Independence and the United States Constitution were debated and adopted during the late 18th century. It serves as a symbol of American democracy and freedom.",
  },
  {
    geocode: [39.962631, -75.177673],
    popUp: "Art Museum",
    description: "Description: The Art Museum of Philadelphia is a renowned cultural institution located in the heart of the city. Its extensive art collection spans diverse periods and styles, attracting art enthusiasts and tourists alike. The museum is famous for its distinctive steps, featured in the film Rocky, and the accompanying statue. With its central location and diverse exhibits, it is a symbol of Philadelphia's thriving arts scene.",
  },
  {
    geocode: [39.953194, -75.163345],
    popUp: "City Hall",
    description: "Description: City Hall in Philadelphia, Pennsylvania, is an architectural masterpiece and a symbol of civic pride. Completed in 1901, this massive and opulent building stands at the heart of the city's Center City district. Designed in the Second Empire style, it features an imposing stone facade, grand archways, and an iconic clock tower that soars to a height of 548 feet, making it one of the tallest masonry structures in the world.",
  },
  {
    geocode: [39.954620, -75.164864],
    popUp: "Love Park",
    description: "Description: Love Park, officially known as John F. Kennedy Plaza but affectionately referred to as Love Park, is a beloved urban oasis nestled in the heart of Philadelphia, Pennsylvania. This iconic park is known for its striking LOVE sculpture, created by artist Robert Indiana, which has become a symbol of the city and an enduring emblem of love and unity.",
  },
  {
    geocode: [39.958900, -75.156900],
    popUp: "The Cliffs at Callowhill",
    description: "Description: The Cliffs at Callowhill is an exhilarating and innovative indoor climbing facility located in the heart of Philadelphia, Pennsylvania. Nestled within the vibrant neighborhood of Callowhill, this cutting-edge climbing gym offers climbers of all skill levels a thrilling and challenging experience.",
  },
];

Modal.setAppElement('#root'); // Set the root element for modal accessibility

export default function Map() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
    openModal();
  };

  return (
    <div className="placesStyle">
      <MapContainer center={[39.953194, -75.163345]} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.geocode}
              icon={customIcon}
              eventHandlers={{
                click: () => handleMarkerClick(marker), // Open the modal on marker click
              }}
            >

            </Marker>
          ))}

      </MapContainer>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Marker Details Modal"
        className="box" // Use the "box" class for styling
        overlayClassName="modal-overlay" // Add an overlay class
      >
        {selectedMarker && (
          <div>
            <h2>{selectedMarker.popUp}</h2>
            <p>{selectedMarker.description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
}
