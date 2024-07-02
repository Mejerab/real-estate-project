import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { MdOutlineRealEstateAgent } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const lists = <>
        <li className='mr-4 font-semibold'><NavLink to='/'>Home</NavLink></li>
        <li className='mr-4 font-semibold z-40 dropdown '><NavLink to='/houses'>Houses</NavLink></li>
        <li className='mr-4 font-semibold'><NavLink to='/update-profile'>Update profile</NavLink></li>
        <li className='mr-4 font-semibold'><NavLink to='/contact'>Contact us</NavLink></li>
    </>;
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Logged out successfully');
            })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar bg-base-100 z-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-20">
                        {lists}
                    </ul>
                </div>
                <Link to='/' className="btn nothing font-bold text-xl"><MdOutlineRealEstateAgent className='text-2xl' /> B<span className="hidden -ml-2">est</span>E<span className="-ml-2 hidden">states</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {lists}
                </ul>
            </div>
            <div className="navbar-end z-20">
                {user ? <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user?.photoURL !== null ? <img src={user?.photoURL} alt="" /> : <CgProfile className='text-3xl ml-[5px] mt-[5px]' />
                            }
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <h5 className='mb-1 ml-3 font-bold'>{user?.displayName}</h5>
                        <p className='ml-3 font-semibold mb-3'>email: {user?.email}</p>
                        <li onClick={handleLogOut}><a className='btn'>Logout</a></li>
                    </ul>
                </div> : <Link to='/login' className="btn font-bold bg-[#3D52A0] text-white">Login / Register</Link>}
            </div>
        </div>
    );
};

export default Navbar;