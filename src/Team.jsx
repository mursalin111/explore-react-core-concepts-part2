import { useState } from "react"

export default function Team(){
     
    const [player, setPlayer ] = useState(11);

    const handleAdd = () =>{
        // const newPlayer = player + 1;
        // setPlayer(newPlayer);
        // or
        setPlayer(player + 1);
    }
    const handleRemove = () =>{
        // const newPlayer = player - 1;
        // setPlayer(newPlayer);
        // or
        setPlayer(player - 1);
    }

   const teamStyle = {
    border: '2px solid purple',
    margin: '15px',
    padding: '15px',
    borderRadius: '15px'
   }
    return(
        <div style={teamStyle}>
            <h3>Players: {player}</h3>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}