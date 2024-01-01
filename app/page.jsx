import LikeButton from "./Like-button";

/* Header function to manipulate the header */
function Header({title}){
  return <h1>{title ? title: "Default Title"}</h1>
}

/* Homepage function to manipulate Homepage */
export default function Homepage(){
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship."/>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton/>
    </div>
  )
}
