import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import axios from 'axios'
import MutantList from './components/MutantList';
import Main from './components/Main';


function App() {

  const [mutantListData, setMutantListData] = useState([])
  const [selectedMutant, setSelectedMutant] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x4E9497121BEc33D6Dcf8bA9a8950495fc9DBFcb7&order_direction=asc')
      console.log(openseaData.data.assets)
      setMutantListData(openseaData.data.assets)
    }

    return getMyNfts()
  }, [])

  return (
    <div className='app'>
      <Header />
      {mutantListData.length > 0 && (
         <>
         <Main mutantListData={mutantListData} selectedMutant={selectedMutant} />
         <MutantList mutantListData={mutantListData}
          setSelectedMutant={setSelectedMutant} />
          </>
          )
      }
     
    </div>
  );
}

export default App;
