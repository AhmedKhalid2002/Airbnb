export const getExplore=async()=>{
    try {
        const res=await fetch(`${process.env.PUBLIC_BASE_URL}/b/4G1G`);
        const exploreData=await res.json();
        return exploreData;
    } catch (error) {
        console.log(error)
    }
}
export const getLive=async()=>{
    try {
        const res=await fetch(`${process.env.PUBLIC_BASE_URL}/b/VHHT`);
        const liveData=await res.json();
        return liveData;
    } catch (error) {
        console.log(error)
    }
}
export const getSearch=async()=>{
    try {
        const res=await fetch(`${process.env.PUBLIC_BASE_URL}/b/5NPS`);
        const searhData=await res.json();
        return searhData;
    } catch (error) {
        console.log(error)
    }
}