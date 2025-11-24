import React from 'react';
import navbar from './navbar';
import { useCallback } from 'react';
const Pag1 = () => {
    const scrollToScreen2 = useCallback(() => {
        const targetElement = document.getElementById('screen2'); 
        
        if (targetElement) {
            const rect = targetElement.getBoundingClientRect();
            const targetAbsolutePosition = rect.left + window.scrollX;

            window.scrollTo({
                left: targetAbsolutePosition,
                behavior: 'smooth'
            });
        }
    }, []); 

const scrollToScreen3 = useCallback(() => {
        const targetElement = document.getElementById('screen3'); 
        
        if (targetElement) {
            const rect = targetElement.getBoundingClientRect();
            const targetAbsolutePosition = rect.left + window.scrollX;

            window.scrollTo({
                left: targetAbsolutePosition,
                behavior: 'smooth'
            });
        }
    }, []); 
    const scrollToScreen4 = useCallback(() => {
        const targetElement = document.getElementById('screen4'); 
        
        if (targetElement) {
            const rect = targetElement.getBoundingClientRect();
            const targetAbsolutePosition = rect.left + window.scrollX;

            window.scrollTo({
                left: targetAbsolutePosition,
                behavior: 'smooth'
            });
        }
    }, []); 
     const scrollToScreen5 = useCallback(() => {
        const targetElement = document.getElementById('screen5'); 
        
        if (targetElement) {
            const rect = targetElement.getBoundingClientRect();
            const targetAbsolutePosition = rect.left + window.scrollX;

            window.scrollTo({
                left: targetAbsolutePosition,
                behavior: 'smooth'
            });
        }
    }, []); 

    return (
        <div className='pag1-container'>
            <navbar/> {}
            
            <main>
                {}
                <section id="screen1" className="screen">
                    <section id="logosec">
                        {}
                        <img src="/Feu Fighters Logo 1.png" alt="logo" id="logo" />
                    </section>
                    <section id="textbox1">
                        <h1 className="text">Este es Trompita ¿Su misión? Acabar con los incendios que arruinan los bosques</h1>
                    </section>
                    <section id="trompitaYpasto">
                        <img src="/greencircle.png" alt="greencircle" id="greencircle1" className="grass" />
                        <img src="/trompitacorre.png" alt="Trompitacorre" id="trompitacorre1" className="trompita" />
                    </section>
                </section>

                {}
                <section id="screen2" className="screen">
                    <img src="/grass2.png" alt="grass2" id="grass2" className="grass" />
                    <img src="/tromphacha.png" alt="tromhacha" id="tromphacha" className="trompita" />
                    <button id="quienessomosbtn" onClick={scrollToScreen3}></button>
                    <button id="xqhacemosbtn" onClick={scrollToScreen4}></button>
                    <button id="contactanosbtn" onClick={scrollToScreen5}></button>

                </section>

                {}
                <section id="screen3" className="screen">
                    <img src="/grass3.png" alt="grass3" id="grass3" className="grass" />
                    <img src="/quienessomos.png" alt="quienessomos" id="quienessomos" />
                    <section id="textbox2">
                        <h4 className="text">Somos un grupo de 4 unido que actualmente está cursando su ultimo año escolar. Estamos decididos a hacer nuesto aporte a la humanidad y para eso aprovechamos la oportunidad que nos da el colegio para hacer un proyecto de impacto social.</h4>
                        {}
                    </section>
                    <button onClick={scrollToScreen2} className="circular-transporter-btn"></button>
                </section>

                {}
                <section id="screen4" className="screen">
                    <img src="/grass4.png" alt="gras4" id="grass4" className="grass" />
                    <img src="/xqhacemosesto.png" alt="xqhacemosesto" id="xqhacemosesto" />
                    <section id="textbox3">
                        <h5 className="text">Los incendios forestales son mayormente causados por el ser humano...</h5>
                        <h6 className="text">Es por esto que decidimos armar un juego infantil sobre incendios forestales...</h6>
                        {}
                    </section>
                    <button onClick={scrollToScreen2} className="circular-transporter-btn"></button>
                </section>

                {}
                <section id="screen5" className="screen">
                    <img src="/tromplupa.png" alt="tromplupa" id="tromplupa" className="trompita" />
                    <img src="/grass5.png" alt="grass5" id="grass5" className="grass" />
                    {}
                    <button onClick={scrollToScreen2} className="circular-transporter-btn"></button>
                    <img src='/increbete.png' alt='cuadrado' id='square'/>
                    <input
                    type='text'
                    id='userinput'
                    placeholder="Escribe..."
                    className="text"
                    />
                </section>
                
            </main>

            {}
            <footer>
                <div className='messages'>
                  <div id="releasemessages">
                     <h1 className='text'>Estreno de la beta: 29 de Agosto</h1>
                     <h2 className='text'>Estreno oficial: 9 de Diciembre</h2>
                     <h1 className='text'>Estreno de la beta: 29 de Agosto</h1>
                     <h2 className='text'>Estreno oficial: 9 de Diciembre</h2>
                  </div>
                </div>
            </footer>
        </div>
    );
};

export default Pag1;