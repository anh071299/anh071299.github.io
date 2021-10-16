
  const pokemons=  [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
  ];


class Pokecard  extends React.Component{
  render() {
    return (
      <li className="pokecard">
        <h2 className="pokecard__name">{this.props.name}</h2>
        <img src={this.props.image} alt="Pokemon" />
        <div className="pokecard__type">Type: {this.props.type}</div>
      </li>
    );
  }
}

class Pokedex  extends React.Component{
  render() {
    return (
      <ul className='pokecards d-flex flex-wrap justify-content-center'>
        {
          this.props.pokemons.map((p) => (
        
              <Pokecard  {...p}/>
           
          ))
        }
      </ul>
    )
  }
}
class App  extends React.Component{
  render(){
    return(
      <div>
        <Pokedex pokemons = {pokemons}/>
      </div>

    )
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));
