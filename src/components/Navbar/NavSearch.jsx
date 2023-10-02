import React from 'react'

const NavSearch = () => {
  return (
     <div
     className="page-header__search"
     style={{ marginLeft: "15px" }}
   >
     <form
       className="uk-search uk-search-default uk-width-1-1"
       style={{ position: "relative" }}
     >
       <button
         className="uk-search-icon-flip"
         data-uk-search-icon
         style={{ position: "absolute", right: "220px" }}
       ></button>
       <input
         className="uk-input uk-search-input"
         type="search"
         placeholder="جستجو"
       />
     </form>
   </div>
  )
}

export default NavSearch