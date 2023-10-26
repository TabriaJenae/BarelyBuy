import NavBar from "./NavBar"
import {Nav, NavDropdown} from "react-bootstrap"
import {Link,usehistory} from "react-router-dom"

export default function Header() {
    let user= JSON.parse(localStorage.getItem("user-info"))
    const history = useHistory()
    function logOut(){
        localStorage.clear()
        history.push('/register')
    }
    return(
        <>
        <div>
            <NavBar bg="dark" variant="dark"/>
            <NavBar.Brand href="#home">Navbar</NavBar.Brand>
            <Nav className="mr-auto nav_bar_wrapper">
                {
                    localStorage.getItem('user-info')?
                    <>
                    <Link to="/add">Add Product</Link>
                    <Link to="/update">Update Product</Link>
                    </>
                    :
                    <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    </>
                }
            </Nav>
            {localStorage.getItem('user-info')} 
            <Nav>
                <NavDropdown title={user && user.name} >
                  <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>  
                </NavDropdown>
            </Nav>
            :null
        </div>
        </>
    )
}
