import { motion } from 'framer-motion'
import NavbarItem from '../components/NavbarItem'

const Navbar = () => {
  return (
    <header className='fixed z-50 w-screen backdrop-blur-md bg-gray-800 p-1 bg-opacity-20'>
      <div className='md:flex  items-center justify-between'>
        <div className='flex items-center justify-center'>
          <div className='flex items-center gap-2'>
            <p className='md:text-xl'>
              <img
                src='https://digitalmarketingdz.com/wp-content/uploads/2022/09/new-logo-blanc-02.png'
                alt='Logo'
                className='w-40 ml-10'
              />
            </p>
          </div>
        </div>
        <div className='md:flex hidden items-center gap-8 mr-14'>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='flex items-center gap-10'>
            <NavbarItem Name='Accueil' Selector='#home' />
            <NavbarItem Name='Services' Selector='#profile' />
            <NavbarItem Name='Contact' Selector='#tech' />
            <NavbarItem Name='Langue' Selector='#service' />
          </motion.ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
