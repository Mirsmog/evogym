import '@/index.css';
import Navbar from '@/scenes/Navbar';
import React from 'react';
import { CurrentPage } from '@/shared/types';
import Home from '@/scenes/Home';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<CurrentPage>(CurrentPage.Home);
  const [topOfPage, setTopOfPage] = React.useState<boolean>(true);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true);
        setCurrentPage(CurrentPage.Home);
      } else {
        setTopOfPage(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className='app bg-gray-20'>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} topOfPage={topOfPage} />
      <Home setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
