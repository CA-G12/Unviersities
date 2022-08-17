function fetchData(method, data, endpoint, errcb, cb){
  const dataObj = {data}
    fetch(endpoint,{method: method , body:JSON.stringify(dataObj) ,headers: {
      'Content-type': 'application/json' // The type of data you're sending
    }}).then(res=> cb(res)).catch(err=>errcb(err))
}