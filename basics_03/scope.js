let a = 300

if(true) {
    let a = 10
    const b = 20
    console.log("Inner ", a);
}

//console.log(a);
///console.log(b);
console.log(a);



function one(){
    const username = "Raja"

    function two(){
        const website ="Youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}


one()



if (true) {
    const username = "Bikash"
    if (username === "Bikash"){
        const website = " youtube"
        console.log(username + website);
    }
}