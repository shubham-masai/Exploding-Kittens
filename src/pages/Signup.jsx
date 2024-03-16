import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bgpicture1 } from "../assets";
import { handleSignup } from "../redux/User/action";
export const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError, ErrorMsg } = useSelector((store) => {
        return {
            isError: store.userReducer.isError,
            ErrorMsg: store.userReducer.ErrorMsg,
        };
    }, shallowEqual);

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = { username, email, password };
        dispatch(handleSignup(obj, navigate));
    }
    return (
        <section className="flex flex-col md:flex-col h-screen items-center justify-center ">
            <div>
                <img src={bgpicture1} alt="Exploding Kittens" className="w-[150px] h-[150px]" />
            </div>
            <div className="w-full bg-primary-800 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="flex-1 font-poppins font-semibold md:text-2xl text-white">
                        Create Your Account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label
                                className="block mb-2 text-sm font-medium text-dimWhite"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                value={username}
                                className="border border-gray-300 text-white sm:text-sm rounded-lg block w-full p-2.5 "
                                placeholder="Your Name"
                                required
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label
                                className="block mb-2 text-sm font-medium text-dimWhite"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                value={email}
                                className="border border-gray-300 text-white sm:text-sm rounded-lg block w-full p-2.5 "
                                placeholder="name@company.com"
                                required
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label
                                className="block mb-2 text-sm font-medium text-dimWhite"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                placeholder="••••••••"
                                className=" border border-gray-300 text-white sm:text-sm rounded-lg block w-full p-2.5 "
                                required
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>

                        {isError && <p className="text-white">Error : {ErrorMsg}</p>}
                        <button
                            type="submit"
                            className="w-full text-white text-center  hover:bg-blue-500 transition-colors duration-200 py-2 px-4 rounded-md"
                        >
                            Register
                        </button>

                        <p className="text-sm font-light text-gray-600 dark:text-gray-400">
                            Already have an account yet?{" "}
                            <a
                                href="/login"
                                className="font-medium text-primary-600"
                            >
                                Login
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};