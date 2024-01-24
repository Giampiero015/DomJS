const addProduct = () => {

  const value = document.querySelector("#container").children[1].value;
  const ul = document.querySelector("#my-list");
  const li = document.createElement("div");
  li.innerText = value;

  const box = document.createElement("input");
  box.type = "checkbox";

  ul.appendChild(box);
  ul.appendChild(li);


};
