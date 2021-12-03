import './App.scss';
import Routes from './routes/Routes';
import AuthContext from './components/firebase/AuthContext'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "./components/firebase/firebaseLite";

function App() {
  const [firebseAuth, setFirebaseAuth] = useState({ isLoggedIn: false });
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setFirebaseAuth({ isLoggedIn: true });
      console.log(user);
      const uid = user.uid;
      // ...
    }
  });
  return (
   <div className="main_container">
   <Routes />
    </div>
  );
}

export default App;
