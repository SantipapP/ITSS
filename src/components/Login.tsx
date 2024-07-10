import { useState } from "react"
const Login = () => {
    const [UserEmail, setUserEmail] = useState('')
    const [UserPassword, setUserPassword] = useState('')
    

    const SubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(UserEmail, UserPassword);
    }
    return (
        <>
            <div className="flex items-center justify-center min-h-screen w-full px-5 sm:px-0">
                <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full animate-fade-up">
                    <div
                        className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
                        style={{
                            backgroundImage: `url(/images/81070.jpg)`,
                        }}
                    ></div>
                    <div className="w-full p-8 lg:w-1/2">
                        <form onSubmit={SubmitLogin}>
                            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Email Address
                                </label>
                                <input
                                    className="text-white-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                    type="email"
                                    value={UserEmail} onChange={(e) => setUserEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mt-4 flex flex-col justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                </label>
                                <input
                                    className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                    type="password"
                                    value={UserPassword} onChange={(e) => setUserPassword(e.target.value)}
                                />
                            </div>
                            <div className="mt-8">
                                <button className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login