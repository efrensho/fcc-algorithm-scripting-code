function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const EARTHRADIUS = 6367.4447;
    const PI = 3.1415926535897932;

    // calculates orbitalPeriod for each object that is passed as argument from the map method at the end.
    function calculateOrbitalPeriod(obj) {
        let semiMajorAxis = EARTHRADIUS + obj.avgAlt;
        let orbitalPeriod = (2 * PI) * Math.sqrt(Math.pow(semiMajorAxis, 3) / GM);
        return Math.round(orbitalPeriod);
    }

    // returns a new array containing the name and the value returned from calculateOrbitalPeriod instead of avgAlt
    return arr.map(obj => ({
        name: obj.name,
        orbitalPeriod: calculateOrbitalPeriod(obj)
    }));
}


// refactored solution
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const EARTHRADIUS = 6367.4447;

    return arr.map(obj => ({
        name: obj.name,
        orbitalPeriod: Math.round((2 * Math.PI) * Math.sqrt(Math.pow(EARTHRADIUS + obj.avgAlt, 3) / GM))
    }));
}


// test
orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]);