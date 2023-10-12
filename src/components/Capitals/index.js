import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    activeId: countryAndCapitalsList[0].id,
  }

  onchange1 = event => {
    this.setState({
      activeId: event.target.value,
    })
  }

  getCountry = () => {
    const {activeId} = this.state
    const list2 = countryAndCapitalsList.find(each => each.id === activeId)
    return list2.country
  }

  render() {
    const {activeId} = this.state
    console.log(activeId)

    const country = this.getCountry(activeId)

    return (
      <div className="bgContainer">
        <div className="bgContainer1">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="con1">
            <select onChange={this.onchange1} value={activeId}>
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is Capital of which Country?</p>
          </div>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
