import React, {useState, useEffect} from 'react';
import * as userProfileService from "../../api/userprofile.service";

const UserIndex = () => {
    const [description, setDescription]= useState("");
    const [username, setUsername]= useState("");
    const [walletBalance, setWalletBalance]= useState("");
    const [expertise, setExpertise]= useState("");

    const handleSubmit = async () => {
        let newUserInfo = { description, expertise };
        let res = await userProfileService.update(newUserInfo).then(() => {
            setDescription("");
            setExpertise("");
            console.log("userprofile new user info: ", newUserInfo)
        });
        if (!res === 201) {
            alert(`Error updating user information, ${res.status}`);
        }
    };

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
    <form>
        <label>
            Would you like to change your description:
            <break></break>
            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                type="text"
                name="User Description"
                placeholder="tell everyone a little bit about yourself"
            />
        </label>
        <label>
        <break></break>
            Would you like to change your Expertise?
            <textarea
                onChange={(e) => setExpertise(e.target.value)}
                value={expertise}
                type="text"
                name="reveal your expertise to others"
                placeholder="input your expertise"
            />
        </label>
    </form>
    <button onClick={handleSubmit}>Update user profile information </button>
</div>               
);
} 

export default UserIndex;