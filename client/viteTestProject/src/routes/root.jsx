import { Link } from 'react-router-dom';


export default function Root() {
    return (
      <>
        <div>
          <Link to={'/users'}>Click here to go to the Users Application</Link>
        </div>
      </>
    );
  }