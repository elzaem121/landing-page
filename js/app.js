
// define global variables

const sections = Array.from(document.querySelectorAll("section"));
const navList = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();

// end global variables
// build dynamic navigation menu

function cerateListItem() {
  for (const section of sections) {
    const sectionName = section.getAttribute("data-nav");
    const sectionLink = section.getAttribute("id");
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}' id="mo">${sectionName}</a>`;
    fragment.appendChild(listItem);
    navList.appendChild(listItem);

    //smooth scroll when you click on item from navigation menu

    const sec = [...navList.querySelectorAll("li")];
    sec.forEach(myFunction);
    function myFunction(item, index) {
      listItem.addEventListener("click", (event) => {
        event.preventDefault();
        sections[index].scrollIntoView({ behavior: "smooth" });
      });
    }
  }
}
cerateListItem();

// add active class to the section on viewport
// add active class to the section's link
// remove active classes

function toggleActiveClass() {
  sections.forEach((section, i) => {
    let activeLink = navList.querySelectorAll(`.menu__link`)[i].parentElement;
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop >= 0 && sectionTop <= 300) {
      section.classList.add("your-active-class");
      activeLink.classList.add("active-link");
    } else {
      section.classList.remove("your-active-class");
      activeLink.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", toggleActiveClass);
