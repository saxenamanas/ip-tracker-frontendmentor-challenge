import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/Search';
import Details from './components/Details/Details';
import MapBottom from './components/Map/MapBottom';
import LoadingOverlay from 'react-loading-overlay';
import { useSelector} from 'react-redux';

function App() {
  let data = useSelector((state) => state.data.data);
  return (
    <div className="App">
      <LoadingOverlay
        active={data==null}
        spinner
        text='Fetching the location...'
      >
        <div className="header">
          <div className="container flex fw-500 fs-md">
            IP Address Tracker
        </div>
          <div className="container f-500">
            <SearchBar></SearchBar>
          </div>
          <div className="wrapper">
            <Details />
          </div>
        </div>
        <MapBottom></MapBottom>
      </LoadingOverlay>
    </div>
  );
}

export default App;
