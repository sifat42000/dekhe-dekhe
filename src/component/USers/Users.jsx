import { Link, useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h2>Users Lenngth:{users.length} </h2>
            <div>
                {
                    users.map(user => <User user={user} key={user.id}></User>)
                }
               <h2><Link to='/'>Go to homepage</Link></h2> 
            </div>
            
        </div>
    );
};

export default Users;