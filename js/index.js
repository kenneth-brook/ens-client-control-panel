const clientList = document.getElementById('clients');
let singleGrab = "";

function pageLaunch() {
    fetch('https://ens.a2hosted.com/client-control-host/clients') 
  .then(response => { 
    if (response.ok) { 
      return response.json(); // Parse the response data as JSON 
    } else { 
      throw new Error('API request failed'); 
    } 
  }) 
  .then(data => {
    data.forEach((client) => {
        let id = client.id;
        let name = client.name;
        let opItem = `<option value=${id}>${name}</option>`;
        console.log(opItem)
        clientList.innerHTML += opItem;
    });
  }) 
  .catch(error => { 
    // Handle any errors here 
    console.error(error); // Example: Logging the error to the console 
  });
}

function selectClient() {
    fetch(`https://ens.a2hosted.com/client-control-host/clients/`) 
  .then(response => { 
    if (response.ok) { 
      return response.json(); // Parse the response data as JSON 
    } else { 
      throw new Error('API request failed'); 
    } 
  }) 
  .then(data => {
    
  }) 
  .catch(error => { 
    // Handle any errors here 
    console.error(error); // Example: Logging the error to the console 
  });
}