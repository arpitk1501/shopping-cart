import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getDummyData} from './actions/cartActions';

class RestData extends Component {

    componentDidMount() {
        fetch('/home/getAllItems', {
            headers: new Headers({
                'userName': 'test'
            })
        })
            .then(res => res.json())
            .then((data) => {
                this.props.getDummyData(data);
            })
            .catch(console.log)
    }

    render() {


        let addedItems = this.props.contacts.length ?
            (
                this.props.contacts.map(item => {
                    return (

                        <li className="collection-item avatar" key={item.itemId}>
                            <div className="item-img">
                                <img src={item.itemImage} alt={item.itemImage} className=""/>
                            </div>

                            <div className="item-desc">
                                <span className="title">{item.itemName}</span>
                                <p>{item.itemBrand}</p>
                                <p><b>Price: {item.itemPrice}$</b></p>
                                <p>
                                    <b>Quantity: {item.quantity}</b>
                                </p>

                                <button className="waves-effect waves-light btn pink remove" onClick={() => {
                                    this.handleRemove(item.itemId)
                                }}>Remove
                                </button>
                            </div>

                        </li>

                    )
                })
            ) :

            (
                <p>Nothing.</p>
            )
        return (
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
        //addedItems: state.addedItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDummyData: (data) => {
            dispatch(getDummyData(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestData);