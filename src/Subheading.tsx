import React, { FC } from 'react';
import './Subheading.css'

interface SubheadProps {
    head:string
  
}

const Subhead: FC<SubheadProps> = ({head}) => {
  return (
    <>
    <h3 className='subh'>{head}</h3>

      
    </>
  );
};

export default Subhead;