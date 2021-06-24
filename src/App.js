import React ,{useEffect}from 'react';
import { useDispatch} from 'react-redux';
import './App.css';
import Qa from "./components/Qa";
import {login,selectUser,logout} from "./features/userSlice";
import Login from "./components/auth/Login";
import {useSelector} from 'react-redux';
import {auth} from "./firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
        console.log(authUser);
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return <div className="App">{user ?(<Qa />):(<Login />)}</div>;
}

export default App;
