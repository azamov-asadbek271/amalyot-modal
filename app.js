 const button = document.getElementById("btn-show");
 const modal = document.getElementById("modal")
 const close = document.getElementById("modal-btn");
 const overley = document.getElementById("overley")

 const add = () => {
     modal.classList.add("hiddin");
     overley.classList.add("hiddin");
 }
  const hiddinRemov = () => {
    modal.classList.remove("hiddin");
    overley.classList.remove("hiddin");
  };
 button.addEventListener("click",hiddinRemov)
 close.addEventListener("click",add);
 overley.addEventListener("click", add)
;
document.addEventListener("keydown", (e) => {
  if(e.key == "Escape") {
    modal.classList.add("hiddin");
    overley.classList.add("hiddin");
  }
});
