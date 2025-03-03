import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( { name, hp, front, back, id }) {
  const [isFront, setIsFront] = useState(true)

  function handleFlip(){
    setIsFront(!isFront)
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={handleFlip}>
          {isFront ? <img src={front} alt="front" /> : 
          <img src={back} alt="back" />}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
