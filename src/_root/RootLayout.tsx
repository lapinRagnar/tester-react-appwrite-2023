import { Outlet } from "react-router-dom"
const RootLayout = () => {
  return (
    <div>
        
      <div>topbar</div>

      <section className=" w-screen h-[80vh] bg-slate-300 ">
        <Outlet />
      </section>

      <div>bottom bar</div>

    </div>
  )
}

export default RootLayout