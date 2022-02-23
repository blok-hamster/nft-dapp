import React from 'react'
import CollectionCard from './CollectionCard'
import './MutantList.css'

const MutantList = ({mutantListData, setSelectedMutant}) => {
  return (
    <div className='mutantList'>
        {mutantListData.map(mutant => (
            <div onClick={() => setSelectedMutant(mutant.token_id)}>
                <CollectionCard
                key={mutant.token_id}
                id={mutant.token_id}
                name={mutant.name}
                traits={mutant.traits}
                image={mutant.image_original_url}
                />
            </div>
        ))}
    </div>
  )
}

export default MutantList