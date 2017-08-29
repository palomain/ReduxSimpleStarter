import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY =  'AIzaSyCdGUZsjCF2NE7oG844hR96cYOqFW3pAdk';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';



class App extends Component {
    constructor(props){
        super(props);
        this.state = { videos : [] , selectedVideo : null} ;
        this.videoSearch('surfboards');
    }

    videoSearch(term){

        YTSearch({key:API_KEY, term : term},(videos) => {
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
        });
    }

    render(){
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (<div>
            <SearchBar onSearchTermChange={term=>this.videoSearch(term)}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList videos={this.state.videos} onVideoSelect={selectedVideo=>this.setState({selectedVideo})} />
        </div>);
    }
}



//Insert into page
ReactDOM.render(<App />, document.querySelector(".container"));