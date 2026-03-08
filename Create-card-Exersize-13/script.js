console.log("Hello word!")

function Createcard(title, cName, views, monthsOld, duration, thumbnail){

    let viewstr 
        if(views < 1000){
           viewstr = views
        }else if(views > 1000000){
            viewstr =  views / 1000000 + "M"
        }else{
            viewstr = views /100000 + "k"
        }
   
     let htmlsdfdg = `<div class="card">
    <div class="left-image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="right-view">
        <h1>${title}</h1>
        <p>${cName} . ${viewstr} views . ${monthsOld} months ago</p>
    </div> 
</div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + htmlsdfdg
}

Createcard("Installing VS Code & How Website Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 560000, 7, "31:20", "harry.webp" )

