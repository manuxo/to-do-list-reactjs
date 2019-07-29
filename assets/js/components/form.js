
class Form extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.onSubmit} onReset={this.props.onReset}>
                <div>
                    <label htmlFor="todo-id">Id: </label>
                    <input id="todo-id" name="id" type="text" 
                    value={this.props.id} onChange={this.props.onChange} disabled/>
                </div>
                <br />
                <div>
                    <label htmlFor="todo-description">Description: </label>
                    <input id="todo-description" autoComplete="off" name="description" type="text" 
                    value={this.props.description} onChange={this.props.onChange} required />
                </div>
                <br />
                <div>
                    <button type="submit">Save</button>
                    <button type="reset">New</button>
                </div>
                <br/>
                <div>
                    <label><input id="todo-fulfilled" name="fulfilled" type="checkbox" 
                    checked={this.props.fulfilled} onChange={this.props.onCheck} />Fulfilled</label>
                </div>
            </form>
        );
    }
}

Form.defaultProps = { id:0, description: '', fulfilled: false};