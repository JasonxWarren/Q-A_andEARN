import React from "react";
import Login from "../Login";
import Register from "../Register";

const Welcome = ({ checkUserActive }) => {
	return (
		<div>
			<div className="center">
			<div>
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