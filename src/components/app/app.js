import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from "../error-boundary";

import './app.css';
// import Row from '../row';
// import ItemDetails, {Record} from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';

import { SwapiServiceProvider } from '../swapi-service-context';

import { PersonDetails,
        PlanetDetails,
        StarshipDetails,
        PersonList,
        PlanetList,
        StarshipList } from '../sw-components';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;
    
    // const { getPerson, getStarship, getPersonImage, getStarshipImage, getAllPeople, getAllPlanets } = this.swapiService;
    
  //  const personDetails = (
  //    <ItemDetails
  //      itemId={11}
  //      getData={getPerson}
  //      getImageUrl={getPersonImage} >
       
  //       <Record field='gender' label='Gender' />
  //       <Record field='eyeColor' label='Eye Color' />
  //      </ItemDetails>
  //   )
  //   const starshipDetails = (
  //     <ItemDetails
  //       itemId={5}
  //       getData={getStarship}
  //       getImageUrl={getStarshipImage}>
        
  //       <Record field='model' label='Model' />
  //       <Record field='length' label='Length' />
  //       <Record field='costInCredits' label='Cost' />
  //       </ItemDetails>
  //   )

    return (

      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />
            { planet }

            <div className="row mb2 button-row">
              <button
                className="toggle-planet btn btn-warning btn-lg"
                onClick={this.toggleRandomPlanet}>
                Toggle Random Planet
              </button>
            </div>

            <PersonDetails itemId={11} />
            <PlanetDetails itemId={5} />
            <StarshipDetails itemId={9}/>

            <PersonList/>

            <PlanetList />
            
            <StarshipList/>

          
          </div>
        </SwapiServiceProvider>
        </ErrorBoundry>

    );
  }
}