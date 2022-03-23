import React from 'react'

const Navbar = ({filterItem, menuList}) => {
    return (
        <>
         
        <nav className="navbar-1">
        
        <div className="btn-group-1">
        {menuList.map((curElem)=>{
        return(
            <>
        <button className="btn-group__item-1" onClick={() => filterItem(curElem)}>{curElem}</button>
        </>
        )
        })}
        </div>        
        </nav>
         
        </>
    )
}

export default Navbar;