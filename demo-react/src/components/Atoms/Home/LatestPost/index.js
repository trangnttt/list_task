import React, { Component } from "react";
import PostItem from './postItem';


class LatestPost extends Component {
    render() {
        return (
            <section class="latest-posts">
                <div class="container">
                    <header>
                        <h2>Latest from the blog</h2>
                        <p class="text-big">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </header>
                    <div class="row">
                        <PostItem />
                        <PostItem />
                        <PostItem />
                    </div>
                </div>
            </section>
        );
    }
}
export default LatestPost;