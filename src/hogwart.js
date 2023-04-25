function Hogwarts() {
    return (
        <div className="Hogwarts">
            "Harry. Did you put your name in the Goblet of Fire?"
        </div>
    );
}

import React from "react";
import aDifferentName from "./houses/whoseHouse";

function Hogwarts() {
    aDifferentName(); // => "HAGRID'S HOUSE!"

    return <h1>Welcome to Hogwarts!</h1>;
}

import React from "react";
import Hufflepuff from "./houses/Hufflepuff";

function Hogwarts() {
    return (
        <div>
            <Hufflepuff />
        </div>
    );
}

//export default Hogwarts;

import { colors, gryffMascot } from "./houses/Gryffindor";

console.log(colors);
// => 'Scarlet and Gold'

gryffMascot();
// => 'The Lion'


import * as GryffFunctions from "./houses/Gryffindor";

console.log(GryffFunctions.colors);
// > 'Scarlet and Gold'

GryffFunctions.gryffMascot();
// => 'The Lion'

GryffFunctions.values();
// => Attempted import error

import { colors, gryffMascot } from "./houses/Gryffindor";

console.log(colors);
// > 'Scarlet and Gold'

gryffMascot();
// > 'The Lion'


import React from "react";
import whoseHouse from "./houses/whoseHouse";
import Hufflepuff from "./houses/Hufflepuff";
import * as GryffFunctions from "./houses/Gryffindor";

export default function Hogwarts() {
    return (
        <div>
            <HooflePoof />
        </div>
    );
}