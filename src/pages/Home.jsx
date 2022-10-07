import Scroll from '../components/Scroll'
import { motion } from 'framer-motion'
import Button from '../components/Button'

const Home = () => {
  return (
    <div
      className=' md:h-screen screen-full md:p-28 md:pt-40 pt-40 md:bg-gradient-to-r md:from-indigo-800  bg-gradient-to-b from-indigo-800  overflow-hidden'
      id='home'>
      <div className='flex md:flex-row flex-col items-center'>
        <motion.div
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className='md:w-[50%] flex flex-col items-center ml-4 transition duration-1000'>
          <div className='md:space-x-10 md:space-y-4'>
            <h1 className=' md:text-6xl text-4xl font-bold text-white capitalize space-y-4 space-x-10'>
              <h1>
                <span className='text-[#68fff1]'>A</span>gence de
              </h1>
              <h1>
                <span className='text-[#68fff1]'>D</span>igital{' '}
              </h1>
              <h1>
                <span className='text-[#68fff1] ml-10'>M</span>arketing
              </h1>
            </h1>
            <div className='flex flex-col items-center  p-4 text-white space-y-2 space-x-5 mr-10'>
              <h1 className=' capitalize md:text-base mb-5 text-slate-300 text-justify text-sm'>
                nous élaborons des stratégies efficaces pour vous aider à
                atteindre vos clients et prospects sur l'ensemble du Web{' '}
              </h1>
              <Button
                Name='SAVOIR PLUS'
                Selector='#service'
                BGC='hover:bg-[#68fff1] text-white border-2 border border-[#68fff1]'
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className='md:w-[50%] transition duration-1000'>
          <img
            src='https://digitalmarketingdz.com/wp-content/uploads/2022/09/home-01-01-01-01-1024x1024.png'
            alt='Développement site web'
            loading='lazy'
            className='w-[70%] animate-[bounce_4s_ease-in-out_infinite] md:ml-20 ml-16 md:mt-10 mt-10 '
          />
        </motion.div>
      </div>
      <Scroll selector='#about' />
    </div>
  )
}

export default Home
