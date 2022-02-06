import React from "react";

import Searcher from "../Searcher/Searcher";
import Table from "../Table/Table";

import City from "../../types/City";

import "./Main.css"

type MainProps = {
    cities: City[],
    handleSearhOnChange: any,
    searcherValue: string,
    lastCityElementRef: any
}

function Main(props: MainProps) {

    return (
        <main>
            <Searcher 
                handleOnChange={props.handleSearhOnChange}
            />
            <Table lastCityElementRef={props.lastCityElementRef} cities={props.cities} />
        </main>
    )
}

export default Main;
