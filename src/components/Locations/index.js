import React from 'react'
import Icon1 from '../../images/ukiah.jpg'
import Icon2 from '../../images/redwoodvalley.jpg'
import Icon3 from '../../images/willits.jpg'
import { LocationsContainer, LocationsH1, LocationsIcon, LocationsH2, LocationsP, LocationsWrapper, LocationsCard } from './LocationsElements'

const Locations = () => {
  return (
    <LocationsContainer id="locations">
        <LocationsH1>Our Locations</LocationsH1>
        <LocationsWrapper>
            <LocationsCard onClick={() => window.location.href = '/Ukiah'}>
                <LocationsIcon src={Icon1} />
                <LocationsH2>Ukiah</LocationsH2>
                <LocationsP>720 N. State St, Ukiah CA</LocationsP>
                <LocationsP>707-463-1000</LocationsP>
            </LocationsCard>
            <LocationsCard>
                <LocationsIcon src={Icon2} />
                <LocationsH2>Redwood Valley</LocationsH2>
                <LocationsP>6951 East Road, Redwood Valley CA</LocationsP>
                <LocationsP>707-485-4686</LocationsP>
            </LocationsCard>
            <LocationsCard>
                <LocationsIcon src={Icon3} />
                <LocationsH2>Willits</LocationsH2>
                <LocationsP>1708 S. Main St, Willits CA</LocationsP>
                <LocationsP>707-459-6811</LocationsP>
            </LocationsCard>
        </LocationsWrapper>
    </LocationsContainer>
  )
}

export default Locations