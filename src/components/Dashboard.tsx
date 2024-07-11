import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
        <>
            <Sidebar />
            <div className="min-h-screen bg-gray-100 p-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-2xl font-bold mb-4">IT Service Desk Dashboard</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Example cards for displaying various metrics */}
                        <div className="bg-white p-4 shadow rounded-lg">
                            <h2 className="text-xl font-semibold">Total Tickets</h2>
                            <p className="text-4xl font-bold mt-2">150</p>
                        </div>

                        <div className="bg-white p-4 shadow rounded-lg">
                            <h2 className="text-xl font-semibold">Open Tickets</h2>
                            <p className="text-4xl font-bold mt-2">35</p>
                        </div>

                        <div className="bg-white p-4 shadow rounded-lg">
                            <h2 className="text-xl font-semibold">Closed Tickets</h2>
                            <p className="text-4xl font-bold mt-2">115</p>
                        </div>
                    </div>

                    {/* Additional sections like charts, recent tickets, etc. */}
                    <div className="mt-8">
                        <h2 className="text-xl font-bold mb-4">Recent Tickets</h2>
                        <div className="bg-white p-4 shadow rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">12345</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Cannot access email</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Open</td>
                                        <td className="px-6 py-4 whitespace-nowrap">High</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">12346</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Password reset</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Closed</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Low</td>
                                    </tr>
                                    {/* More rows as needed */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard