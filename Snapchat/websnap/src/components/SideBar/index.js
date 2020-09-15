import React, {useState, useEffect} from "react";
import './style.css';
import Card from "../UI/Card";
import blogPost from "../../data/snap.json";
import NavLink from "react-router-dom/NavLink";

const SideBar = (props) => {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    },  [posts]);

    return(
        <div className="sidebarContainer" style={{width: props.width}}>
            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>About</span>
                </div>
                <div className="profileImageContainer">
                    <img src={require('../../assets/PhotoSnap/aurelie.rothepitech.eu.JPG')}/>
                    <img src="https://cdn.discordapp.com/attachments/643474917622546443/717038227474874488/dahaba.yaffaepitech.eu_1.JPG"/>
                    <img src={require('../../assets/PhotoSnap/jonas.flacher@epitech.eu.JPG')}/>
                </div>
                <div className="cardBody">
                    <p className="projetGroupe">Groupe de projet pour le développement de l'application</p>
                    <p className="projetGroupe">Aurélie | Dahaba | Jonas</p>
                </div>
            </Card>

            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
                <div className="network">
                    <img className="iconGit" src="https://github.githubassets.com/images/modules/open_graph/github-mark.png"/>
                    <img className="iconFb" src="https://www.facebook.com/images/fb_icon_325x325.png"/>
                    <img className="iconSnap" src="data:image/png;base64,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"/>
                    <img className="iconEpitech" src="https://www.mes-etudes.com/uploads/media/school_logo/0001/04/thumb_3981_school_logo_retina.png"/>
                    <img className="iconInsta" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"/>
                </div>
            </Card>

            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>
                <div className="recentPosts">
                    {
                        posts.map(post => {
                            return(
                                <NavLink style={{textDecoration:'none'}} key={post.id} to={`/post/${post.id}`}>
                                        <div className="recentPost">
                                            <h3>{post.blogTitle}</h3>
                                            <span>{post.postedOn}</span>
                                        </div>
                                </NavLink>
                            );
                        })
                    }
                </div>
            </Card>
        </div>
    );
}
export default SideBar;
