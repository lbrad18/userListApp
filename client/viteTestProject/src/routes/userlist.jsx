import { useState, useEffect } from 'react';
import axios from 'axios';


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
      <>
        <div>
          {users.map(user => <div key={user.id}>{user.id}</div>)}
        </div>
      </>
    );
  }