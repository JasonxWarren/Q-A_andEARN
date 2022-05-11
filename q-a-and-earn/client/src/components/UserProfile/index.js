import React, {useState, useEffect} from 'react';
import * as userProfileService from "../../api/userprofile.service";

const UserIndex = () => {
    const [description, setDescription]= useState("");
    const [username, setUsername]= useState("");
    

    const getExistingProfile = async () => {
        let res = await userProfileService.show()
            .then((data) => {
            // console.log("get existing profile: ", data.data.data)
            setUsername(data.data.data.username);
            setDescription(data.data.data.description);
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
                            {/* <h2>{user.username}</h2>
                            <p>{user.description}</p> */}
                </div>
);  
}



export default UserIndex;