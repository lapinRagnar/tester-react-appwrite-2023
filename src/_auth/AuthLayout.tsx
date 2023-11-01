import { Outlet, Navigate } from "react-router-dom"
const AuthLayout = () => {

  const isAuthenticated = false

  return (
    <>
      { isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <div 
          className="flex flex-col w-screen 
          
          " 
        > 

          <div className="flex flex-row relative">
            <div className="flex-1 h-screen bg-[url('/assets/images/fond.jpg')] rounded-lg">1</div>
            <div className="flex-1 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg">2</div>
          </div>

          <section className="absolute top-0 left-0 right-0 z-10">
            <Outlet />
          </section>
        </div>
      )}
    
    
    </>
  )


}

export default AuthLayout