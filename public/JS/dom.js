const submitBtn = document.getElementById('submitBtn');
const inputSearch = document.getElementById('inputSearch');
const renderSection =document.getElementsByClassName('render-data')[0]
let list = document.querySelector('.list');

submitBtn.addEventListener('click', (event)=>{
    const loader = document.createElement('div');
    loader.setAttribute('class','loader');
     renderSection.append(loader); 
     event.preventDefault();
    fetchData('post',  inputSearch.value,'/searchData',errorHandler,RenderData)

})

inputSearch.addEventListener('input', (event)=>{
    event.preventDefault();
    fetchData('POST', inputSearch.value,'/inputSreach',errorHandler,createListOfSuggestions)
})



function errorHandler(err){
    body.textContent = ``;
    let h1 = document.createElement('h1')
    h1.innerText = "Error Server"
    body.appendChild(h1);
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
        list.appendChild(li);
    }
}
function RenderData(data){
    renderSection.textContent=''
    data.forEach(element => {
        const uniData = document.createElement('div');
        uniData.setAttribute('class','uniDiv')
        const img = document.createElement('img');
        img.setAttribute('class','uniImg')
        img.src="https://images.unsplash.com/photo-1581362072978-14998d01fdaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80"
        const uniName= document.createElement('p')
        uniName.textContent=element.name
        const buttonUni= document.createElement('button')
        const buttonAnchor= document.createElement('a')
        
        const buttonIcon= document.createElement('i');
        buttonIcon.setAttribute('class','fa-solid fa-arrow-right')
        buttonAnchor.appendChild(buttonIcon)
        buttonAnchor.target="_blank"
        buttonAnchor.href=element.web_pages[0]
        buttonUni.append(buttonAnchor)
        uniData.append(img, uniName , buttonUni)
        renderSection.appendChild(uniData);
    });
    window.scrollTo({
        top: 530,
        behavior: 'smooth'
      });
}