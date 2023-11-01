
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

      <div className="flex items-center justify-center gap-10">
        <button className="flex flex-row items-center justify-center gap-2" onClick={() => navigate('/sign-up')}>
          <img 
            src="/assets/icons/signup.svg"
            width={30}
            height={30}
          />
          <div className="text-xs hover:text-sm hover:text-green-300">
            Register
          </div>
        </button>
        <button className="flex flex-row items-center justify-center gap-2" onClick={() => navigate('/sign-in')}>
          <img 
            src="/assets/icons/signin.svg"
            width={30}
            height={30}
          />
          <div className="text-xs hover:text-sm hover:text-green-300">
            Login
          </div>
        </button>
        <button onClick={handleLogout}>
          <img 
            src="/assets/icons/logout.svg"
            width={30}
            height={30}
          />
        </button>

      </div>

    </nav>
  )
}

export default Topbar