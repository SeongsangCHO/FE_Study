import styles from './App.module.css'
import {useState, useEffect} from 'react';

function App() {
  const onLogin = (e) => {

  }
  useEffect(()=>{
    console.log('rendered....');
  });
  return (
    <div className="App">
      <button onClick={onLogin}className={styles.loginButton}>Continue with Kakao</button>
    </div>
  );
}

export default App;
