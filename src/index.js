import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY =  'AIzaSyCdGUZsjCF2NE7oG844hR96cYOqFW3pAdk';
import VideoList from './components/video_list';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { videos : [] } ;

        YTSearch({key:API_KEY, term :'surfboards'},(videos) => {
            this.setState({videos});
        });
    }

    render(){
        return (<div>
            <SearchBar/>
            <VideoList videos={this.state.videos} />
        </div>);
    }
}



//Insert into page
ReactDOM.render(<App />, document.querySelector(".container"));