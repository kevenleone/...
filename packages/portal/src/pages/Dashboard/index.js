import { ClayCardWithNavigation } from '@clayui/card'
import ClayIcon from '@clayui/icon'
import React from 'react'

import Banner from '../../assets/welcome_bg.jpg'

const Welcome = ({ history }) => {
  return (
    <div className='m-4'>
      <img className='banner' src={Banner} alt="Logo"></img>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col'>
            <ClayCardWithNavigation
              title="Fun Retro"
              description="Click here, to manage your retrospective planning!"
              onClick={() => history.push('/retro')}
            >
              <ClayIcon symbol="page-template" />
            </ClayCardWithNavigation>
          </div>
          <div className='col'>
            <ClayCardWithNavigation
              title="Poker Planning"
              description="xD"
              onClick={() => history.push('/poker')}
            >
              <ClayIcon symbol="page-template" />
            </ClayCardWithNavigation>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
