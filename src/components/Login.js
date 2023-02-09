import { signInWithGoogle } from "../firebase";
import { Link } from 'react-router-dom';
import googleLogo from "../assests/google.png";


const Login = () => {
  return (
    <div>
      <input type="image" src={googleLogo}  component={Link} to='/create'  onClick= {signInWithGoogle}/>
    </div>
  )
}


export default Login;
