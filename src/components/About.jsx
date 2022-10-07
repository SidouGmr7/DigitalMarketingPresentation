import Button from './Button'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='py-10 overflow-hidden scrollbar-hide  bg-slate-900' id='about'>
      <div className='flex md:flex-row flex-col items-center mt-20 mb-20 gap-10 md:gap-0'>
        <motion.div
          animate={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='w-[50%] flex flex-col items-center ml-4 transition duration-500'>
          <div>
            <div className='text-[#68fff1] capitalize text-6xl font-bold space-y-4'>
              <p>vous</p>
              <p>connecter</p>
              <p className="text-4xl md:text-6xl">à votre public</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='md:w-[50%] flex flex-col items-center ml-4 transition duration-1000'>
          <p className='text-slate-300 text-justify pb-6 md:text-xl w-[70%]'>
            DZ DIGITAL MARKETING est un fournisseur global de services de
            marketing numérique. Que vous soyez a la recherche d’une stratégie
            clé en main, création et développement de votre site un service
            spécifique à une compagne à court terme, notre expérience et notre
            approche se révélèrent être a coup sûr un atout précieux
          </p>
          <Button
            Name='SAVOIR PLUS'
            Selector='#service'
            BGC='bg-[#FFCC00] text-slate-900'
          />
        </motion.div>
      </div>
    </div>
  )
}

export default About
