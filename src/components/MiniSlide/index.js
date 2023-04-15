import './index.css'

const MiniSlide = props => {
  const {each, onClickMiniSlide, count, currentSlideId} = props
  const onClickFunction = () => {
    onClickMiniSlide(each.id)
  }
  let cls = ''
  if (each.id === currentSlideId) {
    cls = 'selected-container-mini-slide'
  } else {
    cls = 'container-mini-slide'
  }

  return (
    <li className={cls} onClick={onClickFunction}>
      <p className="slide-number">{count}</p>
      <div className="mini-slide">
        <h1 className="heading">{each.heading}</h1>
        <p className="description">{each.description}</p>
      </div>
    </li>
  )
}

export default MiniSlide
