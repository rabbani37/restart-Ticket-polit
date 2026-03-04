import { Suspense } from "react"
import Banner from "./Component/Header/Banner"
import NavBar from "./Component/Header/NavBar"
import CustomerTickets from "./Component/Main/CustomerTickets/CustomerTickets"
import SidebarRight from "./Component/Main/SidebarRight/SidebarRight"



const ticketsData = fetch("./ticketData.json").then(res => res.json())
function App() {





  return (
    <div className="container mx-auto">
      <NavBar></NavBar>
      <Banner></Banner>

      <div className="flex flex-col md:flex-row gap-5">
        <div className=" flex-1">
          <Suspense fallback={<div className="text-end mr-77">
            <span className="loading loading-spinner text-error"></span></div>}>

            <CustomerTickets ticketsData={ticketsData}></CustomerTickets>
          </Suspense>
        </div>
        <div className="">
          <SidebarRight></SidebarRight>
        </div>
      </div>

    </div>
  )
}

export default App
