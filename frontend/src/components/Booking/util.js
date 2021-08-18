
//this function checks all current reservations and returns available table id's that are left
export function getAvailableTables(allRes) {
    let tableIds = [1, 2, 3, 4, 5, 6, 7];
    let availableTables = [];
    let curRes = allRes.map((res) => res.tableId) //put all our reservation id's in an array
    for (let i = 0; i < tableIds.length; i++) { //loop through our table id's and find all the res not in our curRes
        if (!curRes.includes(tableIds[i])) {
            availableTables.push(tableIds[i]); //if its not in our current reservations, then the table is available to be booked
        };
    };
    return availableTables;
};