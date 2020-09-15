import React from 'react';
import './style.css';
import Card from "../../components/UI/Card";

const About = (props) => {
    return (
        <div className="psidebarContainer" style={{width: props.width}}>
            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box', marginTop:'20px'}}>
                <div className="pcardHeader">
                    <span>About</span>
                </div>
                <div className="pprofileImageContainer">
                    <img src={require('../../assets/PhotoSnap/aurelie.rothepitech.eu.JPG')}/>
                    <img src="https://cdn.discordapp.com/attachments/643474917622546443/717038227474874488/dahaba.yaffaepitech.eu_1.JPG"/>
                    <img src={require('../../assets/PhotoSnap/jonas.flacher@epitech.eu.JPG')}/>
                </div>
                <div className="pcardBody">
                    <p className="pprojetGroup">Groupe de projet pour le développement de l'application</p>
                    <p className="pprojetGroup">Aurélie | Dahaba | Jonas | Kamel</p>
                </div>
            </Card>
            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box', marginTop:'20px', marginLeft:'20px'}}>
            <div className="pcardHeader">
                <span>Contact</span>
            </div>
            <div className="pcardBody">
                <p className="pprojetGroupe">Nous sommes en première année de Développement Web à la W@C dans l'enceinte de l'école Epitech à Lyon</p>
                <p className="pprojetGroupe">Vous pouvez nous contacter via nos réseaux sociaux ou directement par l'intermédiaire de notre école</p>
                <p className="pprojetGroupe">Rejoignez notre équipe d'étudiant sur le site <a href="https://www.epitech.eu/fr/ecole-informatique-lyon/">Epitech</a></p>
            </div>
        </Card>
        </div>
    );
};

export default About;