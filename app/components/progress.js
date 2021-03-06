import React from 'react'
import './progress.less'

class Progress extends React.Component {

    constructor(props){
        super(props)
        this.changeProgress = this.changeProgress.bind(this)
        // console.log(this.props.progress)
           
    }

    getDefaultProps() {
        return {
            barColor: '#2f9842'
        }
    }

    changeProgress(e) {

        let progressBar = this.refs.progressBar;
        let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
        this.props.onProgressChange && this.props.onProgressChange(progress);
        // console.log(e.clientX );
        // console.log(progressBar.getBoundingClientRect().left);
        // console.log(progressBar.clientWidth);
        // console.log(progress);
    }

    render() {
        return (
            <div className="components-progress" ref="progressBar" onClick={this.changeProgress}>
               <div className="progress" style={{width:`${this.props.progress}%`, background: this.props.barColor}}></div>
            </div>
        );
    }
}

export default Progress;