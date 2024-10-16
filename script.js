const gallery = document.querySelector(".gallery");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

gallery.addEventListener("wheel", (e) => {
  e.preventDefault();
  gallery.scrollLeft += e.deltaY * 3;
  //   gallery.style.scrollBehavior = "smooth";
});

prevBtn.addEventListener("click", () => {
  gallery.scrollLeft -= 900;
});
nextBtn.addEventListener("click", () => {
  gallery.scrollLeft += 900;
});
