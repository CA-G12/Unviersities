const submitBtn = document.getElementById('submitBtn');
const inputSearch = document.getElementById('inputSearch');

submitBtn.addEventListener('click', (event)=>{
 event.preventDefault();
 fetchData('post',  inputSearch.value,'/searchData',errorHandler,RenderData)

})

inputSearch.addEventListener('input', (event)=>{
    event.preventDefault();
    fetchData('post', inputSearch.value,'/inputSreach',errorHandler,createListOfSuggestions)
})

function errorHandler(err){
    console.log(err);
}
function createListOfSuggestions(data){
    console.log(data);
}
function RenderData(data){
    console.log(data);
}