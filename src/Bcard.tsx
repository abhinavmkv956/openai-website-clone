import React, { FC } from 'react';
import './Bcard.css'; 
import Card from 'react-bootstrap/Card';

interface BcardProps {
    bhead:string,
    bfooter:string,
    bsrc:string

  
}

const Bcard: FC<BcardProps> = ({bhead,bfooter,bsrc}) => {
  return (
    <>

<Card className='Bcard ' style={{ backgroundImage: `url(${bsrc})`,height:'450px' }}>
        <Card.Body  >
                    <Card.Title >{bhead}</Card.Title>
                    <Card.Text >{bfooter}
                       
                    </Card.Text>
                </Card.Body>
            </Card>
      
    </>
  );
};

export default Bcard;