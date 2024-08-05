import React, { FC } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carou.css'; // Import the custom CSS file
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


interface CarouProps {}

const Carou: FC<CarouProps> = ({}) => {
  return (
    <Carousel interval={null} className='car' data-bs-theme="white">
    <Carousel.Item className='items'>
      <img
        className="d-block    "
        src="//images.ctfassets.net/kftzwdyauwt9/2Wet7rkEt83TBP19pRaoSU/c227e5b5949a5931c343eeb70e4bd99f/Mac_App_Hero_V1.png?w=3840&q=90&fm=webp"
        alt="First slide"
      />
      <Carousel.Caption >
        <div className='carDiv'> <h1 className='carh1'>ChatGPT on your desktop</h1>
        <p className='carp'>Chat about email, screenshots, files, and anything on your screen.</p>
        <Button  variant="light">Learn more</Button>{' '}</div>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='items'>
      <div
        className="d-block car2Div" >
        
     
      <Carousel.Caption >
      <div className='carDiv'> <h1 className='carh1'>Ask ChatGPT anything</h1>
      <div className='input'>
      <InputGroup className=" mb-3 ">
        <Form.Control
       
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2" 
        />
        <Button className='bg-light' variant="outline-secondary" id="button-addon2">
        <i className="fa-solid fa-arrow-right"></i>
        </Button>
      </InputGroup>
      </div>
</div>
      </Carousel.Caption>
      </div>
    </Carousel.Item>
    <Carousel.Item className='items'>
      <img
        className="d-block "
        src="//images.ctfassets.net/kftzwdyauwt9/4HGPvb9dhHOzl8BVIah0ZG/af1d09bade2e153599c6c7d7c04bc33c/apple-art-2a-2x1.jpg?w=3840&q=90&fm=webp"
        alt="Third slide"
      />
      <Carousel.Caption>
      <div className='carDiv'> <h1 className='carh1'>Apple & ChatGPT</h1>
      <p className='carp'>OpenAI and Apple announce partnership to integrate ChatGPT into Apple experiances</p>
      <Button  variant="light">Learn more</Button>{' '}
     
       </div>
      </Carousel.Caption>
    </Carousel.Item>

    
  </Carousel>
   
    
  );
};

export default Carou;
