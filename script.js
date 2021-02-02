function displayData() {
    appendTHs("table-head", ["Destination", "Miles", "Gallons", "MPG"]);
    const chicago = { destination: "Chicago", miles: 329, gallons: 10.6 };
    const stLouis = { destination: "St. Louis", miles: 284, gallons: 10.5 };
    const indianapolis = { destination: "Indianapolis", miles: 122, gallons: 3.7 };
    const nashville = { destination: "Nashville", miles: 191, gallons: 6.4 };
    const cincinnati = { destination: "Cincinnati", miles: 132, gallons: 3.9 };

    const cities = [chicago, stLouis, indianapolis, nashville, cincinnati];
    cities.forEach(x => appendTDs("table-body", [x.destination, x.miles, x.gallons, calculateMPG(x.miles, x.gallons).toFixed(1)]));
}

function append(parentElement, childElementText, childElementType) {
    const data = document.createElement(childElementType);
    data.appendChild(document.createTextNode(childElementText));
    parentElement.appendChild(data);
}

function appendRow(parentId, dataArray, childElementType) {
    const myRow = document.createElement("tr");
    document.getElementById(parentId).appendChild(myRow);
    dataArray.forEach(element => {
        append(myRow, element, childElementType);
    });
}

function appendTH(parent, headerText) {
    append(parent, headerText, "th");
}

function appendTHs(parentId, headerTextArray) {
    appendRow(parentId, headerTextArray, "th");
}

function appendTDs(parentId, dataTextArray){
    appendRow(parentId, dataTextArray, "td");
}

function calculateMPG(miles, gallons){
    return miles/gallons;
}