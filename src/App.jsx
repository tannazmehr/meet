import React from 'react';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';

function App() {
  return (
    <div className="App">
      <CitySearch />
      <EventList />
    </div>
  );
}

export default App;