import React, { Component } from "react";
import Header from '../../../components/Molecules/Header';
import Post from './post';
import Pagination from './Pagination'
import Search from './Search'
import Latest from './Latest'
import Categories from './Categories'
import Tags from './Tags'

import Footer from '../../../components/Molecules/Footer';


class Blog extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="container">
                    <div class="row">
                        {/* <!-- Latest Posts --> */}
                        <main class="posts-listing col-lg-8">
                            <div class="container">
                                <div class="row">
                                    {/* <!-- post --> */}
                                    <Post />
                                </div>
                                {/* <!-- Pagination --> */}
                                <Pagination />
                            </div>
                        </main>
                        <aside class="col-lg-4">
                            {/* <!-- Widget [Search Bar Widget]--> */}
                            <Search />
                            {/* <!-- Widget [Latest Posts Widget]        --> */}
                            <Latest />
                            {/* <!-- Widget [Categories Widget]--> */}
                            <Categories />
                            {/* <!-- Widget [Tags Cloud Widget]--> */}
                            <Tags />
                        </aside>
                    </div>
                </div>
                {/* <!-- Page Footer--> */}
                <Footer />
            </div>
        );
    }
}

export default Blog;