import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import React from 'react';
import { CurrentPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
interface Props {
  currentPage: CurrentPage;
  setCurrentPage: (value: CurrentPage) => void;
  topOfPage: boolean;
}
const Navbar: React.FC<Props> = ({ currentPage, topOfPage, setCurrentPage }) => {
  const flexBetween = 'flex items-center justify-between';
  const aboveMdScreen = useMediaQuery('(min-width:1060px)');
  const navbarBackground = topOfPage ? '' : 'bg-primary-100 drop-shadow';
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  return (
    <nav>
      <div className={`${flexBetween} ${navbarBackground} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt='Logo' />
            {aboveMdScreen ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link page={'Home'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                  <Link
                    page={'Benefits'}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />

                  <Link
                    page={'Our Classes'}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />

                  <Link
                    page={'Contact Us'}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <a href='#'>Sign in</a>
                  <ActionButton setCurrentPage={setCurrentPage}>Became a Member</ActionButton>
                </div>
              </div>
            ) : (
              <button
                className='rounded-full bg-secondary-500 p-2'
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                <Bars3Icon className='w-6 h-6 text-white' />
              </button>
            )}
          </div>
        </div>
      </div>
      {!aboveMdScreen && menuOpen && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 shadow-md'>
          <div className='flex justify-end p-12'>
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <XMarkIcon className='w-6 h-6 text-gray-400' />
            </button>
          </div>
          <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
            <Link page={'Home'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Link page={'Benefits'} currentPage={currentPage} setCurrentPage={setCurrentPage} />

            <Link page={'Our Classes'} currentPage={currentPage} setCurrentPage={setCurrentPage} />

            <Link page={'Contact Us'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
