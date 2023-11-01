
import { useNavigate } from "react-router-dom"
import { account } from "../../lib/appwrite/config"

const Topbar = () => {

  const navigate = useNavigate()

  const handleLogout = async () => {
    await account.deleteSession('current')
    navigate('/sign-in')
  }
  
  return (
    <nav className="h-[90px] flex items-center justify-between p-4" >
      <div>
        LapinRagnar
      </div>
      <button onClick={handleLogout}>
        <img 
          src="/assets/icons/logout.svg"
          width={50}
          height={50}
        />
      </button>
    </nav>
  )
}

export default Topbar