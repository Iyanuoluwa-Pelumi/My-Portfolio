function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";

  // To Add scroll event listener when sidebar is shown
  window.addEventListener("scroll", hideSidebarOnScroll);
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";

  // Remove scroll event listener after sidebar is hidden
  window.removeEventListener("scroll", hideSidebarOnScroll);
}

function hideSidebarOnScroll() {
  hideSidebar();
}

function redirect() {
  hideSidebar();
}

function scrollUp(){
  window.scrollTo({
   top: 0,
   behavior: 'smooth'
  }
  )
}

document.addEventListener("DOMContentLoaded", function () {
  const arrow = document.querySelector(".arrow-up");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 1000) {
      arrow.style.display = "flex";
    } else {
      arrow.style.display = "none";
    }
  });
});
