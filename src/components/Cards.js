import React, { useState } from 'react';
import './Cards.css';
import CardItem from './Carditem';
import Modal from 'react-modal'
import { Button } from './Button';

Modal.setAppElement('#root')

function Cards() {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [modal4, setModal4] = useState(false)
  const [modal5, setModal5] = useState(false)

  const customStyles = {
    content: {
      top: '150px',
      bottom: '120px',
      right: '100px',
      left: '100px',
      zIndex: -1,
      border:0
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.80)'
    }
  };


  return (
    <div className='cards' id='cards'>
      <h1>PROJECT PORTFOLIO</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/chat.PNG'
              text='Live Chat App (real time chat)'
              label='React | Redux / Node / MongoDB / Express / Socket io / Antd'
              onClick={() => setModal1(!modal1)}
            />
            <Modal isOpen={modal1} style={customStyles} onRequestClose={() => setModal1(false)}>
              <div className='right-content'>
                <p className='close' onClick={() => setModal1(false)}><i className="fas fa-times"></i></p>
                <br />
                <br/>
                <br/>
                <br/>
                <h1>Live Chat App</h1>
                <br/>
                <h4 className='stack'>React | Redux / Node / MongoDB / Express / Socketio / Antd</h4>
                <br className='br'/>
                <br className='br'/>
                <p className='description'>Real time chat, images, videos, auth </p>
                <br className='br'/>
                <br className='br'/>
                <div className='card-btn'>
                  <a className='btn-modal' target='_blank' rel='noopener noreferrer' href='https://github.com/rodrigomart1nez/LiveChat'>  
                    <Button
                      className='btns' 
                      buttonStyle='btn--outline2' 
                      buttonSize='btn--large'
                    >
                      Source Code <i className="fab fa-github"></i>
                    </Button>
                  </a>
                  <a className='btn-modal' target='_blank' rel='noopener noreferrer' href='https://gentle-mountain-82880.herokuapp.com'>  
                    <Button
                      className='btns'
                      buttonStyle='btn--primary2'
                      buttonSize='btn--large'
                    >
                      Deployed
                    </Button>
                  </a>
                </div>
              </div>
              <div>
                <video className='vi' src='videos/chat.mp4' autoPlay loop muted />
              </div>
            </Modal>
            <CardItem
              src='images/boats2.PNG'
              text='BoatAhoy (boat rental)'
              label='JavaScript / Node | Express / MongoDB / Bootstrap'
              onClick={() => setModal2(!modal2)}
            />
            <Modal isOpen={modal2} style={customStyles} onRequestClose={() => setModal2(false)}>
              <div className='right-content'>
                <p className='close' onClick={() => setModal2(false)}><i className="fas fa-times"></i></p>
                <br />
                <br/>
                <br/>
                <br/>
                <h1>BoatAhoy</h1>
                <br/>
                <h4 className='stack'>JavaScript / Node | Express / MongoDB / Bootstrap</h4>
                <br className='br'/>
                <br className='br'/>
                <p className='description'>Rent a boat by hour, comments, auth </p>
                <br className='br'/>
                <br className='br'/>
                <div className='card-btn'>
                  <a className='btn-modal' target='_blank' rel='noopener noreferrer' href='https://github.com/rodrigomart1nez/BoatAhoy'>  
                    <Button
                      className='btns' 
                      buttonStyle='btn--outline2' 
                      buttonSize='btn--large'
                    >
                      Source Code <i className="fab fa-github"></i>
                    </Button>
                  </a>
                  <a className='btn-modal' target='_blank' rel='noopener noreferrer' href='https://shrouded-caverns-24574.herokuapp.com'>  
                    <Button
                      className='btns'
                      buttonStyle='btn--primary2'
                      buttonSize='btn--large'
                    >
                      Deployed
                    </Button>
                  </a>
                </div>
              </div>
              <div>
                <video className='vi' src='videos/boats.mp4' autoPlay loop muted />
              </div>
            </Modal>
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/capture.PNG'
              text='LIVY (live streams)'
              label='React | Redux / Node / JSONserver / SemanticUI'
              onClick={() => setModal3(!modal3)}
            />
            <Modal isOpen={modal3} style={customStyles} onRequestClose={() => setModal3(false)}>
              <div className='right-content'>
                <p className='close' onClick={() => setModal3(false)}><i className="fas fa-times"></i></p>
                <br />
                <br/>
                <br/>
                <br/>
                <h1>LIVY</h1>
                <br/>
                <h4 className='stack'>React | Redux / Node / JSONserver / SemanticUI</h4>
                <br className='br'/>
                <br className='br'/>
                <p className='description'>Live stream your screen or webcam with OBS studio installed (optional)</p>
                <br className='br'/>
                <br className='br'/>
                <div className='card-btn'>
                  <a className='btn-modal' target='_blank' rel='noopener noreferrer' href='https://github.com/rodrigomart1nez/LIVY'>  
                    <Button
                      className='btns' 
                      buttonStyle='btn--outline2' 
                      buttonSize='btn--large'
                    >
                      Source Code <i className="fab fa-github"></i>
                    </Button>
                  </a>
                </div>
              </div>
              <div>
                <video className='vi' src='videos/livy.mp4' autoPlay loop muted />
              </div>
            </Modal>
            <CardItem
              src='images/pos3.PNG'
              text='Easy POS (point of sale)'
              label='React | Redux / Node / JSONserver'
              onClick={() => setModal4(!modal4)}
            />
            <Modal isOpen={modal4} style={customStyles} onRequestClose={() => setModal4(false)}>
              <div className='right-content'>
                <p className='close' onClick={() => setModal4(false)}><i className="fas fa-times"></i></p>
                <br />
                <br/>
                <br/>
                <br/>
                <h1>Easy POS</h1>
                <br/>
                <h4 className='stack'>React | Redux / Node / JSONserver / Semantic UI</h4>
                <br className='br'/>
                <br className='br'/>
                <p className='description'>Generate custom recipts and manage your inventory with an automated point of sale </p>
                <br className='br'/>
                <br className='br'/>
                <div className='card-btn'>
                  <a className='btn-modal' target='_blank' rel='noopener noreferrer' href='https://github.com/rodrigomart1nez/LiveChat'>  
                    <Button
                      className='btns' 
                      buttonStyle='btn--outline2' 
                      buttonSize='btn--large'
                    >
                      Source Code <i className="fab fa-github"></i>
                    </Button>
                  </a>
                </div>
              </div>
              <div>
                <video className='vi' src='videos/pos.mp4' autoPlay loop muted />
              </div>
            </Modal>
            <CardItem
              src='images/compin.PNG'
              text='Compin (compound interest calculator)'
              label='React / D3js / Node / Component UI'
              onClick={() => setModal5(!modal5)}
            />
            <Modal isOpen={modal5} style={customStyles} onRequestClose={() => setModal5(false)}>
              <div className='right-content'>
                <p className='close' onClick={() => setModal5(false)}><i className="fas fa-times"></i></p>
                <br />
                <br/>
                <br/>
                <br/>
                <h1>Compin</h1>
                <br/>
                <h4 className='stack'>React / D3js / Node / Component UI</h4>
                <br className='br'/>
                <br className='br'/>
                <p className='description'>Calculate your earning with profit reinvestment, making it compound interest </p>
                <br className='br'/>
                <br className='br'/>
                <div className='card-btn'>
                  <a className='btn-modal' target='_blank' rel='noopener noreferrer' href='https://github.com/rodrigomart1nez/Compin'>  
                    <Button
                      className='btns' 
                      buttonStyle='btn--outline2' 
                      buttonSize='btn--large'
                    >
                      Source Code <i className="fab fa-github"></i>
                    </Button>
                  </a>
                  <a className='btn-modal' target='_blank' rel='noopener noreferrer' href='https://affectionate-curie-a71392.netlify.app'>  
                    <Button
                      className='btns'
                      buttonStyle='btn--primary2'
                      buttonSize='btn--large'
                    >
                      Deployed
                    </Button>
                  </a>
                </div>
              </div>
              <div>
                <video className='vi' src='videos/compin.mp4' autoPlay loop muted />
              </div>
            </Modal>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
