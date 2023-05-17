import logo from './logo.svg';
import './App.css';
import { useJsApiLoader,GoogleMap} from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '500px'
};


const center = {
  lat: 14.980832830963312,  lng: 102.05912734349666
};


const getMapOptions = {
  mapTypeId: 'terrain',
  disableDefaultUI: false,
  tilt: 45,
  rotateControl:true,
  scrollwheel: true,



}

function Maps() {
  

  return (
    <div className="App"  style={{
      }}>
    <h1>TicketPocket Area</h1>

      <GoogleMap  
       onLoad={(map) => {
        // map.setMapTypeId("satellite");
        // map.setTilt(45);
      

       }}
       options={getMapOptions}

      mapContainerStyle={containerStyle}

      zoom={18} center={center} mapContainerClassName="map-container">
    </GoogleMap>
    <h2>Select zone</h2>

    </div>
  );
}


function App() {
  
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:"AIzaSyBKFwlHjn0kQAF_dNWz1-MzpcddNMyEBrE",
  });


  if (!isLoaded) return <div>Loading...</div>;
  return <Maps />;
}

export default App;
