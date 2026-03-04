import { MdOutlineDateRange } from "react-icons/md";



const CustomerTicket = ({ ticket }) => {
    console.log(ticket);
    const { id, title, description, customer, priority, status, createdAt } = ticket;
    return (
        <div className=" ">
            <div className="p-3 shadow rounded h-40 space-y-3">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold"> {title}</h3>
                    <div className="badge badge-soft badge-success">{status}</div>
                </div>
                <p className="text-gray-600 ">{description}</p>
                <div className="flex justify-baseline items-center gap-5 ">
                    <div className="flex justify-between items-center gap-2">
                        <p className="text-gray-600 ">#{id}</p>
                        <p className="text-red-500 uppercase">{priority} priority</p>
                    </div>

                    <div className="flex justify-between items-center gap-2">
                        <p className="text-gray-600 ">{customer}</p>
                        <div className="text-gray-600 flex items-center  "><MdOutlineDateRange /><span>{createdAt}</span> </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CustomerTicket;