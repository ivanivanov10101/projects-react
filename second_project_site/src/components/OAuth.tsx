import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Button, Spinner } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { firebaseApp } from "../firebase";
import { useAppDispatch } from "../store/storeHooks";
import { signInFailure, signInSuccess } from "../store/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { handleAxiosError } from "../utils/utils";
import { Axios } from "../config/api";
import { useState } from "react";

const OAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    const auth = getAuth(firebaseApp);
    const googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: "select_account" });

    setLoading(true);
    try {
      const resultsFromGoogle = await signInWithPopup(auth, googleProvider);
      const googleData = {
        name: resultsFromGoogle.user.displayName,
        email: resultsFromGoogle.user.email,
        googlePhotoUrl: resultsFromGoogle.user.photoURL,
      };

      const { data } = await Axios.post(`/auth/google`, googleData);
      dispatch(signInSuccess(data.data.user));
      setLoading(false);
      navigate("/");
    } catch (error) {
      const err = await handleAxiosError(error);
      dispatch(signInFailure(err));
      setLoading(false);
    }
  };

  return (
    <Button
      type="button"
      className="text-white bg-[#63d052] hover:bg-[#81d973] focus:outline-none  font-medium rounded-md text-sm py-0.5 text-center dark:bg-[#63d052] dark:hover:bg-[#63d052] "
      outline
      onClick={handleGoogleClick}
    >
      {loading ? (
        <>
          <Spinner size={"sm"} />
          <span className="pl-3">Loading...</span>
        </>
      ) : (
        <>
          <AiFillGoogleCircle className="w-6 h-6 mr-2" />
          Continue with Google
        </>
      )}
    </Button>
  );
};

export default OAuth;
