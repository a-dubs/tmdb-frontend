import React, { useState } from 'react';
import Search from './components/Search/Search';
import './Main.css'
import { TMDBItem, Movie, Show } from './types/tmdb';
import './util.css'
import Toolbar from './components/Toolbar/Toolbar';

const Main = () => {
  const [selectedItems, setSelectedItems] = useState<(Movie | Show)[]>([]);
  const [currentPage, setCurrentPage] = useState<'search' | 'request' | 'downloads'>('search');

  const renderPageContent = () => {
    switch (currentPage) {
      case 'search':
        return <Search selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>;
      case 'request':
        return <div>Request Content</div>;
      case 'downloads':
        return <div>Downloads Content</div>;
    }
  };

  return (
    <div className='main'>
      
      <Toolbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPageContent()}
      
    </div>
  );
}

export default Main;
