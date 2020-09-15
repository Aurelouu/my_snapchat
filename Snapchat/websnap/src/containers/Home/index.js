import React from "react";
import './style.css';
import Card from "../../components/UI/Card";
import RecentPost from "./RecentPosts";
import blogData from '../../data/snap.json';
import Layout from "../../components/Layout";

const SideImage = props =>{
    return(
        <div style={{height: `${props.height}px`}}>
            <img className="photoPost" src={props.src} alt="Photo Post"/>
        </div>
    );
}

const ImageGallery = props => (<div className="galleryPost" style={props.galleryStyle}>

    <section style={{width:'70%'}}>
        <div className="photoPost">
            <img src={require('../../assets/PhotoSnap/' + props.imageArray[1])} alt="Photo Snap" />
        </div>
    </section>
    <section className="sideImageWrapper" style={{width:'30%'}}>
        <SideImage
            height={props.sideImageHeight}
            src={require('../../assets/PhotoSnap/' + props.imageArray[1])}
            alt="Photo Snap"
        />
        <SideImage
            height={props.sideImageHeight}
            src={require('../../assets/PhotoSnap/' + props.imageArray[2])}
            alt="Photo Snap"
        />
        <SideImage
            height={props.sideImageHeight}
            src={require('../../assets/PhotoSnap/' + props.imageArray[3])}
            alt="Photo Snap"
        />
    </section>
</div>)

const Home = props => {

    const galleryHeight = 450;
    const galleryStyle = {height: galleryHeight+'px', overflow:'hidden'}
    const sideImageHeight = galleryHeight / 3;
    const imgArray = blogData.data.map(post => post.blogImage)

    return(
        <div>
            <Card>
                <ImageGallery
                    largeWidth="70%"
                    smallWidth="30%"
                    sideImageHeight = {sideImageHeight}
                    galleryStyle = {galleryStyle}
                    imageArray= {imgArray}
                />

            </Card>
                <Layout>
                    <RecentPost style={{width: '70%'}}/>
                </Layout>
        </div>

    );
}
export default Home;