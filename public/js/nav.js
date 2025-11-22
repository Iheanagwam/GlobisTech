window.addEventListener("DOMContentLoaded", function(){
  /* Mobile side bar variables*/
  const tab_closer = document.getElementById("tab_closer");
  const mobile_nav = document.getElementById("mobile_view_nav");
  const harmburger_con = document.getElementById("harmburger_con");
  /*Mobile side bar variables*/
  
  /* Mobile side barfunction*/
  harmburger_con.addEventListener("click", function(){
    mobile_nav.style.left = "0px";
    mobile_nav.classList.add("tabAnimation");
  });
  
  tab_closer.addEventListener("click", function(e) {
    mobile_nav.style.left = "-100%";
    mobile_nav.classList.add("tabAnimation");
  });
  /* Mobile side bar function*/
  
  /* Nav drop down*/
  const navExpands = document.querySelectorAll("#nav-sec");
  
  navExpands.forEach(navExpand => {
    navExpand.addEventListener("click", function(){
      const navCollapse = navExpand.nextElementSibling;
      const navCollapseChild = navCollapse.firstElementChild;
      const navListHeight = navCollapseChild.clientHeight;
      
      if(navCollapse.clientHeight === 0){
        navCollapse.style.height = navListHeight + "px";
        navCollapse.style.transition = "height 0.3s ease-in-out";
        navExpand.lastElementChild.textContent = "-";
      }else{
        navCollapse.style.height = 0 + "px";
        navCollapse.style.transition = "height 0.3s ease-in-out";
        navExpand.lastElementChild.textContent = "+";
      };
    });
  });
});