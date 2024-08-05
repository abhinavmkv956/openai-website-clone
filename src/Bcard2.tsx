import React, { FC } from 'react';
import Bcard from './Bcard';

interface Bcard2Props {
   
}

const Bcard2: FC<Bcard2Props> = ({}) => {
    const BcardData =[
        {
            bhead:'rtyuio',
            bfooter:'dfgthyjk',
            bsrc:'https://images.ctfassets.net/kftzwdyauwt9/4GpxGw3u2hE7ddRkB2UeaV/258a18765772a24eb2175c289418538e/Home___Card_Carousel___Stories___Lifespan.jpg?w=640&q=90&fm=webp'
        },
        {
            bhead:'rtyuio',
            bfooter:'dfgthyjk',
            bsrc:'https://images.ctfassets.net/kftzwdyauwt9/6ZbVhkbEtaf3T3zZi7XpML/4deeafb1917e49741e3e891eff986327/moderna.png?w=1080&q=90&fm=webp'
        },
        {
            bhead:'rtyuio',
            bfooter:'dfgthyjk',
            bsrc:'https://images.ctfassets.net/kftzwdyauwt9/e7e3dcf5-15d9-458e-be5a57df61eb/75ac3b254116f1ebe3fe66131573c96d/government_of_iceland.png?w=1080&q=90&fm=webp'
        },
        {
            bhead:'rtyuio',
            bfooter:'dfgthyjk',
            bsrc:'https://images.ctfassets.net/kftzwdyauwt9/3K89c1c2FWByO2awUBNzgP/e5e6974e5338e66a4e187a4895c8d937/Home___Card_Carousel___Stories___Harvey.jpg?w=1080&q=90&fm=webp'
        },
       
    ];
  return (
    <>

<div className='main'>
                
                <div className='container'>
                {BcardData.map((bcard, index) => (
                    <Bcard key={index} bhead={bcard.bhead} bfooter={bcard.bfooter} bsrc={bcard.bsrc}  />
                ))}
                </div>
            </div>

      
    </>
  );
};

export default Bcard2;