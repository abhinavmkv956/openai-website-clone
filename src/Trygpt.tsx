import React, { FC } from 'react';
import './Trygpt.css';
import { Button } from 'react-bootstrap';
import { GoArrowUpRight } from "react-icons/go";


interface TrygptProps {
  
}

const Trygpt: FC<TrygptProps> = ({}) => {
  return (
    <>
    <div className='Trymain'>
        <div className='Trydiv'> <h1>Instant answers. Greater<br></br> productivity. Endless inspiration.</h1>
        <Button style={{backgroundColor:'black',borderRadius:'50px',marginTop:'10px'}}  >Try ChatGPT <GoArrowUpRight /></Button></div>
        

       

    </div>
      
    </>
  );
};

export default Trygpt;