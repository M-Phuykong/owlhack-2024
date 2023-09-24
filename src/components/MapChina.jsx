import "./map.css";
import "leaflet/dist/leaflet.css";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import Modal from 'react-modal';

// create custom icon
const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: require("../assets/images/pinpoint.png"),
  iconSize: [38, 38], // size of the icon
});


// markers
const markers = [
  {
    geocode: [39.953812, -75.155762],
    popUp: "Chu Shang",
    description: "Description The Cliffs at Chu Shang",
  },
  {
    geocode: [39.955391, -75.15448],
    popUp: "Terakawa",
    description: "Description The Cliffs at Terakawa",
  },
  {
    geocode: [39.953979, -75.157043],
    popUp: "Happy Lamb Hot Pot",
    description: "Description The Cliffs at Happy Lamb Hot Pot",
  },
  {
    geocode: [39.952010, -75.157240],
    popUp: "Round1",
    description: "Description The Cliffs at Round1",
  }

];

Modal.setAppElement('#root'); // Set the root element for modal accessibility

export default function MapChina() {
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
      <MapContainer center={[39.953520, -75.156270]} zoom={16}>
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
