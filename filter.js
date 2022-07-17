const filter = function (id) {
  let arr = [];
  let filterArr = [];
  let elementId = id;
  this.addElement = function (url, name, description, type) {
    arr.push({ url: url, name: name, description: description, type: type });
  };
  this.renderArray = function (isFullRender) {
    let portfolio = document.getElementById(elementId);
    while (portfolio.firstChild) {
      portfolio.removeChild(portfolio.lastChild);
    }
    let renderArr = [];
    if (isFullRender == true) {
      renderArr = arr;
    } else {
      renderArr = filterArr;
    }
    for (let i = 0; i < renderArr.length; i++) {
      let div = document.createElement("div");
      div.setAttribute("class", "item");
      let img = document.createElement("img");
      img.setAttribute("src", renderArr[i].url);
      let h4 = document.createElement("h4");
      h4.textContent = renderArr[i].name;
      let p = document.createElement("p");
      p.textContent = renderArr[i].description;
      div.appendChild(img);
      div.appendChild(h4);
      div.appendChild(p);

      portfolio.appendChild(div);
    }
  };
  this.filterArray = function (type) {
    filterArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].type == type) {
        filterArr.push(arr[i]);
      }
    }
    this.renderArray(false);
  };
};

const filterObject = new filter("portfolio"); // id
console.log(filterObject);
filterObject.addElement(
  "https://www.w3schools.com/w3images/mountains.jpg",
  "Mountains",
  "Lorem ipsum dolor..",
  "Nature"
);
filterObject.addElement(
  "https://www.w3schools.com/w3images/lights.jpg",
  "Lights",
  "Lorem ipsum dolor..",
  "Nature"
);
filterObject.addElement(
  "https://www.w3schools.com/w3images/nature.jpg",
  "Forest",
  "Lorem ipsum dolor..",
  "Nature"
);
filterObject.addElement(
  "https://www.w3schools.com/w3images/cars1.jpg",
  "Retro",
  "Lorem ipsum dolor..",
  "Cars"
);
filterObject.addElement(
  "https://www.w3schools.com/w3images/cars2.jpg",
  "Fast",
  "Lorem ipsum dolor..",
  "Cars"
);
filterObject.addElement(
  "https://www.w3schools.com/w3images/cars3.jpg",
  "Classic",
  "Lorem ipsum dolor..",
  "Cars"
);
filterObject.addElement(
  "https://www.w3schools.com/w3images/people1.jpg",
  "Girl",
  "Lorem ipsum dolor..",
  "People"
);
filterObject.addElement(
  "https://www.w3schools.com/w3images/people2.jpg",
  "Man",
  "Lorem ipsum dolor..",
  "People"
);
filterObject.addElement(
  "https://www.w3schools.com/w3images/people3.jpg",
  "Woman",
  "Lorem ipsum dolor..",
  "People"
);
filterObject.renderArray(true);
