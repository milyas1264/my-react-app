function BootstrapCard(props) {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px auto" }}>
      <img src={props.img} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href={props.link} className="btn btn-primary">
          {props.btnText}
        </a>
      </div>
    </div>
  );
}

export default BootstrapCard;
