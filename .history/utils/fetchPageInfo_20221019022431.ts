import {PageInfo } from "../typings";

export const fetchPageInfo = async() => {
    const res = await fetch(`http://api/getPageInfo`) ;

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
}