import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserNotFound from './userNotFound.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';


export default function UserList() {

  const [users, setUsers] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);

  const fetchAPI = async () => {
    setIsDataLoading(true);
    const response = await axios.get("http://localhost:8080/users");
    setUsers(response.data.users);
    console.log(response.data.users);

    setIsDataLoading(false);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

    return (
        <div>
          {isDataLoading ? <LoadingSpinner/> : users.map((user) => (
            <div  key={user.id} className="flex flex-col gap-2">
              <Link   to={`/users/${user.id}`} >
                {user.first_name} {user.last_name}
              </Link>
            </div>
          ))}
        </div>
    );
  }