
import './App.css'
import React, { useState, useEffect } from 'react';
import LoaderPage from './components/LoaderPage'; // Import the loader
import InfiniteMarquee from './components/InfiniteMarquee'; // Import the marquee component
import Navbar from './components/Navbar'; // Import the navbar component

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <div className="App" >
      <Navbar />
      <LoaderPage onLoaded={handleLoadingComplete} />
      {loadingComplete && <InfiniteMarquee />}
    </div>
  );
}

export default App;