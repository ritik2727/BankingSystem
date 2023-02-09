import { signOut } from "../firebase";


const Login = () => {
  return (
    <div>
      <button className="button" onClick={signOut}><i src = 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/'className="fab fa-google"></i>Sign out</button>
    </div>
  )
}


export default Login;