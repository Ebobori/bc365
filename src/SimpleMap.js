import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';


// const AnyReactComponent = ({text}: any) => <div>{text}</div>;

const SimpleMap = (props: any) => {
    const getMapOptions = (maps: any) => {
        return {
          disableDefaultUI: true,
          mapTypeControl: true,
          streetViewControl: true,
          styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
        };
      };

    const [center, setCenter] = useState({lat: 51.376719, lng: -0.097439});
    const [zoom, setZoom] = useState(18);
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCOF7zAZQ9VJSnippX2__kc5zFNYuIrsb4' }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={getMapOptions}

        >
         <Marker
            lat={51.376719}
            lng={-0.097439}
            name="My Marker"
            color="#572E85"
          />
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;

