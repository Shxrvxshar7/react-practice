

function List(props){

    

    // const fruits = [{name:"apple", calories: 95},
    //     {name:"orange",calories: 115}, // Use id for keeping track in real systems
    //     {name:"banana",calories: 190},
    //     {name:"coconut",calories: 90}]


    //fruits.sort((a, b) => a.name.localeCompare(b.name));
    // const listItems = fruits.map(fruit => <li key = {fruit.name}>
    //                                                 {fruit.name}:&nbsp;
    //                                                 {fruit.calories}</li>);

    //return(<ol>{listItems}</ol>);
    
    //reusable list ocmponent

    const category = props.categort;
    const itemList = props.items;
    const listItems = itemList.map(item => <li key = {item.name}>
                                                    {item.name}:&nbsp;
                                                    {item.calories}</li>);
    
    return(<> 
            <h3>{category}</h3><ol>{listItems}</ol>;
        </>)
}

export default List