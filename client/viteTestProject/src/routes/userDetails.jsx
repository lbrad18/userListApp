import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserNotFound from './userNotFound.jsx';

export default function UserDetails () {
 

    const params = useParams();
    const id = params.id;
    const [userDetails, setUserDetails] = useState({});
  
    const fetchAPI = async () => {
        const response = await axios.get(`http://localhost:8080/users/${id}`);
        setUserDetails(response.data.userDetails);
        console.log(response.data.userDetails);
    };

    useEffect(() => {
        fetchAPI();
    }, []);

    const isIdValid = (id > 0 && id <= 50) ? true : false;

    return (isIdValid) ? (
        <>
            <Link to={'/users'} >Users</Link>
            <div>UserId: {id}</div>
        </>
        )
        : <UserNotFound/>;
}