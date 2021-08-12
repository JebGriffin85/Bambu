

export function getAvailableTables(allRes) {
    let tableIds = [1, 2, 3, 4, 5, 6, 7];
    let availableTables = [];
    let curRes = allRes.map((res) => res.tableId)
    for (let i = 0; i < tableIds.length; i++) {
        if (!curRes.includes(tableIds[i])) {
            availableTables.push(tableIds[i]);
        };
    };

    return availableTables;
};