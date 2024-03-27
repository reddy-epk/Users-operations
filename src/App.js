import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const intialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {
    searchtext: '',
    usersDatailsList: intialUserDetailsList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchtext: event.target.value,
    })
  }

  onDeleteUser = uniqueNo => {
    const {usersDatailsList} = this.state
    const filteredList = usersDatailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({usersDatailsList: filteredList})
  }

  render() {
    const {searchtext, usersDatailsList} = this.state
    const searchedResult = usersDatailsList.filter(each =>
      each.name.includes(searchtext),
    )

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchtext}
        />
        <ul className="list-container">
          {searchedResult.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              delaware={this.onDeleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
