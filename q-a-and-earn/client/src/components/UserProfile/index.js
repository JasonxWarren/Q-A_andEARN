import React, {useState, useEffect} from 'react';
import * as userProfileService from "../../api/userprofile.service";
import * as authService from "../../api/auth.service";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


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
    const handleDelete = async () => {
        console.log('in handleDelete');
        let res = await userProfileService.destroy()
            .then(() => {
               window.location.href = "/";
            });
         if ( !res === 201 ) {
             alert("Profile Not Deleted") 
         } 
    }   
    
    useEffect(() => {
        getExistingProfile();
    }, []);


    
return (    
    <div>
        <Container fluid style={{backgroundColor: 'rgba(183, 179, 179, 0.5)'}}>
                         <h3>Welcome</h3>
                            <h1>Wallet Balance: {walletBalance}</h1>
                            <h2>Username: {username}</h2>
                            <h3>Description: {description}</h3>
                            <button>{expertise}</button>
    <Form>
  <Form.Group className="mb-3">
    <Form.Label>Would you like to change your description:</Form.Label>
    <Form.Control onChange={(e) => setDescription(e.target.value)}
                value={description}
                type="text"
                name="User Description"
                placeholder="tell everyone a little bit about yourself" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Would you like to change your Expertise?</Form.Label>
    <Form.Control onChange={(e) => setExpertise(e.target.value)}
                value={expertise}
                type="text"
                name="reveal your expertise to others"
                placeholder="input your expertise"
            />
  </Form.Group>
  <Button onClick={handleSubmit}>Update user profile information
  </Button>
</Form>
    {/* <form>
        <label>
            
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
    <button onClick={handleSubmit}>Update user profile information </button> */}
    <break></break>
    <button onClick={() => {handleDelete(); alert("profile deleted")}}>Delete</button>
    </Container>
</div>               
);
} 

export default UserIndex;