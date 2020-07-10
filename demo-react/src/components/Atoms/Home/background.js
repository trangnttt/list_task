import React, { Component } from "react";

class Background extends Component {
    render() {
        return (
            <section style={{ background: "url(img/hero.jpg)", backgroundSize: "cover", backgroundPosition: "center center" }} class="hero">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <h1>Bootstrap 4 Blog - A free template by Bootstrap Temple</h1><a href="#" class="hero-link">Discover More</a>
                        </div>
                    </div><a href=".intro" class="continue link-scroll"><i class="fa fa-long-arrow-down"></i> Scroll Down</a>
                </div>
            </section>
        );
    }
}
export default Background;