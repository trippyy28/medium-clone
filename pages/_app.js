import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";
import { useContext } from "react";
import "../styles/globals.css";
import { useUserData } from "../lib/hooks";
import { auth } from "../lib/firebase";

function MyApp({ Component, pageProps }) {
  const userData = useUserData();
  const { user, username } = useContext(UserContext);
  console.log(username)
  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
