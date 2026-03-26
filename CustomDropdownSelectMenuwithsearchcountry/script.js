let country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

let container = document.querySelector('.container')
let selecedBtn = container.querySelector('.seleced_countrys')
let dropdown = container.querySelector('.list_search_conatiner')
let Inputsearch = container.querySelector('#c-search')
let c_list = dropdown.querySelector('.c-list')


selecedBtn.addEventListener('click', () => {
    container.classList.toggle('active')
})

function addCountry(selectedcountry) {
    c_list.innerHTML = ""
    country_list.forEach((country) => {
        let item = selectedcountry == country ? 'selected' : "" //not work This is called a Ternary Operator. It is a shorthand way of writing an if-else statement in a single line.
        let itemcoun = `<li class=" ${item}">  ${country} </li>` //it is called  Template Literals.
        c_list.insertAdjacentHTML('beforeend', itemcoun)
    })
}
addCountry()

function addclickEventtolist() {
    c_list.querySelectorAll('li').forEach((listitem) => {
        listitem.addEventListener('click', () => {
            updateselctedtop(listitem)

        })
    })
}
addclickEventtolist()

function updateselctedtop(listitem) {
    Inputsearch.value = ""
    selecedBtn.firstElementChild.innerHTML = listitem.innerHTML
    container.classList.remove('active')
    addCountry(listitem.innerHTML)
}

Inputsearch.addEventListener('keyup', () => {
    let searchValue = Inputsearch.value.toLowerCase()
    let filterCountries = country_list.filter(country => {
        return country.toLowerCase().startsWith(searchValue)
    }).map(country => {
        return `<li> ${country} </li>`
    }).join('')
    c_list.innerHTML = filterCountries
    addclickEventtolist()

})
