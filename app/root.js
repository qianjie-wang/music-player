'use strict'
import React from 'react'
import Header from './components/header'
import Player from './page/player'
import MusicList from './page/list'
import { MUSIC_LIST } from './config/musiclist'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends React.Component{
	render(){
		return (
				<Header />
		);
	}
}

class Root extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            musiclist: MUSIC_LIST,
            currentMusicItem: MUSIC_LIST[1],
            cycleModel: 'cycle'
        };
               
    }

    componentDidMount() {
        $('#player').jPlayer({
            ready: function () {
                $(this).jPlayer('setMedia',{
                    mp3:'http://vip.baidu190.com/uploads/2017/2017103a907a6f453f2e4e62537b4a1388d45a.mp3'
                }).jPlayer('play');
            },
            supplied: 'mp3',
            wmode: 'window'
        });
        
    }

    componentWillUnMount() {

    }

    render() {

        const Home = () => (
            <Player
              cycleModel={this.state.cycleModel}
              currentMusicItem={this.state.currentMusicItem}
            />
          );
      
          const List = () => (
            <MusicList
              currentMusicItem={this.state.currentMusicItem}
              musiclist={this.state.musiclist}
            />
        );

        return (
            <Router>
              <div>
                <Header/>
      
                <Route exact path="/" component={Home}/>
                <Route path="/list" component={List}/>
      
              </div>
            </Router>
          );
        }        

    // render() {
    //     return (
    //         <div>
    //             <Header />
    //             { React.cloneElement(this.props.children, this.state) }
    //             {/* { this.props.children }
    //             <MusicList
    //                 currentMusicItem={this.state.currentMusicItem} musiclist={this.state.musiclist}
    //             >
                        
    //             </MusicList> */}
    //             {/* <Player
    //                 currentMusicItem={this.state.currentMusicItem}
    //             ></Player> */}
    //         </div>
    //     );
    // }
    
}

// class Root extends React.Component{
//     render() {
//         return (
//         <Router history={hashHistory}>
//             <Route path="/" component={App}>
//                 <IndexRoute component={Player}></IndexRoute>
//                 <Route path="/list" component={MusicList}></Route>
//             </Route>
//         </Router>
//         );
//     }
// }

export default Root;
