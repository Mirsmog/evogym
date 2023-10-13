import AnchorLink from 'react-anchor-link-smooth-scroll';
import { CurrentPage } from './types';

interface Props {
  setCurrentPage: (value: CurrentPage) => void;
  children: React.ReactNode;
}
const ActionButton: React.FC<Props> = ({ setCurrentPage, children }) => {
  return (
    <AnchorLink
      className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white duration-300 transition-colors'
      onClick={() => {
        setCurrentPage(CurrentPage.ContactUs);
      }}
      href={`#${CurrentPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};
export default ActionButton;
