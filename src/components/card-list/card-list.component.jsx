

import './card-list.styles.css'
import Card from "../card/card.component.jsx";

const CardList = ({characters}) => {
  return (  
    <div className="card-list">
      <Card list={characters} />
    </div>
  );

}



export default CardList;
