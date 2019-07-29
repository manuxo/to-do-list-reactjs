
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todoList: [
                { id:1 , description: 'Learn React js', fulfilled: false}
            ],
            selected: {
                id: 0,
                description: '',
                fulfilled: false
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    addTodo(newTodo){
        this.setState(state => {
            const todoList = [...state.todoList,newTodo];
            return {
                todoList,
                selected: newTodo
            };
        });
    }

    updateTodo(id,payload){
        this.setState(state => {
            const { todoList } = state;
            const item = todoList.find(x => x.id === id);
            if(item){
                Object.keys(item).forEach(key => {
                    const includes = Object.keys(payload).includes(key);
                    if(includes){
                        item[key] = payload[key];
                    }
                });
                return {
                    todoList,
                    selected: item
                };
            }
            return {
                todoList
            };
        });
    }

    handleSubmit(event){
        let id = parseInt(event.target.elements.id.value);
        if(isNaN(id) || id === 0){
            const newTodo = {
                id: this.state.todoList.length + 1,
                description: event.target.elements.description.value,
                fulfilled: event.target.elements.fulfilled.checked
            };
            this.addTodo(newTodo);
        }else{
            const payload = {
                description: event.target.elements.description.value,
                fulfilled: event.target.elements.fulfilled.checked
            };
            this.updateTodo(id,payload);
        }
        event.preventDefault();
    }

    handleReset(event){
        this.setState({
            selected: {
                id: 0,
                description: '',
                fulfilled: false
            }
        });
    }

    handleClick(event){
        if(event.target.id){
            const id = parseInt(event.target.id.substr(-1));
            const item = this.state.todoList.find(x => x.id === id);
            if(item){
                this.setState({
                    selected: item
                });
            }
        }
    }

    handleChange(event){
        if(event.target.name){
            const selected = Object.assign({},this.state.selected);
            selected[event.target.name] = event.target.value;
            this.setState({
                selected
            });
        }
    }

    handleCheck(event){
        if(event.target.name){
            const selected = Object.assign({},this.state.selected);
            selected[event.target.name] = event.target.checked;
            this.setState({
                selected
            });
        }
    }

    render(){
        return (
            <React.Fragment>
                <h1>Todo List</h1>
                <List 
                    selected={this.state.selected} 
                    onClick={this.handleClick}
                    items={this.state.todoList}
                />
                <Form 
                    id={this.state.selected.id}
                    fulfilled={this.state.selected.fulfilled}
                    description={this.state.selected.description}
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                    onCheck={this.handleCheck}
                    onReset={this.handleReset}
                />
            </React.Fragment>
        );
    }
}