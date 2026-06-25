
let url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2026.6.24/v1/currencies/";
// Get all select elements
let dropdowns = document.querySelectorAll(".dropdown select");

let msg = document.querySelector("#msg");
let btn = document.querySelector("button");
let fid = document.querySelector("#fid");
let tid = document.querySelector("#tid");



btn.addEventListener("click", (e) => {
    e.preventDefault()
    cl();

})


async function fetchdata() {
    let f;
    try {

        let orf = fid.value;

        let ort = tid.value;

        let upu = `${url}${orf.toLowerCase()}.json`;

        let respo = await fetch(upu);
        if (!respo.ok) throw new Error(`HTTP ${respo.status}`);
        let jre = await respo.json();
        f = jre[orf.toLowerCase()][ort.toLowerCase()];



    } catch (err) {
        console.error("Fetch failed:", err); // ← This will show real cause
    }
    return f;

};
//when to use server.js in local remove from prenthies 
/*(async () => {
    let b = await fetch("http://localhost:3000/countrycode");
    let c = await b.json();
    g = c;*/
    // Populate both dropdowns      and add c insted of countryList1
    dropdowns.forEach(select => {

        for (const code in countryList1) {

            let option = document.createElement("option");
            option.value = code;

            option.innerText = code;

            // Set default selections
            if (select.name === "from" && code === "USD") {
                option.selected = true;
            } else if (select.name === "to" && code === "INR") {
                option.selected = true;
            }

            select.appendChild(option); // ✅ Fixed typo + moved outside condition
        }

        select.addEventListener("change", (evt) => {

            updateflag(evt.target);

        })
    });
}
// )();  when to use server.js in local remove from prenthies 



const updateflag = (ele) => {
    let imsr = ele.parentElement.querySelector("img");
    let cid = g[ele.value];
    console.log(ele.value);
    let newim = ` https://flagsapi.com/${cid}/shiny/64.png`;
    imsr.src = newim;
};


const cl = async () => {
    let rate = await fetchdata();
    let inputAmount = document.querySelector("input").value;
    let FinalRis = Math.floor(inputAmount * rate);

    msg.innerText = `${fid.value} ${inputAmount} - ${FinalRis} ${tid.value}`;
}
