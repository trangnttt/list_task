import React, { Component } from "react";
import Header from './components/Molecules/Header';
import Background from './components/Atoms/Home/background';
import Intro from './components/Atoms/Home/introduce';
import Post from './components/Atoms/Home/post';
import Divider from './components/Atoms/Home/divider';
import LatestPost from './components/Atoms/Home/LatestPost/index';
import Newsletter from './components/Atoms/Home/Newsletter';
import Gallery from './components/Atoms/Home/Gallery';
import Footer from './components/Molecules/Footer';


class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <!-- Hero Section--> */}
        <Background />
        {/* <!-- Intro Section--> */}
        <Intro />
        <section class="featured-posts no-padding-top">
          <div class="container">
            {/* <!-- Post--> */}
            <Post />
          </div>
        </section>
        {/* <!-- Divider Section--> */}
        <Divider />
        {/* <!-- Latest Posts --> */}
        <LatestPost />
        {/* <!-- Newsletter Section--> */}
        <Newsletter />
        {/* <!-- Gallery Section--> */}
        <Gallery />
        {/* <!-- Page Footer--> */}
        <Footer />
      </div>
    );
  }
}

export default Home;