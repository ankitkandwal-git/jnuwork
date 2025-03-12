import {Component} from 'react'

import './index.css'

class letterCalculator extends Component{
    render(){
        return(
            <div className="app-container">
                <div className="letter-container">
                    <h1 className="heading">Calculate the letter</h1>
                    <p className="paragraph">Enter the paragraph</p>
                    <input type="text" className="input-container"/>
                    <button className="button" type="button">No. of letter</button>
                </div>
            </div>
        )
    }
}
export default letterCalculator