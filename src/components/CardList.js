import Card from "./Card";
import useData from "../hooks/use-data";
import "./CardList.css";

const CardList = () => {
  const { items, isLoading, deleteById } = useData();
  const deleteHandler = (id) => {
    deleteById(id);
  };
  if (isLoading) {
    return (
      <div className="item display">
        <h2 className="loading">Loading...</h2>
      </div>
    );
  }
  return (
    <div className="item display">
      {items.map((item) => (
        <Card {...item} key={item.id} onDelete={deleteHandler} />
      ))}
    </div>
  );
};

export default CardList;
