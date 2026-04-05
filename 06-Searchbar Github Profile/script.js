

// const fetchProfile = async (username)=>{
//    try{

//     const response = await fetch( `https://api.github.com/users/${username}`)

//     if(!response.ok) {
//         throw new Error('User not found')
//     }

//     const data = await response.json()
    
//     console.log('Profilename', data.name)
//     console.log('Username', data.login)
//     console.log('Bio', data.bio)
//     console.log('Repositories', data.public_repos)
//     console.log('Followers', data.followers)
//     console.log('Following', data.following)
//    }catch(error){
//        console.log('Error fetching data', error)
//    }
// }

// fetchProfile('Aakashcoders')

let url = 'https://api.github.com/users' //not need slash

let InputsearchEle = document.getElementById('Inputsearch')
let SearchBtnElm = document.querySelector('.SearchBtn')
let profileContainerEl = document.querySelector('.profileContainer')
let loadingEl = document.querySelector('.loading')

const profileContainer = (profile)=>{
    return (`
         <div class="profileBox">
            <div class="topsection">
                <div class="left">
                    <div class="avatar">
                        <img src="${profile.avatar_url}" width="100px" height="100px" alt="avatar">
                    </div>
                    <div class="Selfsection">
                        <h1 class="UserName">${profile.name}</h1>
                        <h1 class="profilename">@${profile.login}</h1>
                    </div>
                </div>
                <div class="right">
                <a href="${profile.html_url}">
                    <button class="">Check Profile</button>
                    </a>
                </div>
            </div>
            <div class="about">
                <h2>About</h2>
                <p>${profile.bio}</p>
            </div>
            <div class="status">
                <div class="statesitems">
                    <h3>Followers</h3>
                    <p>${profile.followers}</p>
                </div>
                <div class="statesitems">
                    <h3>Followings</h3>
                    <p>${profile.following}</p>
                </div>
                <div class="statesitems">
                    <h3>Repo</h3>
                    <p>${profile.public_repos}</p>
                </div>
            </div>
        </div>`)
}


const fetchGithubprofile = async () =>{

    let username = InputsearchEle.value;
    
    loadingEl.innerText = 'Loadding...'
    loadingEl.style.color = 'black'

    try{

     let fetchProfile = await fetch(`${url}/${username}`)
     if(!fetchProfile.ok){
        throw new Error('Error Something wrong')
     }

     let data = await fetchProfile.json()

       console.log(data)

     if(data.login){
        loadingEl.innerHTML = ""
        profileContainerEl.innerHTML = profileContainer(data)
     }else{
        loadingEl.innerHTML = data.message
        loadingEl.style.color = "red";
        profileContainerEl.innerText= ""
     }

   

    }catch(error){
       console.log('Error fethcing data', error)
       loadingEl.innerHTML = ""
    }
}

SearchBtnElm.addEventListener( 'click', fetchGithubprofile)