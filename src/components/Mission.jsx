import { motion } from 'framer-motion'
import BG from '../images/bg2.jpg'

const Mission = () => {
  return (
    <div className='overflow-hidden scrollbar-hide  bg-slate-900'>
      <div className='md:flex md:flex-row md:items-center'>
        <motion.div
          animate={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='md:w-[50%] flex flex-col items-center transition duration-1000'>
          <p className='visible md:invisible text-[#68fff1] font-bold uppercase text-3xl relative before:absolute before:rounded-lg before:w-14 before:h-1 before:-bottom-1 before:bg-[#68fff1] mb-10'>
            notre mission
          </p>
          <img src={BG} alt='' className='rounded-full opacity-70 md:mb-32' />

          <div className='visible md:invisible z-20 -mt-48 ml-4 text-slate-300 bg-slate-700 bg-opacity-30 rounded-full py-6 capitalize w-[60%] font-semibold space-y-4'>
            <p className='pl-3'>
              le marketing de la plus haute qualité pour chaque client, sur
              chaque projet
            </p>
          </div>
        </motion.div>
        <motion.div
          animate={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='invisible md:visible md:w-[50%] flex flex-col items-center ml-4 transition duration-500'>
          <div className=' md:flex md:flex-col items-center text-center md:gap-6'>
            <div className=' text-[#FFCC00] capitalize text-2xl md:w-[60%] font-bold space-y-4'>
            <p className='md:text-[#68fff1] font-bold uppercase text-3xl relative before:absolute before:rounded-lg before:w-14 before:h-1 before:-bottom-1 before:bg-[#68fff1]'>
              notre mission
            </p>
            <div className=' text-white capitalize text-2xl md:w-[60%] font-bold space-y-4'>
              le marketing de la plus haute qualité pour chaque client, sur
              chaque projet
            </div>
          </div>
          </div>
        </motion.div>
      </div>
      </div>
    )
}

export default Mission
