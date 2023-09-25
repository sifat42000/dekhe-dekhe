import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/adress'>Adress</Link>
            <Link to='/user'>User</Link>
            <Link to='/post'>Post</Link>
            
            
        </div>
    );
};

export default Navbar;