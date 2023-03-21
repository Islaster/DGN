import { useState } from "react";
import { arrayChunk, addClass } from "../../helpers/functions";

export default function DGN({ classes }) {
  const [map, setMap] = useState();
  const [player, setPlayer] = useState({
    atk: 10,
    HP: 100,
    exp: 0,
  });
  const [bag, setBag] = useState(null);
  let exp = 100;
  if (player.exp === exp) {
    exp *= 2;
  }

  return (
    <section>
      <div className="row">
        <div className="col-md-12">Map</div>
      </div>
      <div className="row">
        <button>walk</button>
      </div>
      <div className="row">
        <div className="col-md-6">
          Player Stats: <br />
          Attack: {player.atk} <br />
          Health Points: {player.HP} <br />
          Experience Points: {player.exp}/{exp}
        </div>
        <div className="col-md-6">
          Bag
          {bag ? (
            arrayChunk(bag, 4).map((b, i) => (
              <div className="row" key={i}>
                {b.map((item, i) => (
                  <div className="col-md-3">
                    {item.name}({item.quantity})
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </section>
  );
}
