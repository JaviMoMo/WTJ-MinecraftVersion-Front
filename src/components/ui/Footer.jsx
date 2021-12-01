import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    text-align: center;
    box-shadow: 15px 5px 10px rgba(0, 0, 0, 0.479);
    bottom: 100%;
`

const ContactDiv = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

const Card = styled.li`
    background-color: #e5e5e5ff;
    border-radius: 100%;
    &:hover{
        transition: 0.2s;
        transform: scale(110%);
    }
`

const Icon = styled.img`
    display: block;
    margin: auto;
    padding: 10px;
    width: 30px;
`

const Footer = () => {
    return (
        <FooterDiv className="footer-contain">
            <ContactDiv className="contact-contain">
                <Card className="card-contact">
                    <a href="mailto:javimorenomontejo@gmail.com">
                        <Icon src="https://cdn-icons-png.flaticon.com/512/80/80599.png" alt="email" />
                    </a>
                </Card>
                <Card className="card-contact">
                    <a href="tel:+34616938533">
                        <Icon src="https://cdn-icons-png.flaticon.com/512/159/159052.png" alt="phone" />
                    </a>
                </Card>
                <Card className="card-contact">
                    <a href="https://www.linkedin.com/in/javier-moreno-montejo-9a1442185/">
                        <Icon src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="linkedin" />
                    </a>
                </Card>
                <Card className="card-contact">
                    <a href="https://github.com/javike19">
                        <Icon src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="github" />
                    </a>
                </Card>
            </ContactDiv>
            <div className="footer-text">
                <p>© 2021 - <b>Javier Moreno Montejo</b></p>
            </div>
            
        </FooterDiv>
    )
}

export default Footer
