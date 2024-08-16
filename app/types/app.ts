
export type ExploreItem={
    img:string,
    location:string,
    distance:string
}
export type LiveItem={
    img:string,
    title:string,
} 
export type SearchItem={
    img:string,
    location:string,
    title:string,
    description:string,
    star:number,
    price:string,
    total:string,
    long:number,
    lat:number,
}
export type ExploreData=ExploreItem[];
export type LiveData=LiveItem[];
export type searchData=SearchItem[];