import React,{useState} from 'react';
import "./style.css";
import Menu from "./menuapi.js";
import Menucard from "./menucard.js"
import Navbar from "./navbar"

const uniqeList = [...new Set(Menu.map((curElem) => {
    return curElem.category;
})
),"All"
];
const Resturant = () =>{
    const [Data, SetData] = useState(Menu);
    // eslint-disable-next-line
    const [menuList, SetmenuList] = useState(uniqeList);

    const filterItem = (category) =>{
    if (category ==="All"){
        SetData(Menu);
        return;
    }
     const updatedList = Menu.filter((curElem) => {
     return curElem.category === category;
     });
     SetData(updatedList);
     };
    return(
        <>
        <div className='text-center'>
        <Navbar filterItem={filterItem} menuList={menuList}/>
        </div>
        <Menucard Data = {Data}/>
        </>
    )
    
};

export default Resturant;