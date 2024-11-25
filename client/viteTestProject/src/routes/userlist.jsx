import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function UserList() {

  const [users, setUsers] = useState([]);
  
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/users");
    setUsers(response.data.users);
    console.log(response.data.users);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

    return (
        <div>
          {users.map((user) => (
            <div  key={user.id} className="flex flex-col gap-2">
              <Link   to={`/users/${user.id}`} >
                {user.first_name} {user.last_name}
              </Link>
            </div>
          ))}
        </div>
    );
  }