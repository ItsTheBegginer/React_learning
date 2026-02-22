
    function List(props){
        listItem = props.items;
        Category = props.category;
       
    const SortedList = listItem.map(fruit =><li className="Afif" key = {fruit.id}>{fruit.name}:<b>{fruit.calories}</b></li>);
    return(<>
    <h3>{Category}</h3>
    <ul>{SortedList}</ul>
    
    </>);

    }

    export default List