import React, {useState, useEffect} from 'react';
import * as userProfileService from "../../api/userprofile.service";

const UserIndex = () => {
    const [description, setDescription]= useState("");
    const [username, setUsername]= useState("");
    const [walletBalance, setWalletBalance]= useState("");
    const [expertise, setExpertise]= useState("");
    const getExistingProfile =  () => {
        let res =  userProfileService.show()
            .then((data) => {
             console.log("get existing profile: ", data.data.data)
            setUsername(data.data.data.username);
            setDescription(data.data.data.description)
            setWalletBalance(data.data.data.walletBalance)
            setExpertise(data.data.data.expertise[0])
            // setUser(data.data.description);
        });
        if ( !res === 201 ) {
            alert("Profile is here") 
        } 
    }
    useEffect(() => {
        getExistingProfile();
    }, []);
    
return (    
    <div>
                         <h3>Welcome</h3>
                            <h1>Wallet Balance: {walletBalance}</h1>
                            <h2>Username: {username}</h2>
                            <h3>Description: {description}</h3>
                            <button>{expertise}</button>
                           
                </div>
);  
}



export default UserIndex;