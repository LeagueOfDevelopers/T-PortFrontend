import React, { Component } from 'react';
import styled from "styled-components";

const HomeContents = styled.div`
    width: 100%;
    min-height: 100px;
    background-color: palevioletred;
`;

const Motto = styled.span`
    font-size: 2em;
`;

const Home = () => {
    return (
        <HomeContents>
            <Motto>LGBT</Motto>
            <div>
                <span>Search</span>
            </div>
            <div><span>Popular</span></div>
            <div>
                <span>We Bettet than others</span>
            </div>
        </HomeContents>
    );
}
 
export default Home;
