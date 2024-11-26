import { Link } from 'react-router-dom';

export default function userNotFound () {

    return (<>
    <div>User Not Found</div>
    <Link to={'/users'}> back to Users</Link>
    </>)
}