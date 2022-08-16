const submitBtn = document.getElementById('submitBtn');
const inputSearch = document.getElementById('inputSearch');

submitBtn.addEventListener('submit', (event)=>{
 event.preventDefault();
 fetch('post',  inputSearch.value,'/searchData',errorHandler,RenderData)

})

inputSearch.addEventListener('input', (event)=>{
    event.preventDefault();
    fetch('post', inputSearch.value,'/inputSreach',errorHandler,createListOfSuggestions)
})

function errorHandler(){
    console.log(err);
}
function createListOfSuggestions(data){
    console.log(data);
}
function RenderData(data){
    console.log(data);
}