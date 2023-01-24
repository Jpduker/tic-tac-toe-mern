import React from "react";
import "./HomeNewUser.css";
import { Button } from "@mui/material";

function HomeNewUser() {
	return (
		<div>
			<div className="your-name-home">Your Games</div>

			<div className="no-games">No Games Found </div>

            <Button className="start-new-game" variant="contained"  sx={{ color: "#FFFFF", backgroundColor: "#F2C94C" }}>Start A New Game !</Button>
		</div>
	);
}

export default HomeNewUser;
