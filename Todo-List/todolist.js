function newElement() {
    var inputValue = document.getElementById("myInput").value;
    var li = document.createElement("li");
    li.textContent = inputValue;
    
  if (inputValue == '') {
    alert("You must write something!");
  } else {
    document.getElementById("mylist").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("span");
  span.textContent='Delete'
  li.appendChild(span);
  span.className = "delete";

  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
}; 
}
var list = document.getElementsByTagName('ul')[0];
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// function abc() {
//   var inputValue = "abc";
//   var li = document.createElement("li");
//   li.textContent = inputValue;
// }
//  abc();


