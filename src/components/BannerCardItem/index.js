// Write your code here.
import './index.css'

const bannerCardsItem = props => {
  const {Details} = props
  const {headerText, description, className, id} = Details

  return (
    <li className="user-card-container">
      <div className={className}>
        <h1 className="user-name"> {headerText} </h1>
        <p className="user-designation"> {description} </p>
        <button>see more</button>
      </div>
    </li>
  )
}
export default bannerCardsItem
