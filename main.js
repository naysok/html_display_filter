// All Numbers
document.getElementById("b_all").onclick = function() {

    console.log("All-Button, onclick");


    // Odd
    get_odd = document.getElementsByClassName("odd");

    // HTMLCollectino >> Array
    elements = Array.from(get_odd);

    for (let i = 0; i < elements.length; i++) {
        var tmp_item = elements[i];
        tmp_item.style.display = 'inline';
    };


    // Even
    get_odd = document.getElementsByClassName("even");

    // HTMLCollectino >> Array
    elements = Array.from(get_odd);

    for (let i = 0; i < elements.length; i++) {
        var tmp_item = elements[i];
        tmp_item.style.display = 'inline';
    };


    // Prime
    get_prime = document.getElementsByClassName("prime");

    // HTMLCollectino >> Array
    elements = Array.from(get_prime);

    for (let i = 0; i < elements.length; i++) {
        var tmp_item = elements[i];
        tmp_item.style.display = 'inline';
    };


};


// ----------------------------------


// Odd Numbers
document.getElementById("b_odd").onclick = function() {

    console.log("Odd-Button, onclick");


    // Even
    get_odd = document.getElementsByClassName("even");

    // HTMLCollectino >> Array
    elements = Array.from(get_odd);

    for (let i = 0; i < elements.length; i++) {
        var tmp_item = elements[i];
        tmp_item.style.display = 'none';
    };


    // Prime
    get_prime = document.getElementsByClassName("prime");

    // HTMLCollectino >> Array
    elements = Array.from(get_prime);

    for (let i = 0; i < elements.length; i++) {
        var tmp_item = elements[i];
        tmp_item.style.display = 'none';
    };


    // Odd << Overwrite
    get_odd = document.getElementsByClassName("odd");

    // HTMLCollectino >> Array
    elements = Array.from(get_odd);

    for (let i = 0; i < elements.length; i++) {
        var tmp_item = elements[i];
        tmp_item.style.display = 'inline';
    };


};


// ----------------------------------


// Even Numbers
document.getElementById("b_even").onclick = function() {

    console.log("Even-Button, onclick");


    // Odd
    get_odd = document.getElementsByClassName("odd");

    // HTMLCollectino >> Array
    elements = Array.from(get_odd);

    for (let i = 0; i < elements.length; i++) {
        var tmp_item = elements[i];
        tmp_item.style.display = 'none';
    };


    // Prime
    get_prime = document.getElementsByClassName("prime");

    // HTMLCollectino >> Array
    elements = Array.from(get_prime);

    for (let i = 0; i < elements.length; i++) {
        var tmp_item = elements[i];
        tmp_item.style.display = 'none';
    };


    // Even << Overwrite
    get_even = document.getElementsByClassName("even");

    // HTMLCollectino >> Array
    elements = Array.from(get_even);

    for (let i = 0; i < elements.length; i++) {
        var tmp_item = elements[i];
        tmp_item.style.display = 'inline';
    };

};


// ----------------------------------


// Prime Numbers
document.getElementById("b_prime").onclick = function() {

    console.log("Prime-Button, onclick");


    // Odd
    get_odd = document.getElementsByClassName("odd");

    // HTMLCollectino >> Array
    elements = Array.from(get_odd);

    for (let i = 0; i < elements.length; i++) {
        var tmp_item = elements[i];
        tmp_item.style.display = 'none';
    };


    // Even
    get_even = document.getElementsByClassName("even");

    // HTMLCollectino >> Array
    elements = Array.from(get_even);

    for (let i = 0; i < elements.length; i++) {
        var tmp_item = elements[i];
        tmp_item.style.display = 'none';
    };


    // Prime << Overwrite
    get_prime = document.getElementsByClassName("prime");

    // HTMLCollectino >> Array
    elements = Array.from(get_prime);

    for (let i = 0; i < elements.length; i++) {
        var tmp_item = elements[i];
        tmp_item.style.display = 'inline';
    };

};