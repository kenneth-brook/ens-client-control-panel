const clientList = document.getElementById('clients')

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
    // Process the response data here 
    console.log(data); // Example: Logging the data to the console 
  }) 
  .catch(error => { 
    // Handle any errors here 
    console.error(error); // Example: Logging the error to the console 
  });
}