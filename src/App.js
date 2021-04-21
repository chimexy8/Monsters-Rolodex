import React,{Component} from 'react';
import {CardList} from './components/card-lists/card-list.component.jsx';
import {Searchbox} from './components/search-box/search-box.component';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//           checking out the Code
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component{
  constructor(){
    super();
    this.state={
      //string:"Hello Mexy"
      monsters:[
        // {name:'Frankestein',id:1},
        // {name:'Dracula',id:2},
        // {name:'Zombie',id:3}

      ]
      ,
      searchField:''
    }

    //this.handleChange=this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json()).then(users=>this.setState({monsters:users}));
  }

handleChange=(e)=>{
  this.setState({searchField:e.target.value})
}

  render (){
     const {monsters,searchField}=this.state;
     var filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searchbox placeholder="search monsters" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}>
         
        </CardList> 
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.string}
            
          </p>
          <button onClick={()=> this.setState({string:"Hi Mexy"})}>change Text</button>
       
        </header> */}
        
        
      </div>
    )
  }
 
}
export default App;
