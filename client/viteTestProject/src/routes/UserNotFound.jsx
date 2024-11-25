import { Link } from 'react-router-dom';

export default function userNotFound () {
    return (
        <>
        <Link to={'/users'}>Users</Link>
        <div>User Not Found</div>
        </>
    )
}