import "../../styles/globals.css"
import { Toaster } from "react-hot-toast"
import { wrapper } from "../redux/store"
import { useEffect } from "react"
import { loadUserData } from "../redux/user/userAction"
import { useStore } from "react-redux"
// import AuthProvier from "../context/AuthContext"

function tala({ Component, pageProps }) {
  
  const store = useStore() ;

  useEffect( ()=>{
    loadUserData(store);
  },[] )
  
    return (
      <>
        <Component {...pageProps} />
        <Toaster />
      </>
    )
  }


  export default wrapper.withRedux(tala);