import React, { useState } from "react";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";


export default function LogPage() {
    const [loader, setLoader] = useState(false);
    setTimeout(() => setLoader(true), 5000)
    
    return (
        <section>
            {loader ? <SignIn /> : <SignUp />}
        </section>
    )
    
}