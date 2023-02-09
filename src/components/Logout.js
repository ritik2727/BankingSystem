import { signOut } from "../firebase";


const Login = () => {
  return (
    <div>
      <button className="button" onClick={signOut}><i className="fab fa-google"></i>Sign out</button>
    </div>
  )
}


export default Login;