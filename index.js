"use strict";

const hamburger = document.querySelector(".hamburger");
const container = document.querySelector(".container");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", function () {
  navList.classList.toggle("hidden");
  container.classList.toggle("hidden");
});
