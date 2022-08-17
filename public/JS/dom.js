const submitBtn = document.getElementById('submitBtn');
const inputSearch = document.getElementById('inputSearch');
let list = document.querySelector('.list')

submitBtn.addEventListener('click', (event)=>{
 event.preventDefault();
 fetchData('post',  inputSearch.value,'/searchData',errorHandler,RenderData)

})

inputSearch.addEventListener('input', (event)=>{
    event.preventDefault();
    fetchData('POST', inputSearch.value,'/inputSreach',errorHandler,createListOfSuggestions)
})



function errorHandler(err){
    console.log(err);
}
function createListOfSuggestions(data){
    list.textContent = ``;
    for(let i = 0 ; i < data.length ; i++){
       let li =  document.createElement('li');
       li.textContent = data[i];
       li.addEventListener('click' ,()=>{
        inputSearch.value = li.textContent;
        list.textContent = ``;
       })
       console.log(li);
        list.appendChild(li);
    }
}
function RenderData(data){
    console.log(data);
}