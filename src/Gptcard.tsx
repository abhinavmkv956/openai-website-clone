import React, { FC } from 'react';
import Card from 'react-bootstrap/Card';
import './Gptcard.css';

interface GptcardProps {
    
    cardhead: string,
    cardsubject: string
    src: string

}

const Gptcard: FC<GptcardProps> = ({cardhead, cardsubject, src }) => {
    return (
        <>

       

            <Card className='card  ' style={{ width: '350px', backgroundImage: `url(${src})`,height:'450px' }}>
                <Card.Body >
                    <Card.Title className='W' style={{color:'white',fontSize:'12px'}}>{cardhead}</Card.Title>
                    <Card.Text className='y'>
                        {cardsubject}
                    </Card.Text>
                </Card.Body>
            </Card>


        </>
    );
};

export default Gptcard;