

import { Outlet } from "react-router-dom"
import Topbar from "../components/navigation/Topbar"
const RootLayout = () => {




  return (
    <div>
        
      <Topbar />

      <section className=" w-screen h-[80vh] bg-slate-300 ">
        <Outlet />
      </section>

      <div>bottom bar</div>

    </div>
  )
}

export default RootLayout