import { MdOutlineDateRange } from "react-icons/md";



const CustomerTicket = ({ ticket, handleAddToTicket }) => {
 
    const { id, title, description, customer, priority, status, createdAt } = ticket;
    // console.log(status)
    return (
        
            <div onClick={()=>handleAddToTicket(ticket)}>
                <div className="p-3 shadow rounded h-full space-y-3 w-full">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold"> {title}</h3>
                        <div className={`badge badge-soft badge-success ${status==="Open"?"text-green-500":"text-yellow-500"}`}>
                           
                             <div aria-label="status" className={`status status-lg ${status==="Open"?"status-success":"status-warning"}`}></div>
                             <span> {status}</span> 
                             </div>
                    </div>
                    <p className="text-gray-600 ">{description}</p>
                    
                    <div className=" flex justify-between md:gap-5 gap-10">
                        <div className="md:flex  items-center md:gap-x-3 grow">
                            <p className="text-gray-600 ">#{id}</p>
                            <p className={` pr-0 uppercase ${status==="Open"?"text-green-500":"text-yellow-500"}`}>{priority} priority</p>
                        </div>

                        <div className="md:flex  items-center md:gap-x-3 grow">
                            <p className="text-gray-600 ">{customer}</p>
                            <div className="text-gray-600 flex items-center  "><MdOutlineDateRange /><span>{createdAt}</span> </div>
                        </div>
                    </div>

                </div>
            </div>
        
    );
};

export default CustomerTicket;