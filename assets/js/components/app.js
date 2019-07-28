
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todoList: [
                { id:1 , description: 'Learn React js'}
            ]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        debugger
        const todo = {
            id: this.state.todoList.length + 1,
            description: event.target.elements.description.value
        };

        this.setState(state => {
            const todoList = [...state.todoList,todo];
            return {
                todoList
            };
        });
        event.target.elements.description.value = null;
        event.target.elements.id.value = 0;
        event.preventDefault();
    }

    render(){
        return (
            <React.Fragment>
                <h1>Todo List</h1>
                <List items={this.state.todoList}/>
                <Form onSubmit={this.handleSubmit}/>
            </React.Fragment>
        );
    }
}