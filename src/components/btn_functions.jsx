function Btnfunctions(){





let Submit = document.querySelector("#btnsumbit");
Submit.addEventListener("click", (x) => {
    x.preventDefault()
    console.log(`Hmmmm`)
})

let Reset = document.querySelector("#btnreset");
Reset.addEventListener("click", (x) => {
    x.preventDefault()
    console.log(`Wowoowow`)
})
}

export {Btnfunctions as default}