import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result =>{
        console.log(result.user);
    })
   .catch(error => {
    console.log(error.message);
   })
  };
  return (
    <div className="w-full  mx-auto flex flex-col items-center">

  <button onClick={handleGoogleSignIn} className="w-full px-4 py-3 text-black bg-teal-300 rounded-md hover:bg-teal-400 text-lg font-semibold">Sign up with Google</button>
</div>
  );
};

export default SocialLogin;
