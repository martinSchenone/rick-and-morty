export const load = async({fetch,url}) =>{
    const page = Number(url.searchParams.get('page')) || 1;
    const fetchData = async (page) =>{
        const url = `https://rickandmortyapi.com/api/character?page=${page}`;
        const res = await fetch(url);
        const data = await res.json();
        if(res.ok){
            return data;
        }
    } 
    return{
        data:fetchData(page),
    }
}


