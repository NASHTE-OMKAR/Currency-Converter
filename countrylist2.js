let c, b;
(async () => {
    b = await fetch("http://localhost:3000/countrycode");
    c = await b.json();
})();

console.log(c);