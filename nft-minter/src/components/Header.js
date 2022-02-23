 import React from 'react'
 import './Header.css'
 import blockstreetLogo from '../assets/header/blockstreet-logo.png'
 import searchIcon from '../assets/header/search.png'
 import ThemeSwitchLogo from '../assets/header/theme-switch.png'
 
 const Header = () => {
   return (
     <div className='header'>
         <div className='logoContainer'>
             <img src={blockstreetLogo} className='blockstreetLogo' alt='' />
         </div>

         <div className='searchBar'>
           <div className='searchIconContainer'>
             <img src={searchIcon} alt='' />
           </div>
           <input className='searchInput' placeholder='Collection, item or user ...'
           />
         </div>

         <div className='headerItems'>
           <p>Drops</p>
           <p>Marketplace</p>
           <p>Create</p>
         </div>

         <div className='headerActions'>
           <div className='themeSwitchContainer'>
             <img src={ThemeSwitchLogo} className='ThemeSwitchLogo' alt='' />
           </div>
         </div>

        <div className='loginButton'>Connect Wallet</div>

      </div>
   )
 }
 
 export default Header