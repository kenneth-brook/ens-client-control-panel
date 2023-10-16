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

    const formLable = document.createElement('h3');
    fullFormWrap.appendChild(formLable);
    formLable.innerText = `Data for: ${singleGrab.name} --- License Key: ${singleGrab.key}`;

    const block1Title = document.createElement('h5');
    fullFormWrap.appendChild(block1Title);
    block1Title.innerText = "Client Contact Information"

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

    const zipInputWrap = document.createElement('div');
    block1.appendChild(zipInputWrap);
    zipInputWrap.className = "inputWrap";

    const zipLabel = document.createElement('label');
    zipInputWrap.appendChild(zipLabel);
    zipLabel.for = "zip";
    zipLabel.innerText = "Zip Code:"

    const zipInput = document.createElement('input');
    zipInputWrap.appendChild(zipInput);
    zipInput.name = "zip";
    zipInput.type = "text";
    zipInput.setAttribute('id','zip');
    zipInput.value = `${singleGrab.zip}`;

    const phoneInputWrap = document.createElement('div');
    block1.appendChild(phoneInputWrap);
    phoneInputWrap.className = "inputWrap";

    const phoneLabel = document.createElement('label');
    phoneInputWrap.appendChild(phoneLabel);
    phoneLabel.for = "phone";
    phoneLabel.innerText = "Phone Number:"

    const phoneInput = document.createElement('input');
    phoneInputWrap.appendChild(phoneInput);
    phoneInput.name = "phone";
    phoneInput.type = "text";
    phoneInput.setAttribute('id','phone');
    phoneInput.value = `${singleGrab.phone_number}`;

    const emailInputWrap = document.createElement('div');
    block1.appendChild(emailInputWrap);
    emailInputWrap.className = "inputWrap";

    const emailLabel = document.createElement('label');
    emailInputWrap.appendChild(emailLabel);
    emailLabel.for = "email";
    emailLabel.innerText = "Email:"

    const emailInput = document.createElement('input');
    emailInputWrap.appendChild(emailInput);
    emailInput.name = "email";
    emailInput.type = "text";
    emailInput.setAttribute('id','email');
    emailInput.value = `${singleGrab.email}`;

    const websiteInputWrap = document.createElement('div');
    block1.appendChild(websiteInputWrap);
    websiteInputWrap.className = "inputWrap";

    const websiteLabel = document.createElement('label');
    websiteInputWrap.appendChild(websiteLabel);
    websiteLabel.for = "website";
    websiteLabel.innerText = "Website Address:"

    const websiteInput = document.createElement('input');
    websiteInputWrap.appendChild(websiteInput);
    websiteInput.name = "website";
    websiteInput.type = "text";
    websiteInput.setAttribute('id','website');
    websiteInput.value = `${singleGrab.website}`;

    /* END Client Contact Information */

    const block2Title = document.createElement('h5');
    fullFormWrap.appendChild(block2Title);
    block2Title.innerText = "Account Controls"

    const block2 = document.createElement('div');
    fullFormWrap.appendChild(block2);
    block2.className = "formRow";

    const activeInputWrap = document.createElement('div');
    block2.appendChild(activeInputWrap);
    activeInputWrap.className = "inputWrap";

    const activeLabel = document.createElement('label');
    activeInputWrap.appendChild(activeLabel);
    activeLabel.for = "active";
    activeLabel.innerText = "Subscription Active?:";

    const activeArray = ['<option value="active">Active</option>', '<option value="inactive">Inactive</option>']

    const activeInput = document.createElement('select');
    activeInputWrap.appendChild(activeInput);
    activeInput.name = "active";
    activeInput.setAttribute('id','active');
    activeArray.forEach ((data) =>{
      const opt = document.getElementById('active');
      opt.innerHTML += data;
    })
    activeInput.value = `${singleGrab.active}`;

    /* */

    const planInputWrap = document.createElement('div');
    block2.appendChild(planInputWrap);
    planInputWrap.className = "inputWrap";

    const planLabel = document.createElement('label');
    planInputWrap.appendChild(planLabel);
    planLabel.for = "plan";
    planLabel.innerText = "Subscription Plan:";

    const optArray = ['<option value="bronze">Bronze</option>', '<option value="silver">Silver</option>', '<option value="gold">Gold</option>', '<option value="platinum">Platinum</option>']

    const planInput = document.createElement('select');
    planInputWrap.appendChild(planInput);
    planInput.name = "plan";
    planInput.setAttribute('id','plan');
    optArray.forEach ((data) =>{
      const opt = document.getElementById('plan');
      opt.innerHTML += data;
    })
    planInput.value = `${singleGrab.plan}`;

    /* END Account Controls */

    const block3Title = document.createElement('h5');
    fullFormWrap.appendChild(block3Title);
    block3Title.innerText = "Database Controls"

    const block3 = document.createElement('div');
    fullFormWrap.appendChild(block3);
    block3.className = "formRow";

    const dbSyncInputWrap = document.createElement('div');
    block3.appendChild(dbSyncInputWrap);
    dbSyncInputWrap.className = "inputWrap";

    const dbSyncLabel = document.createElement('label');
    dbSyncInputWrap.appendChild(dbSyncLabel);
    dbSyncLabel.for = "dbSync";
    dbSyncLabel.innerText = "DBSync?:";

    const dbSyncArray = ['<option value="active">Active</option>', '<option value="inactive">Inactive</option>']

    const dbSyncInput = document.createElement('select');
    dbSyncInputWrap.appendChild(dbSyncInput);
    dbSyncInput.name = "dbSync";
    dbSyncInput.setAttribute('id','dbSync');
    dbSyncArray.forEach ((data) =>{
      const opt = document.getElementById('dbSync');
      opt.innerHTML += data;
    })
    dbSyncInput.value = `${singleGrab.dbsync}`;

    /* */

    const rawDBAddressInputWrap = document.createElement('div');
    block3.appendChild(rawDBAddressInputWrap);
    rawDBAddressInputWrap.className = "inputWrap";

    const rawDBAddressLabel = document.createElement('label');
    rawDBAddressInputWrap.appendChild(rawDBAddressLabel);
    rawDBAddressLabel.for = "rawDBAddress";
    rawDBAddressLabel.innerText = "Raw Data Base Address:"

    const rawDBAddressInput = document.createElement('input');
    rawDBAddressInputWrap.appendChild(rawDBAddressInput);
    rawDBAddressInput.name = "rawDBAddress";
    rawDBAddressInput.type = "text";
    rawDBAddressInput.setAttribute('id','rawDBAddress');
    rawDBAddressInput.value = `${singleGrab.raw_server}`;

    /* */

    const rawDBUserInputWrap = document.createElement('div');
    block3.appendChild(rawDBUserInputWrap);
    rawDBUserInputWrap.className = "inputWrap";

    const rawDBUserLabel = document.createElement('label');
    rawDBUserInputWrap.appendChild(rawDBUserLabel);
    rawDBUserLabel.for = "rawDBUser";
    rawDBUserLabel.innerText = "Raw Data Base User:"

    const rawDBUserInput = document.createElement('input');
    rawDBUserInputWrap.appendChild(rawDBUserInput);
    rawDBUserInput.name = "rawDBUser";
    rawDBUserInput.type = "text";
    rawDBUserInput.setAttribute('id','rawDBUser');
    rawDBUserInput.value = `${singleGrab.raw_user}`;

    /* */

    const rawDBPassInputWrap = document.createElement('div');
    block3.appendChild(rawDBPassInputWrap);
    rawDBPassInputWrap.className = "inputWrap";

    const rawDBPassLabel = document.createElement('label');
    rawDBPassInputWrap.appendChild(rawDBPassLabel);
    rawDBPassLabel.for = "rawDBPass";
    rawDBPassLabel.innerText = "Raw Data Base Pass:"

    const rawDBPassInput = document.createElement('input');
    rawDBPassInputWrap.appendChild(rawDBPassInput);
    rawDBPassInput.name = "rawDBPass";
    rawDBPassInput.type = "password";
    rawDBPassInput.setAttribute('id','rawDBPass');
    rawDBPassInput.value = `${singleGrab.raw_pass}`;

    /* */

    const rawDBTableInputWrap = document.createElement('div');
    block3.appendChild(rawDBTableInputWrap);
    rawDBTableInputWrap.className = "inputWrap";

    const rawDBTableLabel = document.createElement('label');
    rawDBTableInputWrap.appendChild(rawDBTableLabel);
    rawDBTableLabel.for = "rawDBTable";
    rawDBTableLabel.innerText = "Raw Data Base Table:"

    const rawDBTableInput = document.createElement('input');
    rawDBTableInputWrap.appendChild(rawDBTableInput);
    rawDBTableInput.name = "rawDBTable";
    rawDBTableInput.type = "text";
    rawDBTableInput.setAttribute('id','rawDBTable');
    rawDBTableInput.value = `${singleGrab.raw_table}`;

    /* */

    const rawDBTypeInputWrap = document.createElement('div');
    block3.appendChild(rawDBTypeInputWrap);
    rawDBTypeInputWrap.className = "inputWrap";

    const rawDBTypeLabel = document.createElement('label');
    rawDBTypeInputWrap.appendChild(rawDBTypeLabel);
    rawDBTypeLabel.for = "rawDBType";
    rawDBTypeLabel.innerText = "Raw Data Base Type:"

    const rawDBTypeInput = document.createElement('input');
    rawDBTypeInputWrap.appendChild(rawDBTypeInput);
    rawDBTypeInput.name = "rawDBType";
    rawDBTypeInput.type = "text";
    rawDBTypeInput.setAttribute('id','rawDBType');
    rawDBTypeInput.value = `${singleGrab.db_type}`;

    /* */

    const transDBAddressInputWrap = document.createElement('div');
    block3.appendChild(transDBAddressInputWrap);
    transDBAddressInputWrap.className = "inputWrap";

    const transDBAddressLabel = document.createElement('label');
    transDBAddressInputWrap.appendChild(transDBAddressLabel);
    transDBAddressLabel.for = "transDBAddress";
    transDBAddressLabel.innerText = "Translation Data Base Address:"

    const transDBAddressInput = document.createElement('input');
    transDBAddressInputWrap.appendChild(transDBAddressInput);
    transDBAddressInput.name = "transDBAddress";
    transDBAddressInput.type = "text";
    transDBAddressInput.setAttribute('id','transDBAddress');
    transDBAddressInput.value = `${singleGrab.trans_db_loc}`;

    /* END Database Controls */

    const block4Title = document.createElement('h5');
    fullFormWrap.appendChild(block4Title);
    block4Title.innerText = "Database Translation Key"

    const block4 = document.createElement('div');
    fullFormWrap.appendChild(block4);
    block4.className = "formRow";

    /* */

    const agencyTypeInputWrap = document.createElement('div');
    block4.appendChild(agencyTypeInputWrap);
    agencyTypeInputWrap.className = "inputWrap";

    const agencyTypeLabel = document.createElement('label');
    agencyTypeInputWrap.appendChild(agencyTypeLabel);
    agencyTypeLabel.for = "agencyType";
    agencyTypeLabel.innerText = "Agency Type:"

    const agencyTypeInput = document.createElement('input');
    agencyTypeInputWrap.appendChild(agencyTypeInput);
    agencyTypeInput.name = "agencyType";
    agencyTypeInput.type = "text";
    agencyTypeInput.setAttribute('id','agencyType');
    agencyTypeInput.value = `${singleGrab.agency_type}`;

    /* */

    const battalionInputWrap = document.createElement('div');
    block4.appendChild(battalionInputWrap);
    battalionInputWrap.className = "inputWrap";

    const battalionLabel = document.createElement('label');
    battalionInputWrap.appendChild(battalionLabel);
    battalionLabel.for = "battalion";
    battalionLabel.innerText = "Battalion:"

    const battalionInput = document.createElement('input');
    battalionInputWrap.appendChild(battalionInput);
    battalionInput.name = "battalion";
    battalionInput.type = "text";
    battalionInput.setAttribute('id','battalion');
    battalionInput.value = `${singleGrab.battalion}`;

    /* */

    const dbCityInputWrap = document.createElement('div');
    block4.appendChild(dbCityInputWrap);
    dbCityInputWrap.className = "inputWrap";

    const dbCityLabel = document.createElement('label');
    dbCityInputWrap.appendChild(dbCityLabel);
    dbCityLabel.for = "dbCity";
    dbCityLabel.innerText = "City:"

    const dbCityInput = document.createElement('input');
    dbCityInputWrap.appendChild(dbCityInput);
    dbCityInput.name = "dbCity";
    dbCityInput.type = "text";
    dbCityInput.setAttribute('id','dbCity');
    dbCityInput.value = `${singleGrab.db_city}`;

    /* */

    const creationInputWrap = document.createElement('div');
    block4.appendChild(creationInputWrap);
    creationInputWrap.className = "inputWrap";

    const creationLabel = document.createElement('label');
    creationInputWrap.appendChild(creationLabel);
    creationLabel.for = "creation";
    creationLabel.innerText = "Creation:"

    const creationInput = document.createElement('input');
    creationInputWrap.appendChild(creationInput);
    creationInput.name = "creation";
    creationInput.type = "text";
    creationInput.setAttribute('id','creation');
    creationInput.value = `${singleGrab.creation}`;

    /* */

    const crossstreetsInputWrap = document.createElement('div');
    block4.appendChild(crossstreetsInputWrap);
    crossstreetsInputWrap.className = "inputWrap";

    const crossstreetsLabel = document.createElement('label');
    crossstreetsInputWrap.appendChild(crossstreetsLabel);
    crossstreetsLabel.for = "crossstreets";
    crossstreetsLabel.innerText = "Crossstreets:"

    const crossstreetsInput = document.createElement('input');
    crossstreetsInputWrap.appendChild(crossstreetsInput);
    crossstreetsInput.name = "crossstreets";
    crossstreetsInput.type = "text";
    crossstreetsInput.setAttribute('id','crossstreets');
    crossstreetsInput.value = `${singleGrab.crossstreets}`;

    /* */

    const enteredQueueInputWrap = document.createElement('div');
    block4.appendChild(enteredQueueInputWrap);
    enteredQueueInputWrap.className = "inputWrap";

    const enteredQueueLabel = document.createElement('label');
    enteredQueueInputWrap.appendChild(enteredQueueLabel);
    enteredQueueLabel.for = "enteredQueue";
    enteredQueueLabel.innerText = "Entered Queue:"

    const enteredQueueInput = document.createElement('input');
    enteredQueueInputWrap.appendChild(enteredQueueInput);
    enteredQueueInput.name = "enteredQueue";
    enteredQueueInput.type = "text";
    enteredQueueInput.setAttribute('id','enteredQueue');
    enteredQueueInput.value = `${singleGrab.entered_queue}`;

    /* */

    const dbIdInputWrap = document.createElement('div');
    block4.appendChild(dbIdInputWrap);
    dbIdInputWrap.className = "inputWrap";

    const dbIdLabel = document.createElement('label');
    dbIdInputWrap.appendChild(dbIdLabel);
    dbIdLabel.for = "dbId";
    dbIdLabel.innerText = "Id:"

    const dbIdInput = document.createElement('input');
    dbIdInputWrap.appendChild(dbIdInput);
    dbIdInput.name = "dbId";
    dbIdInput.type = "text";
    dbIdInput.setAttribute('id','dbId');
    dbIdInput.value = `${singleGrab.db_id}`;

    /* END Database Translation Key */
}