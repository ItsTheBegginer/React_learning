
function UserGreeting(props){
    const WelcomeMessage = <h2 className="Welcome">
                            Welcome {props.username}
                            </h2>
    const LoginPrompt = <h2 className="Login">Please Log In</h2>

  return( props.isLoggedIn ? WelcomeMessage : LoginPrompt
  );

}
export default UserGreeting