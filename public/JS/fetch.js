function fetchData(method, data, endpoint, errcb, cb){
  const dataObj = {data}
    fetch(endpoint,{method: method , body:JSON.stringify(dataObj) ,headers: {
      'Content-type': 'application/json'}})
    .then(data=>cb(data))
    .then(res=>res.json())
    .catch(err=>errcb(err))
}