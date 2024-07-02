import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";

const Register = () => {
    const [show, setShow] = useState(false);
    const { createUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            toast.error('Email is not valid');
        }
        else if (password.length < 6) {
            toast.error('Password must be 6 letters')
        }
        else if (/^[A-Z]{8,}$/.test(password)) {
            toast.error('Password should contain a uppercase')
        }
        else if (/^[a-z]+$/.test(password)) {
            toast.error('Password should contain a lowarcase')
        }
        // Sign Up
        else {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    toast('Register successful || please reload')
                    console.log(user);
                    updateProfile(result.user, {
                        displayName: name,
                        photoURL: photo
                    })
                        .then(() => {
                            console.log('Profile updated');
                            setInterval(window.location = window.location.href, 2000);
                        })
                        .catch(error => console.error(error))
                })
                .catch(error => console.error(error))
        }
    }
    return (
        <>
        <Helmet> 
            <title>Best Estates || Register</title>
        </Helmet>
            <div className="w-[37%] mx-auto border rounded-2xl px-5 my-3 pb-8">
                <form onSubmit={handleRegister} className="card-body -mb-5">
                    <h3 className="font-bold text-xl underline text-center">Register</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="name" placeholder="username" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Photo</span>
                        </label>
                        <input type="text" placeholder="photo URL" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={show ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
                        <span onClick={() => setShow(!show)} className="absolute top-[62%] text-lg right-3 z-50">
                            {
                                show ? <FaEye /> : <FaEyeSlash />
                            }
                        </span>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#3D52A0] text-white">Register</button>
                    </div>
                </form>
                <p className="font-semibold text-sm text-center">Already have an account? <Link to='/login' className="text-[#34495E] underline">Login</Link></p>
            </div>
                <ToastContainer></ToastContainer>
        </>
    );
};

export default Register;