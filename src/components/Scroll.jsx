import ScrollIntoView from 'react-scroll-into-view'
import { FaChevronDown } from 'react-icons/fa'

const Scroll = ({ selector, bottom }) => {
  return (
    <ScrollIntoView selector={selector} className='absolute inset-x-0 bottom-0'>
      <div class={`mx-auto ${bottom}`}>
        <FaChevronDown class='animate-bounce mx-auto text-4xl ' />
      </div>
    </ScrollIntoView>
  )
}

export default Scroll
