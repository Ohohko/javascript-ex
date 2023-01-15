 const listOfNeighbours = [
        ["Canada", "Mexico"],
        ["Spain"],
        ["Norway", "Sweden", "Russia"],
    ];
    
    listOfNeighbours.forEach(outer => {
        outer.forEach(inner => {
            console.log(`Neighbour: ${inner}`);
        });
    });