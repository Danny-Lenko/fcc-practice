class ControlledInput extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         input: ''
      };
      // Змініть код під цим рядком
      this.handleChange = this.handleChange.bind(this)
      // Змініть код над цим рядком
   }
   // Змініть код під цим рядком
   handleChange(event) {
      this.setState({
         input: event.target.value
      })
   }
   // Змініть код над цим рядком
   render() {
      return (
          <div>
             { /* Змініть код під цим рядком */}
             <input
                 value={this.state.input}
                 onChange={this.handleChange}
             />
             { /* Змініть код над цим рядком */}
             <h4>Controlled Input:</h4>
             <p>{this.state.input}</p>
          </div>
      );
   }
};