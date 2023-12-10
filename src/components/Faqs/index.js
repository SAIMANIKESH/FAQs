// Write your code here.

import {Component} from 'react'
import FaqItem from '../FaqItem'

import './index.css'

let newList = null

class Faqs extends Component {
  state = {isClicked: false}

  insertingIsOpened = value => {
    const {faqsList} = this.props
    if (!value) {
      newList = faqsList.map(eachItem => ({...eachItem, isOpened: false}))
    }
    return newList
  }

  onClickItem = id => {
    newList[id].isOpened = !newList[id].isOpened

    this.setState({isClicked: true})
  }

  render() {
    const {isClicked} = this.state
    this.insertingIsOpened(isClicked)

    return (
      <div className="container">
        <div className="app-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-list-items-container">
            {newList.map(eachItem => (
              <FaqItem
                key={eachItem.id}
                faqsListDetail={eachItem}
                onClickItem={this.onClickItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
