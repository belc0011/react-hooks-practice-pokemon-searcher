import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, sprites}) {
  const [spriteToDisplay, setSpriteToDisplay] = useState(true)
  function handleClick(event) {
    setSpriteToDisplay(!spriteToDisplay)
  }
  console.log(name)
  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={spriteToDisplay ? sprites.front : sprites.back} onClick={handleClick}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
