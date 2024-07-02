import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const newName = form.get('name');
        const photo = form.get('photo');
        console.log(newName, photo);
        updateProfile(auth.currentUser, {
            displayName: newName,
            photoURL: photo
        })
            .then(() => {
                console.log('Profile updated successfully')
                setInterval(window.location = window.location.href, 2000);
            })
            .catch(error => console.error(error))
        toast.success('Profile updated      ||    please reload')
        console.log(user);
    }
    return (
        <>
        <Helmet>
            <title>Best Estates || Update profile</title>
        </Helmet>
            <div>
                <h3 className="p-6 text-center text-2xl font-bold bg-[#3D52A0] text-white ml-2 mr-3 rounded-2xl my-3">Update your profile</h3>
                <div className="border rounded-2xl w-3/4 lg:w-[35%] my-5 mx-auto">
                    <h5 className="text-center font-bold text-xl underline text-bold mt-5">Make some changes</h5>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control my-2">
                            <label className="label">
                                <span className="label-text font-semibold">Update name</span>
                            </label>
                            <input type="text" value={user.displayName} placeholder="name" className="input input-bordered" name="name" required />
                        </div>
                        <div className="form-control my-2">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input type="text" value={user.photoURL} placeholder="photo URL" className="input input-bordered" name="photo" required />
                        </div>
                        <div className="form-control mt-6 my-2">
                            <button className="btn text-white bg-[#3D52A0]">Update profile</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default UpdateProfile;