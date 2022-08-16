function fetch(method, data, endpoint, errcb, cb){
    const xhr= new XMLHttpRequest();
    xhr.onreadystatechange=()=>{
      if(xhr.readyState===4)
      {
        if (xhr.status=200){
            const responseData=JSON.parse(xhr.responseText);
            cb(responseData);
        }else{
            errcb()
        }
      }    
    }
  xhr.open(method,endpoint);
  xhr.send(data);
}