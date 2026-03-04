

const SidebarRight = ({ newTickets, handleConform, resolvesTicket }) => {

    // console.log(newTickets);



    return (
        <div className="" >
            <div className="mb-5">
                <h2 className="text-2xl font-semibold text-gray-700 pb-5">Task Status</h2>
                {
                    newTickets <= 0 ? <div>Select a ticket to add to Task Status</div> :

                        newTickets.map(ticket => <div key={ticket.id} className="p-2 mb-1 shadow">
                            <h3 className="text-xl mb-3">{ticket.title}</h3>
                            <button
                                onClick={() => handleConform(ticket)}
                                className="btn btn-sm w-full bg-green-500 text-[17px] text-white">Conform</button>
                        </div>)

                }


            </div>
            <hr className="text-gray-300" />
            <div className="mt-3">
                <h2 className="text-2xl font-semibold text-gray-700">Resoveld Task</h2>

                {resolvesTicket <= 0 ? <div>No resolved tasks yet.</div> :

                    resolvesTicket.map(ticket => <div key={ticket.id}
                        className="p-2 mb-1 shadow bg-blue-100">
                        <h3 className="text-xl mb-3">{ticket.title}</h3>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SidebarRight;