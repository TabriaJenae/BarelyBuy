import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { API_URL } from "../config";
import { AppContext } from "../appcontextprovider";
import Navbar from "./Navbar";


const Login = () => {
    const { setIslogin, setUser } = useContext(AppContext);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();

        const data = JSON.stringify({
            email: email,
            password: password,
        })

        const h = new Headers();
        h.append('content-type', 'application/json');

        setIsLoading(true);

        const response = await fetch(API_URL + '/login', {
            headers: h,
            method: 'POST',

            body: data,
        })

        const responseData = await response.json();

        setIsLoading(false);

        if (responseData.error) {
            alert(responseData.errorMessage);
        } else {
            setEmail('');
            setPassword('');

            const token = responseData.token;
            sessionStorage.setItem('shoppingToken', token);

            setIslogin(true);
            setUser(responseData.user);

            alert('Login successfull');
            navigate('/dashboard');

            headers: {
                'Content-Type' : 'application/json'
            }, 
            body: JSON.stringify({
                email,
                password
            })
        });
        const result = await response.json();

        console.log(result?.data?.token);
        console.log(result);
        sessionStorage.setItem('token', result.data.token )
         sessionStorage.getItem('token', result.data.token)  
            navigate('/');
            
        setMessage(result.message);
        if(!response.ok) {
          throw(result)

        }


    }

    return (
        <>
            <Navbar />
            <div className="container my-5">
                <div className="row justify-content-center align-items-center" style={{ height: '90vh' }}>
                    <div className="col-6">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h2 className="text-center">Login</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <label htmlFor="">Email</label>
                                        <input type="email" value={email} className="form-control" onChange={e => setEmail(e.currentTarget.value)} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Password</label>
                                        <input type="password" value={password} className="form-control" onChange={e => setPassword(e.currentTarget.value)} required />
                                    </div>
                                    <div className="form-group my-4">
                                        <button type="submit" className="btn btn-primary" disabled={isLoading} >{isLoading ? 'loggin in...' : 'LOGIN'}</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
