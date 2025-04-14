import { useState, useEffect } from "react"
import {useDispatch} from "react-redux"
import authService from "./Appwrite/Auth";
import { login, logout } from "./store/authSlice"; 
import { Footer, Header } from "./components";

function App() {  
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .catch((e) => (console.log('Error', e)))
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <>
      <div>
        <Header />
        <main>
          Todo:
        </main>
        <Footer />
      </div>
    </>
  ) : null
}

export default App
