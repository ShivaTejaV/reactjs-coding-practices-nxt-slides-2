import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from '../Header'
import MiniSlide from '../MiniSlide'
import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class Home extends Component {
  state = {
    slidesList: initialSlidesList,
    currentSlideId: initialSlidesList[0].id,
  }

  onClickNew = () => {
    const {slidesList, currentSlideId} = this.state
    const newList2 = []
    const newSlide = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }
    const arr = slidesList.filter(each => {
      if (each.id === currentSlideId) {
        newList2.push(newSlide)
        newList2.push(each)
        return true
      }
      newList2.push(each)
      return false
    })
    console.log(arr, newList2)
    this.setState({slidesList: newList2})
  }

  onChangeHeading = event => {
    const newText = event.target.value
    const {slidesList, currentSlideId} = this.state
    const newSlidesList = slidesList.map(each => {
      if (each.id === currentSlideId) {
        return {
          id: each.id,
          heading: newText,
          description: each.description,
        }
      }
      return each
    })
    this.setState({slidesList: newSlidesList})
  }

  onChangeDescription = event => {
    const newText = event.target.value
    const {slidesList, currentSlideId} = this.state
    const newSlidesList = slidesList.map(each => {
      if (each.id === currentSlideId) {
        return {
          id: each.id,
          heading: each.heading,
          description: newText,
        }
      }
      return each
    })
    this.setState({slidesList: newSlidesList})
  }

  onClickMiniSlide = id => {
    this.setState({currentSlideId: id})
  }

  renderSlideList = () => {
    let count = 0
    const {slidesList, currentSlideId} = this.state

    return (
      <ol className="slides-ol">
        {slidesList.map(each => {
          count += 1
          return (
            <MiniSlide
              each={each}
              count={count}
              onClickMiniSlide={this.onClickMiniSlide}
              currentSlideId={currentSlideId}
            />

            /* 
            <li className="container-mini-slide">
              <p className="slide-number">{count}</p>
              <div className="mini-slide">
                <h1 className="heading">{each.heading}</h1>
                <p className="description">{each.description}</p>
              </div>
            </li>
            */
          )
        })}
      </ol>
    )
  }

  renderCurrentSlide = () => {
    const {slidesList, currentSlideId} = this.state
    const currentSlide = slidesList.filter(
      each => each.id === currentSlideId,
    )[0]
    console.log(currentSlide)
    const {heading, description} = currentSlide
    return (
      <div className="current-slide">
        <input
          type="text"
          value={heading}
          className="ip1"
          onChange={this.onChangeHeading}
        />
        <input
          type="text"
          value={description}
          className="ip2"
          onChange={this.onChangeDescription}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="main-container">
        <Header />
        <button
          className="custom-button"
          type="button"
          onClick={this.onClickNew}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
            className="plus icon"
          />
          <p className="button-text">New</p>
        </button>
        <div className="slides-and-current-slide">
          {this.renderSlideList()}
          {this.renderCurrentSlide()}
        </div>
      </div>
    )
  }
}
export default Home
