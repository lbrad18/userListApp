import { Link } from 'react-router-dom';


export default function Root() {
    return(
      <>
        <div className="center-div-margin-auto">
        <Link to={'/users'}>Click here to go to the Users Application</Link>
        </div>
      </>
    )

  }