import { signIn } from "@astro-auth/client";

const Login = () => {
  return (
    <div>
      <button
        onClick={() => {
          signIn({
            provider: "google",
            callbackURL: "https://youtu.be/dQw4w9WgXcQ",
          });
        }}
      >
        Login with Google
      </button>
      <button onClick={()=>{
        signIn({
            provider:"github",
            callbackURL:"/adminconsole"
        })
      }}>GIthub</button>
    </div>
  );
};

export default Login;