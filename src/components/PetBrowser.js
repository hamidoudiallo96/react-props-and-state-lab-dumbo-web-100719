import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  showAllPets =()=>{
    return this.props.petData.map(pet =>{
      
      return <Pet
        id =  {pet.id}
        type= {pet.type}
        gender= {pet.gender}
        age= {pet.age}
        weight= {pet.weight}
        name= {pet.name}
        isAdopted={pet.isAdopted}
        onAdoptPet={this.props.onAdoptPet}
       />
    })
  }

  render() {
    return <div className="ui cards">{this.showAllPets()}</div>
  }
}

export default PetBrowser
