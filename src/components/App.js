import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

changePetType = (event) => {
  this.setState({
  filters: {...this.state.filters, type: event.target.value}
  })
}

onFindPetsClick = (event) => {
  let url = `/api/pets`
  if(this.state.filters.type !== 'all'){
    url = `/api/pets?type=${this.state.filters.type}`
  }
  fetch(url)
  .then(resp => resp.json())
  .then(petsArr => {
    this.setState({
      pets: petsArr
    })
  })
}

onAdoptPet = (petId) => {
  let updatedPets =
    this.state.pets.map((pet) => {
    return pet.id  === petId ? {...pet, isAdopted: true} : pet
      })
   this.setState({
    pets: updatedPets
  })
  
}


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters  onChange={this.changePetType}
                onFindPetsClick = {this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser petData={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
