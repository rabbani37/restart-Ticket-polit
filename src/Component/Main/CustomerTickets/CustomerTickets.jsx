

import CustomerTicket from "./CustomerTicket";

const CustomerTickets = ({ ticketsData, handleAddToTicket }) => {

    // const tickets = use(ticketsData);
    // console.log(tickets)
    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 pb-5">Coutomer Tickets</h2>

            {
                ticketsData.length <= 0 ? <div className="text-4xl text-center px-10 py-16">No tickets available here </div> :
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                        {
                            ticketsData.map(ticket => <CustomerTicket
                                key={ticket.id}
                                ticket={ticket}
                                handleAddToTicket={handleAddToTicket}
                            ></CustomerTicket>)
                        }
                    </div>
            }

        </div>
    );
};

export default CustomerTickets;