import React, {useContext, useEffect, useState} from 'react';

const CreateContext = React.createContext()  // create a context

// create and export a function that will be imported everywhere to provide all functions and states
export function GlobalContext(){ 
    return useContext(CreateContext)
}

// Create a function that will have all functions and states to call or read from
export function Context({children}) {
    // all functions and states here
    const [isloading, setLoading]=useState(false);
    const [currentUser, setCurrentUser]=useState('');
    const [network, setNetwork]=useState('');

    useEffect(() => {
        setLoading(false);
        setCurrentUser('')
     },[])

     const NewLogin = (user) =>{
        setCurrentUser(user)
        console.log(user);
     }

     function setNewNet(newnet){
        setNetwork(newnet)
        console.log(newnet);
     }
     
    const value ={
        // export all states and functions here
        currentUser,
        network,
        setNewNet,
        NewLogin
     
    }

    return (
        <CreateContext.Provider value={value}>
             {!isloading && children}
        </CreateContext.Provider>
    )
}