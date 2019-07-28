
function List(props){
    const listItems = props.items.map(item => {
        return <li key={`todo-${item.id}`}>{item.description}</li>
    });
    return (
        <ul>
            {listItems}
        </ul>
    )
}