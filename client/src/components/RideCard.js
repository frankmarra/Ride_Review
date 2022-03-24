const RideCard = (props) => {
  return (
    <div clasName="card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} alt="image" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}

export default RideCard
