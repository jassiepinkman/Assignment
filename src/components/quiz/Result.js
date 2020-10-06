import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import "./Result.css";

class Result extends Component {
    constructor (props) {
        super(props);
        this.state = {
            score: 0
        };
    }

    componentDidMount () {
        const { state } = this.props.location;
        console.log(state);
        this.setState({score:state.score})
    }

    render () {
        const { state } = this.props.location;
        let stats, remark;
        const userScore = this.state.score;
        console.log(userScore);

        if (userScore <= 3 ) {
            remark = 'Better Luck Next Time.';
        } 
        if (userScore >= 8 && userScore <= 10) {
            remark = 'EXCELLENT!';
        } 
        if (userScore >= 5 && userScore <= 7) {
            remark = 'GOOD!';
        } 
        if (userScore >= 3 && userScore <= 5) {
            remark = 'Average.';
        };
    
        if (state !== undefined) {
            stats = (
                <div className="result">
                    <h1>Quiz has ended!</h1>
                        <h4>{remark}</h4>
                            <span>
                                <Link to ="/"><button className="button">Home</button></Link>
                            </span>
                </div>
            );
        } 
        return (
            <>
                <div className="result">
                    {stats}
                </div>
            </>
        );
    }
}

export default Result;