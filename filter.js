function openFilters() {
  console.log("clicked filters");
  document.getElementsByClassName("article2")[0].style.visibility = "visible";
  document.getElementsByClassName("filter_box")[0].style.visibility = "visible";
  document.getElementById("map").style.width = "80%";
  document.getElementsByClassName("open_filter_btn")[0].style.display = "none";
}

function closeFilters() {
  console.log("closed filters");
  document.getElementsByClassName("article2")[0].style.visibility = "hidden";
  document.getElementsByClassName("filter_box")[0].style.visibility = "hidden";
  document.getElementById("map").style.width = "100%";
  document.getElementsByClassName("open_filter_btn")[0].style.display = "block";
}

function openCityFilter() {
  document.getElementById("city_dropdown").classList.toggle("show");

  window.onclick = function (e) {
    if (!e.target.matches(".dropbtn")) {
      var myDropdown = document.getElementById("city_dropdown");
      if (myDropdown.classList.contains("show")) {
        myDropdown.classList.remove("show");
      }
    }
  };
}

function openDietaryFilter() {
  document.getElementById("dietary_dropdown").classList.toggle("show");

  window.onclick = function (e) {
    if (!e.target.matches(".dropbtn")) {
      var myDropdown = document.getElementById("dietary_dropdown");
      if (myDropdown.classList.contains("show")) {
        myDropdown.classList.remove("show");
      }
    }
  };
}

function openPriceRangeFilter() {
  document.getElementById("price_range_dropdown").classList.toggle("show");

  window.onclick = function (e) {
    if (!e.target.matches(".dropbtn")) {
      var myDropdown = document.getElementById("price_range_dropdown");
      if (myDropdown.classList.contains("show")) {
        myDropdown.classList.remove("show");
      }
    }
  };
}

function openRatingsFilter() {
  document.getElementById("ratings_dropdown").classList.toggle("show");

  window.onclick = function (e) {
    if (!e.target.matches(".dropbtn")) {
      var myDropdown = document.getElementById("ratings_dropdown");
      if (myDropdown.classList.contains("show")) {
        myDropdown.classList.remove("show");
      }
    }
  };
}
