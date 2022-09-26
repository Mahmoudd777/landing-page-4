// declare and making section
let counter = 0;
const createSection = () => {
  counter++;
  const content = `<section id="section${counter}" data-nav="Section ${counter}">
    <div class="landing__container">
    <h2>Section ${counter}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
  document.querySelector("main").insertAdjacentHTML("beforeend", content);
};
// end of section function
// creating 4 sections 
for (let i = 1; i < 5; i++) createSection();
// declare section and navlist variable
const NavList = document.getElementById("navbar__list");
const sections =Array.from(document.querySelectorAll("section"));
// making the navbar list
function creatListItem(){
    for(sec of sections){
        ListItem = document.createElement("li");
        ListItem.innerHTML = `<li><a herf="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a></li>`;
        NavList.appendChild(ListItem);
    }
}
creatListItem();

//end of nav bar list

// adding active class to the sections
window.onscroll = function(){
    document.querySelectorAll("section").forEach(function(active){
        if (
            active.getBoundingClientRect().top >= -400 &&
            active.getBoundingClientRect().top <= 150
        ){
            active.classList.add("your-active-class");
        } else {
            active.classList.remove("your-active-class");
        }
    });
};
// smothly going to sections
NavList.addEventListener("click",(soc)=>{
    soc.preventDefault();
    if(soc.target.dataset.nav) {
        document
        .getElementById(`${soc.target.dataset.nav}`)
        .scrollIntoView({behavior : "smooth"});
        setTimeout(()=>{
            location.hash = `${soc.target.dataset.nav}`;
        },240);
    }
});
// making more sections with "add sections" button
document.getElementById("btn").addEventListener("click", () => {
    createSection();
    createNavItems();
});

// save the header in variable
const header = document.querySelector(".page__header");
//disapper the header after 8s and appear while scrolling
let isScrolling;
document.onscroll = () => {
header.style.display = "block"
clearTimeout(isScrolling)
isScrolling = setTimeout(() => {
    header.style.display = "none";
}, 4000);
};
