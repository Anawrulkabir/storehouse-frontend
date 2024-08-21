import PropTypes from 'prop-types'
import { PiSpinnerGapLight } from 'react-icons/pi'

const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <PiSpinnerGapLight
        size={30}
        // color="#08D4AC"
        className="animate-spin text-green-700"
      />
    </div>
  )
}

LoadingSpinner.propTypes = {
  smallHeight: PropTypes.bool,
}

export default LoadingSpinner
