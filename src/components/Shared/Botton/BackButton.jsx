import { Button } from '@/components/ui/button'
import { useLocation, useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate()
  const location = useLocation()

  //   // Don't display the back button on the home page
  if (location.pathname === '/') {
    return null
  }

  return (
    <Button
      variant="secondary"
      onClick={() => navigate(-1)}
      className=" fixed bottom-5 left-5 z-[9999] bg-transparent border border-zinc-300"
    >
      Back
    </Button>
  )
}

export default BackButton
