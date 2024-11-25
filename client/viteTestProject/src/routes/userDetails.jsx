import { useParams } from 'react-router-dom';
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

    return (id > 0 && id <= 50) ? <div>UserId: {id}</div> : <UserNotFound/>;
}