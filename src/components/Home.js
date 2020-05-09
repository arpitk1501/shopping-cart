import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from './actions/cartActions';
import {getDummyData} from './actions/cartActions';

class Home extends Component {

    handleClick = (id) => {

        this.props.addToCart(id);
    }

    /*componentDidMount() {
        fetch('/home/getAllItems',{
        headers: new Headers({
             'userName': 'test'
           })})
        .then(res => res.json())
        .then((data) => {
          this.props.getDummyData(data);
        })
        .catch(console.log)
      }*/

    render() {

        let itemList = this.props.items.map(item => {
            return (
                <div className="card card-local" key={item.itemId}>
                    <div className="card-image">
                        <img src={item.itemImage} alt={item.itemName}/>
                        <span className="card-title">{item.itemName}</span>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => {
                            this.handleClick(item.itemId)
                        }}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p>{item.itemBrand}</p>
                        <p><b>Price: Rs.{item.itemPrice}</b></p>
                    </div>
                </div>
            )
        });
        return (
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box box-local">
                    {itemList}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {
            dispatch(addToCart(id))
        },
        getDummyData: (data) => {
            dispatch(getDummyData(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);