import React from "react";
import Card from "../../../components/UI/Card";
import './style.css';

const RecentPost = (props) => {
    return(
        <div style={props.style}>
            <Card style={{marginBottom: '20x'}}>
                <div className="PostImageWrapper">
                    <img src={require('../../../assets/PhotoSnap/3e472498-f16a-45ab-8995-10e3046df4a8.jpeg')}/>
                </div>
                <div style={{textAlign:'center', paddingBottom:'20px'}}>
                    <span>Featured</span>
                    <h2>Histoire Du Développment De L'application Et Son Utilité</h2>
                    <span className="date">Poster 4 Juin 2020 par Aurélie | Dahaba | Kamel | Jonas</span>
                    <p>Ce post raconte l'aventure du développement de l'application ainsi que son utilité. Nous avons développé cette application via plusieurs technologies tels que Android Studio en React-Native. Celà nous a prit 10 jours. En terme d'organistion nous avons utilisé Trello et les gitBranch. Nous avons fait des points tous les jours sur une heure donnée. L'après midi à 15h. En terme d'utilisation Snapchat est une application seravnt à s'envoyer des photos ou pouvoir échanger avec ses amis sans que la photo puisse rester dans la base de donnée. Elle est détruite à partir d'un temps échéant, pouvant aller de l'infini à 15 secondes</p>
                </div>
            </Card>
            <Card style={{marginBottom: '20px'}}>
                <div className="PostImageWrapper">
                    <img src={require('../../../assets/PhotoSnap/guide-snapchat.jpg')}/>
                </div>
                <div style={{textAlign:'center', paddingBottom:'20px'}}>
                    <span>Tutoriel</span>
                    <h2>Tutoriel et Utilisation</h2>
                    <span className="date">Poster 4 Juin 2020 par Aurélie | Dahaba | Kamel | Jonas</span>
                    <p>Tout d'abord, vous devez vous inscrire sur notre site web ou alors directement sur l'application. Une fois enregistré vous allez devoir vous connecter avec vos identifiants. Vous pourrez donc utilisé directement les différentes fonctionnalités en swipant soit vers la gauche soit vers la droite. A droite vous aurez donc les amis pour envoyer les messages privés tout en les ajoutant. A gauche le mode photo qui servira pour envoyer du texte ou alors des photos instantanées.</p>
                </div>
            </Card>
            <Card style={{marginBottom: '20px'}}>
                <div className="PostImageWrapper">
                    <img src={require('../../../assets/PhotoSnap/images.jpeg')}/>
                </div>
                <div style={{textAlign:'center', paddingBottom:'20px'}}>
                    <span>Simple</span>
                    <h2>Aperçu du développement Apli</h2>
                    <span className="date">Poster 4 Juin 2020 par Aurélie | Dahaba | Kamel | Jonas</span>
                    <p>Un petit apperçu de l'application</p>
                </div>
            </Card>
            <Card style={{marginBottom: '20px'}}>
                <div className="PostImageWrapper">
                    <img src={require('../../../assets/PhotoSnap/snap2.jpeg')}/>
                </div>
                <div style={{textAlign:'center', paddingBottom:'20px'}}>
                    <span>Simple</span>
                    <h2>Projet</h2>
                    <span className="date">Poster 4 Juin 2020 par Aurélie | Dahaba | Kamel | Jonas</span>
                    <p>En conclusion notre projet à été mené à bien avec plusieurs difficultés. Nous avons du effacer pour recommencer. Nous avons perdu du temps sur les bon critères à réaliser pendant le temps donné. Nous avons utiliser React-Native pour l'applcation. Nous avons utilisé ReactJs pour le site web. Ce projet à été développé en groupe et chacun d'entre nous y a mit de la bonne volonté et de la motivation pour réussir.</p>
                </div>
            </Card>
        </div>
    )
}

export default RecentPost;