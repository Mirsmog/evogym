import ActionButton from '@/shared/ActionButton';
import { CurrentPage } from '@/shared/types';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import RedBull from '@/assets/SponsorRedBull.png';
import Forbes from '@/assets/SponsorForbes.png';
import Fortune from '@/assets/SponsorFortune.png';
import useMediaQuery from '@/hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

interface Props {
  setCurrentPage: (value: CurrentPage) => void;
}
const Home: React.FC<Props> = ({ setCurrentPage }) => {
  const aboveMdScreen = useMediaQuery('(min-width:1060px)');
  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
      <div className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6'>
        <div className='z-10 md:basis-3/5 mt-32'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
          >
            <div className='relative before:absolute before:-top-1/2 before:z-[1] before:-left-20 md:before:content-evolvetext'>
              <img className='relative z-10' src={HomePageText} alt='home page text' />
            </div>
            <p className='text-sm mt-8'>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the
              Body Shapes That you Dream of.. Get Your Dream Body Now.
            </p>
          </motion.div>

          <motion.div
            className='mt-8 flex gap-8 items-center'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }}
          >
            <ActionButton setCurrentPage={setCurrentPage}>Join Now</ActionButton>
            <AnchorLink
              className='underline text-primary-500 hover:text-secondary-400 font-bold text-sm cursor-pointer'
              onClick={() => setCurrentPage(CurrentPage.ContactUs)}
              href={CurrentPage.ContactUs}
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </div>
        <motion.div
          className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
        >
          <img src={HomePageGraphic} alt='home graphic' />
        </motion.div>
      </div>
      {aboveMdScreen && (
        <div className='w-full bg-primary-100 py-12 h-[145px]'>
          <motion.ul className='w-5/6 mx-auto flex items-center gap-40'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          >
            <li>
              <img src={RedBull} alt='sponsor redbull' />
            </li>
            <li>
              <img src={Forbes} alt='sponsor forbes' />
            </li>
            <li>
              <img src={Fortune} alt='sponsor fortune' />
            </li>
            <li>
              <img src={RedBull} alt='sponsor redbull' />
            </li>
            <li>
              <img src={Forbes} alt='sponsor forbes' />
            </li>
            <li>
              <img src={Fortune} alt='sponsor fortune' />
            </li>
            <li>
              <img src={RedBull} alt='sponsor redbull' />
            </li>
          </motion.ul>
        </div>
      )}
    </section>
  );
};
export default Home;
