```js
class App extends Component {
state = {
  incidents: [],
}

async componentDidMount() {
 const res = await axios.get('https://data.sfgov.org/resource/wr8u-xric.json', {
   params: {
     "$limit": 500,
     "$$app_token": YOUR_APP_TOKEN
   }
 })
 const incidents = res.data;
 this.setState({incidents: incidents });
};
render() {
 return (
<Map incidents={this.state.incidents}/>
 );
}
}
export default App;
```
