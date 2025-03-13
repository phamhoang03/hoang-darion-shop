import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  const center = { lat: 21.5942, lng: 105.8482 }; // Toạ độ Thái Nguyên

  return (
    <LoadScript googleMapsApiKey="AIzaSyDGewO_mqbIkXjHF0omqrXTrg_oL8YreOU">
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "400px",
          borderRadius: "10px",
        }}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
