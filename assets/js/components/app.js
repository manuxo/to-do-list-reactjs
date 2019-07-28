
class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                <h1>Todo List</h1>
                <ul>
                    <li>learn python</li>
                    <li>learn react js</li>
                </ul>
                <form id="todo-form">
                    <input type="text" placeholder="Description..." required></input>
                    <button type="submit">Add</button>
                </form>
            </React.Fragment>
        );
    }
}