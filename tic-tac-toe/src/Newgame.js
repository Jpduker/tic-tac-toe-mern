import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./Newgame.css";
import { Button } from "@mui/material";

function Newgame() {
	return (
		<div>
			<div className="action-bar-new">
				<div className="left-icons-new">
					<ArrowBackIosIcon />
				</div>
			</div>
			<div className="create-icon-new">Start a new game</div>
			<div className="details-new">Whom do you want to play with?</div>
			<div className="email-new">Email</div>
			<input
				className="email-input-new"
				placeholder="Type your email here"
				type="text"
			></input>
            <Button variant="contained" className='start-button-new' sx={{ color: '#FFFFF', backgroundColor: '#F2C94C'}}>Start Game</Button>
		</div>
	);
}

export default Newgame;
