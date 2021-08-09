// Functinos

// Show
function display_inline(class_name) {

    let get_odj = document.getElementsByClassName(class_name);

    // HTMLCollectino >> Array
    elements = Array.from(get_odj);

    for (let i = 0; i < elements.length; i++) {
        let tmp_item = elements[i];
        tmp_item.style.display = 'inline';
    };
};

// Hide
function display_none(class_name) {

    let get_odj = document.getElementsByClassName(class_name);

    // HTMLCollectino >> Array
    elements = Array.from(get_odj);

    for (let i = 0; i < elements.length; i++) {
        let tmp_item = elements[i];
        tmp_item.style.display = 'none';
    };
};



// ----------------------------------------


// All Numbers
document.getElementById("b_all").onclick = function() {

    console.log("All-Button, onclick");

    // Odd : Show
    display_inline("odd")

    // Even : Show
    display_inline("even");

    // Prime
    display_inline("prime");

};


// ----------------------------------


// Odd Numbers
document.getElementById("b_odd").onclick = function() {

    console.log("Odd-Button, onclick");

    // Even : Hide
    display_none("even");

    // Prime : Hide
    display_none("prime");

    // Odd : Show << Overwrite
    display_inline("odd");

};


// ----------------------------------


// Even Numbers
document.getElementById("b_even").onclick = function() {

    console.log("Even-Button, onclick");

    // Odd : Hide
    display_none("odd");

    // Prime : Hide
    display_none("prime");

    // Even : Show << Overwrite
    display_inline("even");

};


// ----------------------------------


// Prime Numbers
document.getElementById("b_prime").onclick = function() {

    console.log("Prime-Button, onclick");

    // Odd : Hide
    display_none("odd");

    // Even : Hide
    display_none("even");

    // Prime : Show << Overwrite
    display_inline("prime");

};