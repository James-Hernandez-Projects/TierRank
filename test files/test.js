
if(sessionStorage.getItem('data-theme') === 'dark'){
    document.documentElement.setAttribute('data-theme','dark')
darkMode();
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
//var Likes = document.querySelector('.list_card_title_num1').textContent;
var like = 0;
var dislike = 0;


document.querySelector('.nav_header_title').addEventListener('click',homePage);
document.querySelector('.nav_header_tierRankLogo').addEventListener('click',homePage);
document.querySelector('.foot_right').addEventListener('click',Terms);
document.querySelector('.nav_userButtons_Login').addEventListener('click',login);
document.querySelector('.nav_userButtons_about').addEventListener('click',about);
document.querySelector('.category_container_Button1').addEventListener('click',Electronics);
document.querySelector('.category_container_Button2').addEventListener('click',Health);
document.querySelector('.category_container_Button3').addEventListener('click',Gaming);
document.querySelector('.category_container_Button4').addEventListener('click',education);
document.querySelector('.category_container_Button5').addEventListener('click',Music);
document.querySelector('.category_container_topic4').addEventListener('click',education);
//change category_container_topic to category_container_topic1,category_container_topic2,category_container_topic3,category_container_topic4,category_container_topic5 to distinguish the categories from each other
document.querySelector('.list_link').addEventListener('click',details);
// <div class = "list_link"></div> add this to each html file so it doesn't cause an error
document.querySelector('.nav_userButtons_home').addEventListener('click',homePage);
document.querySelector('.signContainer_button').addEventListener('click',login);
/* add <a href="#" class="signContainer_button"> to every html file so that it doesn't cause an error*/
document.querySelector('.signc_button').addEventListener('click',login);
/* add <a href="#" class="signc_button"> to every html file so that it doesn't cause error*/
document.querySelector('.category_container_topic5').addEventListener('click',Music);
document.querySelector('.category_container_topic3').addEventListener('click',Gaming);
document.querySelector('.category_container_topic2').addEventListener('click',Health);
document.querySelector('.category_container_topic1').addEventListener('click',Electronics);
document.querySelector('[href = "#home"]').addEventListener('click',search);
document.querySelector('input[type = "checkbox"]').addEventListener('click',darkMode);
document.querySelector('.list_card_title_like-button1').addEventListener('click',likes);
document.querySelector('.list_card_title_dislike-button1').addEventListener('click',dislikes);
function homePage(){
   // var x = document.location;
    //console.log(x);
   // console.log(document.location = "../html/landing-page.html");
   //document.getElementById(".nav_header_title").innerHTML = x;
    
    document.location.href="../html/landing-page.html";
}
function Terms(){
    window.open("../Terms.html");
    
}
function login(){
    document.location.href="../html/login2.html";
}
function about(){
    document.location.href="../html/about-page.html";
}
function education(){
    
    console.log(sessionStorage.getItem('data-theme'));
    
    document.location.href="../html/education.html";
}
function details(){
    document.location.href="../html/list-details.html";

}
function Music(){
    document.location.href="../html/Music.html";
}
function Gaming(){
    document.location.href="../html/Gaming.html";
}
function Health(){
    document.location.href="../html/Health.html";
}
function Electronics(){
    document.location.href="../html/Electronics.html"
}
function search(){
    document.location.href="../html/product-search.html";
}
function likes(){
    like += 1
    console.log(like);
    document.querySelector('.list_card_title_num1').textContent = like;
}
function dislikes(){
    dislike += 1
    console.log(dislike);
    document.querySelector('.list_card_title_num2').textContent = dislike;
}
function darkMode(){
    var checkbox = document.querySelector('input[id=tex]');
        
        checkbox.addEventListener('change',function(){
            if(this.checked){
                trans()
                document.documentElement.setAttribute('data-theme','dark')
                sessionStorage.setItem('data-theme','dark')
                   
            }
            else{
                trans()
                document.documentElement.setAttribute('data-theme','light')
                sessionStorage.setItem('data-theme','light')
            }
        })
    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        },1000)
    }
}
