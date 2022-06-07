import React, { Component } from 'react'
import './ShoppingList.css'
import ShoppingListFrom from './ShoppingListForm'
import { v4 as uuidv4 } from 'uuid'

class ShoppingList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { name: 'Beer', qty: '4 bottles ', id: uuidv4() },
        { name: 'Dried Nuts', qty: '2 Kg', id: uuidv4() },
      ],
    }
    this.addItem = this.addItem.bind(this)
  }

  addItem(newProduct) {
    let newItem = { ...newProduct, id: uuidv4() }
    this.setState((st) => ({
      items: [...st.items, newItem],
    }))
  }

  renderItems() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item.id}>
            {item.name} : {item.qty}
          </li>
        ))}
      </ul>
    )
  }
  render() {
    return (
      <div className='ShoppingList'>
        <h1>My Shopping List</h1>
        {this.renderItems()}
        <ShoppingListFrom addItem={this.addItem} />
      </div>
    )
  }
}

export default ShoppingList
