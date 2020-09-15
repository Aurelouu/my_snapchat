import React, {useState, useEffect} from "react";
import './style.css';
import Card from "../UI/Card";
import blogPost from '../../data/snap.json';


const BlogPost = (props) => {

    const [post,setPost] = useState({
        id:"",
        blogCategory:"",
        blogTitle:"",
        postedOn:"",
        author:"",
        blogImage:"",
        blogText:""
    });
    const [postid,setPostId] = useState("");


    useEffect(() => {
        const postId = props.match.params.postid;
        const post = blogPost.data.find(post => post.id == postId);
        setPost(post);
        setPostId(postId);
    },  [props.match.params.postid]);

    if (post.blogImage === ""){
        return null;
    }

    return(
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">{post.blogCategory}</span>
                    <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="postedBy">Poster {post.postedOn} par {post.author}</span>
                </div>
                <div className="postImageContainer">
                    <img src={require('../../assets/PhotoSnap/' + post.blogImage)} alt="Histoire de snap"/>
                </div>

                <div className="postContent">
                    <h3>{post.blogTitle}</h3>
                    <p>{post.blogText}</p>
                </div>
            </Card>
        </div>
    );
}
export default BlogPost;