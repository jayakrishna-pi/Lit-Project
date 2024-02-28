
import './Login.css';
const Login=()=>{
    return(
        <div className='login-page'>
            <h1 className="log-head">LOGIN</h1>
            <input type="email"  placeholder="Email"className='email'/>
            <input type="password" placeholder='Password' className='pass'/>
            <input type="submit" placeholder='Submit' className='button'/>
        
            
        </div>
    )
}
export default Login;