
class Form extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.onSubmit}>
                <input name="description" type="text" placeholder="Description..." required></input>
                <input name="id" type="hidden" value="0" />
                <button type="submit">Save</button>
                <button type="reset">Clear</button>
            </form>
        );
    }
}