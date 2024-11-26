import { useParams, Link, Links } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserNotFound from './userNotFound.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';


export default function UserDetails () {
 

    const params = useParams();
    const id = params.id;
    const [userDetails, setUserDetails] = useState({});
    const [isDataLoading, setIsDataLoading] = useState(true); //when this is initialized to false the condition in the html always passes
    const isIdValid = (id > 0 && id <= 50) ? true : false;
    const noAvatarAddress = '../assets/images/no_avatar.png';

    const fetchAPI = async () => {
        setIsDataLoading(true);

        const response = await axios.get(`http://localhost:8080/users/${id}`);
        setUserDetails(response.data.userDetails);
        console.log(response.data.userDetails);
        setIsDataLoading(false);

    };

    useEffect(() => {
        fetchAPI();
    }, []);

    return (isIdValid && !isDataLoading) ? (
        <>

            <ul> 
                <li> <img src={ userDetails.avatar }></img></li>
                <li>{userDetails.first_name} {userDetails.last_name}</li>
                <li>{ userDetails.email } - { userDetails.emailVerified ? 'verified': 'not verified'}</li>
                <li>DOB: {userDetails.dob}</li>
                <li>Company Name: {userDetails.company.name}</li>
                <li>Department: {userDetails.company.department}</li>
                <li>Skills: {userDetails.skills[0]} {userDetails.skills[1]} {userDetails.skills[2]}</li>
            </ul>  
        </>
        )
        : <UserNotFound/>;
}