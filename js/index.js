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

function selectClient(data) {
    fetch(`https://ens.a2hosted.com/client-control-host/clients/${data}`) 
  .then(response => { 
    if (response.ok) { 
      return response.json(); // Parse the response data as JSON 
    } else { 
      throw new Error('API request failed'); 
    } 
  }) 
  .then(data => {
    singleGrab = data[0];
    fillForm();
  }) 
  .catch(error => { 
    // Handle any errors here 
    console.error(error); // Example: Logging the error to the console 
  });
}

function fillForm() {
    const fullFormWrap = document.getElementById('fullForm');

    console.log(singleGrab)

    const formLable = document.createElement('h3');
    fullFormWrap.appendChild(formLable);
    formLable.innerText = `Data for: ${singleGrab.name} --- License Key: ${singleGrab.key}`;

    const block1 = document.createElement('div');
    fullFormWrap.appendChild(block1);
    block1.className = "formRow";

    const nameInputWrap = document.createElement('div');
    block1.appendChild(nameInputWrap);
    nameInputWrap.className = "inputWrap";

    const nameLabel = document.createElement('label');
    nameInputWrap.appendChild(nameLabel);
    nameLabel.for = "name";
    nameLabel.innerText = "Client Name:"

    const nameInput = document.createElement('input');
    nameInputWrap.appendChild(nameInput);
    nameInput.name = "name";
    nameInput.type = "text";
    nameInput.setAttribute('id','name');
    nameInput.value = `${singleGrab.name}`;

    const addressInputWrap = document.createElement('div');
    block1.appendChild(addressInputWrap);
    addressInputWrap.className = "inputWrap";

    const addressLabel = document.createElement('label');
    addressInputWrap.appendChild(addressLabel);
    addressLabel.for = "address";
    addressLabel.innerText = "Client Address:"

    const addressInput = document.createElement('input');
    addressInputWrap.appendChild(addressInput);
    addressInput.name = "address";
    addressInput.type = "text";
    addressInput.setAttribute('id','address');
    addressInput.value = `${singleGrab.address}`;

    const cityInputWrap = document.createElement('div');
    block1.appendChild(cityInputWrap);
    cityInputWrap.className = "inputWrap";

    const cityLabel = document.createElement('label');
    cityInputWrap.appendChild(cityLabel);
    cityLabel.for = "city";
    cityLabel.innerText = "City:"

    const cityInput = document.createElement('input');
    cityInputWrap.appendChild(cityInput);
    cityInput.name = "city";
    cityInput.type = "text";
    cityInput.setAttribute('id','city');
    cityInput.value = `${singleGrab.city}`;

    const stateInputWrap = document.createElement('div');
    block1.appendChild(stateInputWrap);
    stateInputWrap.className = "inputWrap";

    const stateLabel = document.createElement('label');
    stateInputWrap.appendChild(stateLabel);
    stateLabel.for = "state";
    stateLabel.innerText = "State:"

    const stateInput = document.createElement('input');
    stateInputWrap.appendChild(stateInput);
    stateInput.name = "state";
    stateInput.type = "text";
    stateInput.setAttribute('id','state');
    stateInput.value = `${singleGrab.state}`;

    const block2 = document.createElement('div');
    fullFormWrap.appendChild(block2);
    block2.className = "formRow";

    const zipInputWrap = document.createElement('div');
    block2.appendChild(zipInputWrap);
    zipInputWrap.className = "inputWrap";

    const zipLabel = document.createElement('label');
    zipInputWrap.appendChild(zipLabel);
    zipLabel.for = "zip";
    zipLabel.innerText = "Zip Code:"

    const zipInput = document.createElement('input');
    zipInputWrap.appendChild(zipInput);
    zipInput.zip = "zip";
    zipInput.type = "text";
    zipInput.setAttribute('id','zip');
    zipInput.value = `${singleGrab.zip}`;

    const planInputWrap = document.createElement('div');
    block2.appendChild(planInputWrap);
    planInputWrap.className = "inputWrap";

    const planLabel = document.createElement('label');
    planInputWrap.appendChild(planLabel);
    planLabel.for = "plan";
    planLabel.innerText = "Subscription Plan:"

    const planInput = document.createElement('input');
    planInputWrap.appendChild(planInput);
    planInput.plan = "plan";
    planInput.type = "text";
    planInput.setAttribute('id','plan');
    planInput.value = `${singleGrab.plan}`;
}