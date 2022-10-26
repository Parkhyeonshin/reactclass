import React from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Slider from "./components/section/Slider";
import Image from "./components/section/Image";
import Imagetext from "./components/section/Imagetext";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Text from "./components/section/Text";
import Footer from "./components/layout/Footer";

function App() {
    return (
        <>
            <Header fonts="nexon" />
            <Main>
                <Slider fonts="nexon" />
                <Image attr={["section", "nexon", "container"]} />
                <Imagetext attr={["nexon", "section", "gray", "container"]} />
                <Card attr={["section", "nexon", "container"]} />
                <Banner fonts="nexon" />
                <Text attr={["section", "nexon", "container"]} />
            </Main>
            <Footer attr={["section", "nexon", "gray", "container"]} />
        </>
    );
}
export default App;
