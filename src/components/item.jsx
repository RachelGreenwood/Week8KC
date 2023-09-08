const Item = ({ item }) => {
    return (
        <div data-testid="item">
        {!item.text ? null : (<div className="singleitem">{item.text}</div>)}
        </div>
    )
  };
  
  export default Item;