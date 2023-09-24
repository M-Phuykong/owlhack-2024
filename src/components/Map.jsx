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
    geocode: [39.952305, -75.193703],
    popUp: "UPenn",
    description: "Description of UPenn",
  },
  {
    geocode: [39.97147, -75.19730923],
    popUp: "Philadelphia Zoo",
    description: "Description: The Philadelphia Zoo, nestled in the heart of Philadelphia, Pennsylvania, is a cherished institution steeped in history and brimming with wonder. Established in 1874, this venerable zoo spans 42 acres of meticulously landscaped grounds, providing a comfortable and captivating haven for over 1,300 animals representing species from around the globe. Its immersive exhibits and educational programs invite visitors to connect with the natural world, fostering a deep appreciation for wildlife conservation. With a strong commitment to animal welfare and conservation initiatives, the Philadelphia Zoo stands not only as a hub of biodiversity but also as a beacon of hope for the protection of our planet's precious creatures. With its lush gardens, family-friendly amenities, and engaging experiences, the Philadelphia Zoo continues to be a source of inspiration and enlightenment for all who pass through its gates.",
  },
  {
    geocode: [39.955340, -75.197520],
    popUp: "Latao Hotpot and BBQ",
    description: "Description of Latao Hotpot and BBQ",
  },
  {
    geocode: [39.9678446, -75.1846738],
    popUp: "Fairmount Water Works",
    description: "Description of Fairmount Water Works",
  }
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
      <MapContainer center={[39.9660, -75.1942]} zoom={14}>
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
