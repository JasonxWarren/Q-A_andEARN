import React from "react";
import Login from "../Login";
import Register from "../Register";

const Welcome = ({ checkUserActive }) => {
	return (
		<div className="container1">
			<div className="center">
			<div>
			<h1 style={{fontSize: "50px", color: "white", textDecoration: "underline"}}>Q and A</h1>
			<h1>Welcome</h1>
			</div>
				
			</div>
			<div>
				<div>
					<Login checkUserActive={checkUserActive}/>
				</div>
				<div>
					<Register />
				</div>
			</div>	
		</div>
	);
};

export default Welcome;