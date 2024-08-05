import React, { FC } from 'react';


import './Gptcard2.css';
import Gptcard from './Gptcard';


interface Gptcard2Props {

}

const Gptcard2: FC<Gptcard2Props> = ({ }) => {
    const cardData = [
        {
            cardhead: 'For Everyone',
            cardsubject: 'Let Your imagination run wild',
            src: 'https://images.ctfassets.net/kftzwdyauwt9/1ZTOGp7opuUflFmI2CsATh/df5da4be74f62c70d35e2f5518bf2660/ChatGPT_Carousel1.png?w=640&q=90&fm=webp'
        },
        {
            cardhead: 'For Teams',
            cardsubject: 'A superassistant for every member of your team',
            src: 'https://images.ctfassets.net/kftzwdyauwt9/4uMG8AuQre4G4zXy6jLIpk/a393d8838bff23a44a22db247954da7e/updated_team-1.png?w=640&q=90&fm=webp'
        },
        {
            cardhead: 'For Enterprises',
            cardsubject: 'Empower you entire workforce with enterprice-grade AI',
            src: 'https://images.ctfassets.net/kftzwdyauwt9/3XDJfuQZLCKWAIOleFIFZn/14b93d23652347ee7706eca921e3a716/enterprise.png?w=1080&q=90&fm=webp'
        },
        {
            cardhead: 'SearchGPT Prototype',
            cardsubject: 'SearchGPT is a prototype of new AI search features',
            src: 'https://images.ctfassets.net/kftzwdyauwt9/1Z0M6ufSdYcPF5A81sC4fU/47939ee3603d1a1013425d8cdd4ef63a/SearchGPT_Card_Asset.png?w=1080&q=90&fm=webp'
        },
        {
            cardhead: 'ChatGPT on your desktop',
            cardsubject: 'Chat about email,screenshots,files, and anything on your screen',
            src: 'https://images.ctfassets.net/kftzwdyauwt9/5lNQzWhib9JZvKJognmB70/01092aa3e849f428bd1d5579c7c7c53b/Mac_App_Card.png?w=1080&q=90&fm=webp'
        },
        {
            cardhead: 'card1',
            cardsubject: 'sub2',
            src: 'https://images.ctfassets.net/kftzwdyauwt9/IPgFYDUMeUtWcg2ze2IsP/118ea87d54734ef3f49b432ee2a35b56/DALL_E_2024-07-17_16.25.57_-_Close-up_of_soft_pink_flower_petals_with_a_gentle_motion_blur_on_a_light_lavender_background__c.png?w=1080&q=90&fm=webp'
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