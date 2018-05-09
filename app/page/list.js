import React from 'react'
import MusicListItem from '../components/musiclistitem'

class MusicList extends React.Component {
    constructor(props){
        super(props)
        console.log("list");
        console.log(this.props.musiclist);
    }

    render() {
        console.log(this.props.musiclist);
        let listEle = null;
        listEle = this.props.musiclist.map((item) => {
            return (
                <MusicListItem
                    focus={item ===this.props.currentMusicItem}
                    key={item.id}
                    musicItem={item}
                >
                    {item.title}
                </MusicListItem>
            );
        });

        return (
            <ul>
                { listEle }
            </ul>
        );
    }
}

export default MusicList;