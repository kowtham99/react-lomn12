const Card = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="card item">
      <div>
        <img src={props.imageUrl} alt="something went wrong!"></img>
      </div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button type="button" onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
};

export default Card;
