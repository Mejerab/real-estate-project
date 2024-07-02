import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

const googleProvider = new GoogleAuthProvider();
const Login = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const { logIn, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            toast.error('Email is not valid');
        }
        else if (password.length < 6) {
            toast.error('Password must be 6 letters')
        }
        else if (/^[A-Z]+$/.test(password)) {
            toast.error('Password should contain a uppercase')
        }
        else if (/^[a-z]+$/.test(password)) {
            toast.error('Password should contain a lowarcase')
        }
        // Log In
        else {
            logIn(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    toast.success('Login successful')
                    navigate(location?.state ? location.state : '/');
                })
                .catch(error => {
                    console.error(error);
                    toast.error('Invalid email or password')
                })
        }
    }
    const handleGoogle = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Login successful');
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="w-[37%] mx-auto border rounded-2xl px-5 my-3">
            <Helmet> 
            <title>Best Estates || Login</title>
        </Helmet>
            <form onSubmit={handleLogin} className="card-body -mb-5">
                <h3 className="font-bold text-xl underline text-center">Login</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={show ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                    <span onClick={() => setShow(!show)} className="absolute top-[62%] right-3 text-lg">
                        {
                            show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                        }
                    </span>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#3D52A0] text-white">Login</button>
                </div>
            </form>
            <p className="font-semibold text-sm text-center">Don't have an account? <Link to='/register' className="text-[#34495E] underline">Register</Link></p>
            <div className="flex items-center justify-center my-2">
                <div className="w-[50px] h-[1px] bg-gray-400"></div>
                <div className="font-bold mx-2">Or</div>
                <div className="w-[50px] h-[1px] bg-gray-400"></div>
            </div>
            <div className=" flex flex-col mx-7 my-6">
                <button onClick={handleGoogle} className="relative btn border-3 rounded-full"><FcGoogle className="text-3xl absolute left-2" />Continue with Google</button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;