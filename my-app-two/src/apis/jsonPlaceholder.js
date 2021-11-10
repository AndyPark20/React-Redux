

export const api = async()=>{
  try{
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/");
    const dataResult = await fetchData.json();
    console.log(dataResult);
  }catch(err){
    console.error(err)
  }
}
