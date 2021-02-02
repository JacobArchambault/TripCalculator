
function displayData() {
    let chicago = { destination: "Chicago", miles: 329, gallons: 10.6 }
    let stLouis = { destination: "St. Louis", miles: 284, gallons: 10.5 }
    let indianapolis = { destination: "Indianapolis", miles: 122, gallons: 3.7 }
    let nashville = { destination: "Nashville", miles: 191, gallons: 6.4 }
    let cincinnati = { destination: "Cincinnati", miles: 132, gallons: 3.9 }

    let cities = [chicago, stLouis, indianapolis, nashville, cincinnati]
    let table = document.getElementById("myTable");

    // Create an empty <tr> element and add it to the 1st position of the table:
    let row = table.insertRow(0);
    
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    
    // Add some text to the new cells:
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
function calculateMPG(miles, gallons) {
    return miles / gallons;
}