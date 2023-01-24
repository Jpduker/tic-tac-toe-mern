import React from "react";
import "./Home.css";
import Button from "@mui/material/Button";

function Home() {
	return (
		<div>
			<div className="your-games">Your Games</div>

			<div className="container">
				<div className="card">
					<div className="game-with">Game with Person</div>
					<p className="home-text">
						person just made a move! It's your turn now
					</p>
					<div className="date">date</div>
					<Button
						variant="contained"
						className="play-button"
						sx={{ color: "#FFFFF", backgroundColor: "#F2C94C" }}
					>
						Play!
					</Button>
				</div>
                
			</div>

            
		</div>
	);
}

export default Home;
