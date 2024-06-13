import "../../styles/globals.css"
import { Toaster } from "react-hot-toast"
import AuthProvier from "../context/AuthContext"
import { wrapper } from "../redux/store"

function MyApp({ Component, pageProps }) {
    return (
      <AuthProvier>
        <Component {...pageProps} />
        <Toaster />
      </AuthProvier>
    )
  }


  export default wrapper.withRedux(MyApp);