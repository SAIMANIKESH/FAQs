// Write your code here.

import './index.css'

const FaqItem = props => {
  const {faqsListDetail, onClickItem} = props
  const {id, questionText, answerText, isOpened} = faqsListDetail

  const onClickButton = () => {
    onClickItem(id)
  }

  const image = isOpened
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const alter = isOpened ? 'minus' : 'plus'

  return (
    <li className="list-item">
      <div className="question-answer-card">
        <div className="question-card">
          <h1 className="question">{questionText}</h1>
          <button type="button" onClick={onClickButton} className="button">
            <img src={image} alt={alter} className="img-size" />
          </button>
        </div>
        {isOpened && (
          <>
            <hr className="separator" />
            <p className="answer">{answerText}</p>
          </>
        )}
      </div>
    </li>
  )
}

export default FaqItem
