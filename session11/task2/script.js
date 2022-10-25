let shopList = [];

function addItem() {
  let li = document.createElement('li');
  let newItem = document.getElementById("item").value;

  li.innerHTML = newItem;
  li.className = newItem;

  let check=0;

  if (shopList.length == 0) {
    shopList.push(newItem);
    list.append(li);
    window.alert("Item was successfully added");
  }
  else {
    for (let i = 0; i < shopList.length; i++) {
      if (shopList[i] == newItem) {
        window.alert("You already have this item in your list!");
        check++;
        break;
      }
    }
    if (check == 0) {
      shopList.push(newItem);
      list.append(li);
      window.alert("Item was successfully added");
    }
  }
}

function deleteItem () {
  let newItem = document.getElementById("item").value;
  let index = shopList.indexOf(newItem);
  let li = document.getElementsByClassName(newItem);
  li[0].parentNode.removeChild(li[0]);
  shopList.splice(index,1);
  window.alert("Item was successfully removed");
}

