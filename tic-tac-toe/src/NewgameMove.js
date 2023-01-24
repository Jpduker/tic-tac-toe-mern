import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./NewgameMove.css";
import logox from "./x.svg"
import  Button  from '@mui/material/Button';

function NewgameMove() {
	return (
		<div>
			<div className="action-bar-move">
				<div className="left-icons-move">
					<ArrowBackIosIcon />
				</div>
			</div>
			<div className="know-you-move">Game with Person</div>
			<p className="piece">your piece</p>
            <div className="cross-x">
                <img src={logox} />
            </div>
            <div className="version">
            <div className="your-move">Your move</div>
            <div className="group2">
                <div className="componentv2">
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                    <div className="box4"></div>
                    <div className="box5"></div>
                    <div className="box6"></div>
                    <div className="box7"></div>
                    <div className="box8"></div>
                    <div className="box9"></div>
                </div>
            
            </div>
            </div>
            <Button variant="contained" className='register-button-registerPage' sx={{ color: '#FFFFF', backgroundColor: '#F2C94C'}}>Submit!</Button>
		
		</div>
	);
}

export default NewgameMove;
