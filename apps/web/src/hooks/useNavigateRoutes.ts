import { useNavigate } from "react-router-dom"

export const useNavigateRoutes = () => {
  const navigate = useNavigate()
 
  const navigateToHome = () => {
    navigate("/")
  }

  const navigateByPath = ({path}: {path: string}) => {
    navigate(path)
  }

  return {
    navigateToHome,
    navigateByPath
  }
}