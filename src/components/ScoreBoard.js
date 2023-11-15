// src/components/ScoreBoard.js
import React, { useState } from 'react';
import './ScoreBoard.css';







function ScoreBoard({ team1Score, team2Score,team3Score, currentTeam, setCurrentTeam} ) { 


  let switchToRedTeam = () => {
    setCurrentTeam('red');
  };
  
  let switchToBlueTeam = () => {
    setCurrentTeam('blue');
  };
  
  
  let switchToGreenTeam = () => {
    setCurrentTeam('green');
  };

  

  return (

    <div className="scoreboard">
      <div className={`team team-red ${currentTeam === 'red' ? 'active' : ''}`} onClick={switchToRedTeam}>
        
        Rosso: {team1Score}
      </div>
      <div className={`team team-blue ${currentTeam === 'blue' ? 'active' : ''}`} onClick={switchToBlueTeam} >
        Blu: {team2Score}
      </div>
      <div className={`team team-green ${currentTeam === 'green' ? 'active' : ''}`} onClick={switchToGreenTeam} >
        Verde: {team3Score}
      </div>
    </div>
  );
}

export default ScoreBoard;
