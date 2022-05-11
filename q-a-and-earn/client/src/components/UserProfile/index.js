import React, {useState, useEffect} from 'react';
import * as userProfileService from "../../api/userprofile.service";

const UserIndex = () => {
    const [user, setUser] = useState([]);
    

    const findUser = async () => {
        await userProfileService.show().then((res) => {
            setUser(res.data.data);
        });
    }
    useEffect(() => {
        findUser();
    }, []);
 
    
    // const getExistingProfile = async () => {
    //     let res = await userProfileService.show()
    //         .then((data) => {
    //     });
    //     if ( !res === 201 ) {
    //         alert("Profile Not Deleted") 
    //     } 
    // }
return (    
    <div>
                         <h3>Welcome</h3>
                            <h2>{user.username}</h2>
                            <p>{user.description}</p>
                </div>
);  
}



export default UserIndex;