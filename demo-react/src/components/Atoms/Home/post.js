import React, { Component } from "react";

class Post extends Component {
    render() {
        return (
            <div>
                <div class="row d-flex align-items-stretch">
                    <div class="text col-lg-7">
                        <div class="text-inner d-flex align-items-center">
                            <div class="content">
                                <header class="post-header">
                                    <div class="category"><a href="#">Business</a><a href="#">Technology</a></div><a href="post.html">
                                        <h2 class="h4">Alberto Savoia Can Teach You About Interior</h2></a>
                                </header>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrude consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                <footer class="post-footer d-flex align-items-center"><a href="#" class="author d-flex align-items-center flex-wrap">
                                    <div class="avatar"><img src="img/avatar-1.jpg" alt="..." class="img-fluid" /></div>
                                    <div class="title"><span>John Doe</span></div></a>
                                    <div class="date"><i class="icon-clock"></i> 2 months ago</div>
                                    <div class="comments"><i class="icon-comment"></i>12</div>
                                </footer>
                            </div>
                        </div>
                    </div>
                    <div class="image col-lg-5"><img src="img/featured-pic-1.jpeg" alt="..." /></div>
                </div>

                <div class="row d-flex align-items-stretch">
                    <div class="image col-lg-5"><img src="img/featured-pic-2.jpeg" alt="..." /></div>
                    <div class="text col-lg-7">
                        <div class="text-inner d-flex align-items-center">
                            <div class="content">
                                <header class="post-header">
                                    <div class="category"><a href="#">Business</a><a href="#">Technology</a></div><a href="post.html">
                                        <h2 class="h4">Alberto Savoia Can Teach You About Interior</h2></a>
                                </header>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrude consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                <footer class="post-footer d-flex align-items-center"><a href="#" class="author d-flex align-items-center flex-wrap">
                                    <div class="avatar"><img src="img/avatar-2.jpg" alt="..." class="img-fluid" /></div>
                                    <div class="title"><span>John Doe</span></div></a>
                                    <div class="date"><i class="icon-clock"></i> 2 months ago</div>
                                    <div class="comments"><i class="icon-comment"></i>12</div>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Post;