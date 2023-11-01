import { Outlet } from "react-router-dom"
const RootLayout = () => {
  return (
    <div>
        
      <div>topbar</div>

      <section >
        <Outlet />
      </section>

      <div>bottom bar</div>

    </div>
  )
}

export default RootLayout