
function List(props){
    const listItems = props.items.map(item => {
        let textDecoration = 'none';
        let color;
        const key = `todo-${item.id}`;
        if(item.fulfilled){
            textDecoration = 'line-through';
        }
        if(props.selected.id === item.id){
            color = '#2E9AFE';
        }
        return <li id={key} style={{textDecoration,color}} className="todo-item" key={key} onClick={props.onClick}>{item.description}</li>
    });
    return (
        <ul>
            {listItems}
        </ul>
    )
}