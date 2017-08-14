
import Component from 'inferno-component';
import './registerServiceWorker';
import './App.css';

class App extends Component {

constructor(props) {
  super(props);
    this.state = {
      text: "",
    }
  }

  render() {
    return (
      <div className="App" contenteditable="true" onInput={event => this.setState({text: event.target.innerText})}>
        {this.state.text}
      </div>
    );
  }
}

export default App;
