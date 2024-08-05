import React, { FC } from 'react';
import card from './Gptcard'
import Gptcard from './Gptcard';
import './Researchcard.css';


interface ResearchcardProps {

}

const Gptcard2: FC<ResearchcardProps> = ({ }) => {
    const cardData = [
        {
            cardhead: 'card1',
            cardsubject: 'sub2',
            src: 'https://images.ctfassets.net/kftzwdyauwt9/3vA8jsIso6CRsO8296SxLi/f120c0f762cfa4614ff87de2ade85e0e/gpt-4o-mini_card_image-updated.png?w=1080&q=90&fm=webp'
        },
        {
            cardhead: 'card2',
            cardsubject: 'sub2',
            src: 'https://images.ctfassets.net/kftzwdyauwt9/6Viz8iK1yGb6sLmiAGSI7T/49da64d0369f457d3c022c0a0b17ba71/DALL_E_2024-04-06_16.58_4.png?w=1080&q=90&fm=webp'
        },
        {
            cardhead: 'card2',
            cardsubject: 'sub2',
            src: 'https://images.ctfassets.net/kftzwdyauwt9/6NQjnJSOqEbjpPOrdaQD8z/d6f19d55e190ccf81e5d5db513425cf3/legibility_blog_card.png?w=1080&q=90&fm=webp'
        },
        {
            cardhead: 'card2',
            cardsubject: 'sub2',
            src: 'https://images.ctfassets.net/kftzwdyauwt9/51cvGC9YL1Fy2Iflb3KkDb/a8a9db1572e0bb7009f09a9b39aeafe9/GPT-4o-Video_Card.png?w=1080&q=90&fm=webp'
        },
        {
            cardhead: 'card2',
            cardsubject: 'sub2',
            src: 'https://images.ctfassets.net/kftzwdyauwt9/dfdeca52-d054-4ce9-18d684209ff9/f3a2e6e71ebefb70fca386ff7bbb9d92/practices-for-governing-agentic-ai-systems.jpg?w=1080&q=90&fm=webp'
        },
       
    


    ];
    return (
        <>
            <div className='main'>
                
                <div className='container'>
                {cardData.map((card, index) => (
                    <Gptcard key={index} cardhead={card.cardhead} cardsubject={card.cardsubject} src={card.src}  />
                ))}
                </div>
            </div>

        </>
    );
};

export default Gptcard2;