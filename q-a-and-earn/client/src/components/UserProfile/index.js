import React, {useState, useEffect} from 'react';
import * as userProfileService from "../../api/userprofile.service";

const UserIndex = () => {
    const [description, setDescription]= useState("");
    const [username, setUsername]= useState("");
    

    const getExistingProfile =  () => {
        let res =  userProfileService.show()
            .then((data) => {
             console.log("get existing profile: ", data.data.data)
            setUsername(data.data.data.username);
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
                            <h2>{username}</h2>
                           
                </div>
);  
}



export default UserIndex;