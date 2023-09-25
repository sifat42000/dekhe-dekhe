import { useLoaderData } from "react-router-dom";


const Userdetails = () => {
    const user = useLoaderData()
    return (
        <div>
           <p>User ID : {user.id}</p>
            <h2>Email: {user.email}</h2>
            <h2>Username: {user.username} </h2>
            <h2>Website: {user.website}</h2>

            
        </div>
    );
};

export default Userdetails;