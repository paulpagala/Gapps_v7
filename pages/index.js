import React from 'react'
import Image from 'next/image'
import company_logo_source from "/public/company-logo.png";
import app_logo_source from "/public/GAccess-colored.png";
import google_logo_source from "/public/img_landingpage/brands-and-logotypes.png";
import { useRouter } from 'next/router'


//for firebase
import { getAuth, GoogleAuthProvider, signInWithRedirect,getRedirectResult } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { useGlobalContext } from '../context/global';


export default function LandingPage() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAERVK050ys-XUl7Dqdwr8HZWmUoMPm1sI",
    authDomain: "gapps-trial.firebaseapp.com",
    projectId: "gapps-trial",
    storageBucket: "gapps-trial.appspot.com",
    messagingSenderId: "432389018850",
    appId: "1:432389018850:web:34aae1cd28bd5e915d3abb"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const {setSSOuser} = useGlobalContext();

  const router = useRouter()
  
  const handleClick = (e) => {
    e.preventDefault()
    signInWithRedirect(auth, provider)
    
    router.push('/landingPage')
    
  }
  
 

 
  // console.log(setSSOuser)


  return (
    <div className='background'>
      <div className='top'></div>
      <div className='box'>
        <Image src={company_logo_source} alt="company_logo" width={124} height={46} />
        <div style={{ marginTop: '5%' }}>
          <Image src={app_logo_source} alt="app_logo" width={247} height={76} />
        </div>
        <div className='sso_container'>
          <div className='google_logo_container'>
            <Image src={google_logo_source} alt="google_logo" width={32} height={32} />
          </div>
          <button className='sso_button' onClick={handleClick}>Login with Google account</button>
        </div>
      </div>
      <div className='bottom'></div>
    </div>
  )
}
