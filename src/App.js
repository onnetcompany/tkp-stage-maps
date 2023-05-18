import "./App.css";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import React, { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const mapOptions = {
  zoom: 18,
  center: {
    lat: 14.980832830963312,
    lng: 102.05912734349666,
  },
  mapTypeControlOptions: {
    mapTypeIds: ["styled_map"],
  },
  styles: [
    {
      featureType: "all",
      elementType: "labels", // labels.text or labels.icon
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ],
};

const markers = [
  {
    position: { lat: 14.980832830963312, lng: 102.05912734349666 },
    title: "Marker 1",
    description: "This is marker 1",
    imageUrl:
      "https://ticketpocket.net/pics/2023-04/coupon/upload-2023041264363bb5c3a94.jpg",
  },
  {
    position: { lat: 14.980432830963412, lng: 102.05912734349666 },
    title: "Marker 2",
    description: "This is marker 2",
    imageUrl:
      "https://ticketpocket.net/pics/2023-04/coupon/upload-2023041264363bb5c3a94.jpg",
  },
  // Add more markers as needed
];
function Maps() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    setActiveMarker(marker);
  };

  const handleInfoWindowClose = () => {
    setActiveMarker(null);
  };

  return (
    <div className="App">
      <h1>TicketPocket Area</h1>
      <GoogleMap mapContainerStyle={containerStyle} options={mapOptions}>
        {markers &&
          markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.position}
              title={marker.title}
              // label={marker.title}
              icon={{
                url: marker.imageUrl,
                scaledSize: new window.google.maps.Size(40, 40), // Adjust the size of the image as needed
              }}
              onClick={() => handleMarkerClick(marker)}
            />
          ))}
        {activeMarker && (
          <InfoWindow
            position={activeMarker.position}
            onCloseClick={handleInfoWindowClose}
          >
            <div>
              <a href="https://google.co.th/">{activeMarker.title}</a>
              <p>{activeMarker.description}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>

      <h2>Select zone</h2>
    </div>
  );
}

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBKFwlHjn0kQAF_dNWz1-MzpcddNMyEBrE",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Maps />;
}

export default App;
