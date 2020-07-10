import React, { Component } from "react";

class postItem extends Component {
    render() {
        return (
            <div class="post col-md-4">
                <div class="post-thumbnail"><a href="post.html"><img src="img/blog-1.jpg" alt="..." class="img-fluid" /></a></div>
                <div class="post-details">
                    <div class="post-meta d-flex justify-content-between">
                        <div class="date">20 May | 2016</div>
                        <div class="category"><a href="#">Business</a></div>
                    </div><a href="post.html">
                        <h3 class="h4">Ways to remember your important ideas</h3></a>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
            </div>
        );
    }
}
export default postItem;