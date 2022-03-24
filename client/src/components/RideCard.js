const RideCard = (props) => {
  return (
    <div className="style" id="highlight">
      <h3>{props.name}</h3>
      <img className="img" src={props.image} alt={props.name}></img>
    </div>
  )
}

export default RideCard
