import { Toaster } from "react-hot-toast"
import "../../styles/globals.css"
import AuthProvier from "../context/AuthContext"

export default function App({ Component, pageProps }) {
    return (
      <AuthProvier>
        <Component {...pageProps} />
        <Toaster />
      </AuthProvier>
    )
  }