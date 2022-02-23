import React, { useEffect, useState } from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = ({ selectedMutant, mutantListData}) => {

    const [activeMutant, setActiveMutant] = useState(mutantListData[0])
    useEffect(() => {
        setActiveMutant(mutantListData[selectedMutant])
    }, [mutantListData, selectedMutant, setActiveMutant])
  
    return (
    <div className='main'>
        <div className='mainContent'>
            <div className='mutantHighlight'>
                <div className='mutantContainer'>
                    <img className='selectedMutant'
                    src={'https://gateway.pinata.cloud/ipfs/QmVa52xJPji7ArmbEViv7uMuKDorEStBs5Nq1QjtABwxbk/5.png'}
                    alt='' />
                </div>
            </div>

            <div className='MutantDetails' style={{ color: '#fff' }}>
                <div className='title'>
                    {activeMutant.name}
                </div>
                <span className='itemNumber'>#{activeMutant.token_id}</span>
            </div>

            <div className='owner'>
                <div className='ownerImageContainer'>
                    <img src={activeMutant.owner.profile_img_url} alt='' />
                </div>

                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div>{activeMutant.owner.address}</div>
                        <div className='ownerHandle'>@blockstreetlabs</div>
                    </div>
                    <div className='ownerLink'>
                        <img src={instagramLogo} alt='' />
                    </div>

                    <div className='ownerLink'>
                        <img src={twitterLogo} alt='' />
                    </div>

                    <div className='ownerLink'>
                        <img src={moreIcon} alt='' />
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Main