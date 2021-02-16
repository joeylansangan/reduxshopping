import React, { Component } from 'react';

import { connect } from 'react-redux';

class Home extends Component{

    render(){

    let itemList = this.props.items.map(item=>{ 

    return(
        <div className="card" key={item.id}>
            <div className="card-image">
                <img src={item.img} alt={item.title}/>
                <span className="card-title">{item.title}</span>
                <a class="waves-effect waves-light btn btn-floating halfway-fab">Add</a>
            </div>
            <div className="card-content">
                <p>{item.desc}</p>
                <p><b>Price: {item.price}$</b></p>
            </div>
        </div>
        )
    })

    return(
        <div className="homeWrapper">
            <h3 className="center">Items for sale</h3>
            <div className="box">
                {itemList}
            </div>
        </div>
    )
    }
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }

export default connect(mapStateToProps)(Home)