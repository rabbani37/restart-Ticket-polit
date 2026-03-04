import { Suspense, use, useState } from "react"
import Banner from "./Component/Header/Banner"
import NavBar from "./Component/Header/NavBar"
import CustomerTickets from "./Component/Main/CustomerTickets/CustomerTickets"
import SidebarRight from "./Component/Main/SidebarRight/SidebarRight"
import Footer from "./Component/Footer/Footer"
import { toast, ToastContainer } from "react-toastify"
import Swal from "sweetalert2"



const ticketsData = fetch("./ticketData.json").then(res => res.json())
function App() {
  const ticketDatas = use(ticketsData);

  const [remainingTicket, setRemainingTicket] = useState(ticketDatas)
  const [newTickets, setNewTickets] = useState([])
  const [resolvesTicket, setResolvesTicket] = useState([])



  const handleAddToTicket = (ticket) => {
    const isExgist = newTickets.find(t => t.id === ticket.id);

    if (!isExgist) {
      setNewTickets([...newTickets, ticket]);
      toast.success(`Added The "${ticket.title}" to task status`)
    }
    else {
      toast.error(`Already Added The "${ticket.title}" to task status`)
    }

  }

  const handleConform = (ticket) => {
    const remaining = newTickets.filter(T => T !== ticket)
    const isRemaining = remainingTicket.filter(T => T.id !== ticket.id)


    if (remaining) {
      setResolvesTicket([...resolvesTicket, ticket])
      Swal.fire({
        position: "top",
        title: "Successfully Resolved",
        icon: "success",
        timer: 2000,
        draggable: true,
        theme: 'dark'
      });
      setNewTickets(remaining);
    }
    setRemainingTicket(isRemaining)
  }




  return (<>


    <div className="container mx-auto px-3">
      <NavBar></NavBar>
      <Banner resolvesTicket={resolvesTicket} newTickets={newTickets}></Banner>

      <div className="flex flex-col md:flex-row gap-5">
        <div className=" flex-1">


          {/* main section customer ticker  */}
          <Suspense fallback={<div className="text-end mr-77">
            <span className="loading loading-spinner text-error"></span></div>}>
            <CustomerTickets
              ticketsData={remainingTicket}
              handleAddToTicket={handleAddToTicket}
            ></CustomerTickets>
          </Suspense>
        </div>

        {/* Sigebar Right side */}
        <div className="">
          <SidebarRight
            handleConform={handleConform}
            resolvesTicket={resolvesTicket}
            newTickets={newTickets}
          ></SidebarRight>
        </div>
      </div>


      
      <ToastContainer
        position="top-center"
        theme="dark"
        autoClose={1500}
      />
    </div>
    <Footer></Footer>
  </>
  )
}


export default App
