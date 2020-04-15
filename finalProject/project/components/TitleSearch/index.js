import SearchResult from '../SearchResult'; 
import books from 

class TitleSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchValue: "", 
      result: []
    };
  }
  changeHandler(value) {
    this.setState(
      {
        searchValue: value
      }
    );
  }
  async clickHandler() {
    let searchValue = this.state.searchValue; 

    if(searchValue == "") {
      searchValue = "~"; 
    }

    let response= await fetch('' + searchValue); 
    let processed = await response.json(); 

    this.setState({result: processed}); 
}
  render() {
    return(
      <div className={StyleSheet.searchBackground}>
        <p>Search by Title</p>
        <input
          type="text"
          onChange= {(event) => {this.changeHandler(event.target.value);}} />
        <button onClick= {() => {this.clickHandler()}} className={styles.navLink}>Search</button>
        {
          this.state.result.map((books, index) => {
            return(
              <SearchResult books={books} number={index}/>
            )
          })
        }
      </div>
    );
  }
}

export default TitleSearch; 