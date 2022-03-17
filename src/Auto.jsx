import React from "react";


class Auto extends React.Component{
    constructor(props){
        super()

    }

    render(){
        return(
            <div >
                <h1>Brand - {this.props.auto}</h1>
                <h2>Year - {this.props.year}</h2>
                <h3>Color - {this.props.color}</h3>
                <h4>Country - {this.props.country}</h4>
                <img src={this.props.src} alt='' style={{ width: '90%',height:'300px' }}/>
            </div>
            
        )
    }
}

export default Auto