import { Link } from "react-router-dom"


export default function NavBar() {


    return(
        <>
        <div className="NavBar outline">
            <div>
                <Link to = '/Login' className='navButton'>Login</Link>
                <Link to = '/Register' className="navButton">Register</Link>
                <Link to = '/Cart' className="cartButton">Cart</Link>
            </div>
            <Link to = '/' className="title">barely buy</Link>

        </div>
        </>
    )
} 