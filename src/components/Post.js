import React, { Component } from "react";
import { connect } from 'react-redux';
import { deletePost } from '../actions/postAction';

class Post extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/')
    }

    render(){

        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className="center"> Loading post...</div>
        )
        return(
            <div className="container">
                <h4>{post}</h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    
    let id = ownProps.match.params.post_id;

    return{
        post: state.posts.find(post => post.id === id)
    }

    /* // Long Format of return
    return{
        post: state.posts.find(
            (post) => {
                return post.id === id
            }
        )
    }*/
}

const mapDistpatchToProps = (dispatch) =>{
    return {
        deletePost: (id) => { 
            dispatch( deletePost(id) )
        }
    }
}

export default connect(mapStateToProps, mapDistpatchToProps)(Post);