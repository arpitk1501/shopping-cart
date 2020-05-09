import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import {ADD_TO_CART} from '../actions/action-types/cart-actions'
import {REMOVE_ITEM} from '../actions/action-types/cart-actions'
import {SUB_QUANTITY} from '../actions/action-types/cart-actions'
import {ADD_QUANTITY} from '../actions/action-types/cart-actions'
import {ADD_SHIPPING} from '../actions/action-types/cart-actions'
import {SUB_SHIPPING} from '../actions/action-types/cart-actions'

const initState = {
    items: [
        {
            itemId: 1,
            itemName: 'Winter body',
            itemBrand: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            itemPrice: 110,
            itemImage: Item1
        },
        {
            itemId: 2,
            itemName: 'AditemIdas',
            itemBrand: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            itemPrice: 80,
            itemImage: Item2
        },
        {
            itemId: 3,
            itemName: 'Vans',
            itemBrand: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            itemPrice: 120,
            itemImage: Item3
        },
        {
            itemId: 4,
            itemName: 'White',
            itemBrand: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            itemPrice: 260,
            itemImage: Item4
        },
        {
            itemId: 5,
            itemName: 'Cropped-sho',
            itemBrand: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            itemPrice: 160,
            itemImage: Item5
        },
        {
            itemId: 6,
            itemName: 'Blues',
            itemBrand: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            itemPrice: 90,
            itemImage: Item6
        }
    ],
    // items: [],
    addedItems: [],
    total: 0,
    contacts: {}

}

const cartReducer = (state = initState, action) => {

    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_CART) {

        let addedItem = state.items.find(item => item.itemId === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.itemId)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.itemPrice
            }
        } else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.itemPrice

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.itemId)
        let new_items = state.addedItems.filter(item => action.id !== item.itemId)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.itemId === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.itemPrice
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.itemId === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.itemId !== action.id)
            let newTotal = state.total - addedItem.itemPrice
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.itemPrice
            return {
                ...state,
                total: newTotal
            }
        }

    }
    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 6
        }
    }

    if (action.type === SUB_SHIPPING) {
        return {
            ...state,
            total: state.total - 6
        }
    }

    if (action.type === 'GET_DATA') {
        return {
            ...state,
            items: action.data
        }
    }
    return state

}
export default cartReducer;