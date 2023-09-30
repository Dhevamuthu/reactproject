const Sareeitem=(props) =>{


    const {name,cuisines,rating,cost,url}=props.saree_data;
    return(
      <div className="Saree-card">
       <img src={url}
       alt="dress">
       </img>
       <div className="details">
        <div>
        <h2>{name}</h2>
        <span>{cuisines}</span>
        </div>
        <div>
        <h3>{rating}</h3>
        <span>{cost}</span>
        </div>
       
       </div>
       
      </div>
    );
  };

  export default Sareeitem;