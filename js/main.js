// var band = [{
//         firstName: 'John',
//         lastName: 'Lennon'
//     },
//     {
//         firstName: 'Paul',
//         lastName: 'McCartney'
//     }
// ];
//
// for (var member of band) {
//     var items = member.firstName + ' ' + member.lastName;
//     $("#item").append(
//         "<li>" +
//         member.firstName + ' ' + member.lastName + "</li>"
//     );
// }
// var months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');


// Remove Element From List
// function registerClickHandler() {
//     // Register click event handler for button of class 'remove'
//     "use strict";
//     this.parentNode.parentNode.removeChild(this.parentNode);
// }
// var listen = document.getElementsByClassName("remove");
// var i;
// for (i = 0; i < listen.length; i++) {
//     listen[i].addEventListener("click", registerClickHandler);
// }

// remove element from list
// function myFunction() {
//     var listItems = document.getElementsByTagName("li"); // or document.querySelectorAll("li");
//     for (var i = 0; i < listItems.length; i++) {
//         listItems[i].onclick = function() {
//             this.parentNode.removeChild(this);
//         }
//     }
// }
// myFunction();


// Add item
//window.onload=function() {
//   var button = document.getElementById("submitButton");
//   button.onclick = addItem;
// }
//
// function addItem() {
//         var textInput = document.getElementById("item");  //getting text input
//         var text = textInput.value;   //getting value of text input element
//         var ul = document.getElementById("ul");  //getting element <ul> to add element to
//         var li = document.createElement("li");  //creating li element to add
//         li.innerHTML = text;    //inserting text into newly created <li> element
//         li.onclick = function() {this.parentNode.removeChild(this);}
//     if (ul.childElementCount == 0) {  //using if/else statement to add items to top of list
//         ul.appendChild(li);       // will add if count of ul children is 0 otherwise add before first item
//     }
//     else {
//         ul.insertBefore(li, ul.firstChild);
//     }
// }


// AJAX get
// function show_items() {
//     jQuery.get('https://jsonplaceholder.typicode.com/todos/1', function(data) {
//         var i, html;
//         html  = '<ul>';
//         console.log(data);
//         for (i = 0; i < data["items"].length; i++) {
//             html += '<li>' + data["items"][i]["text"] + '</li>';
//         }
//         html += '</ul>';
//         $("#items").html(html);
//     });
// }
//
// show_items();

// Ajax Post
// $("#add-item").click(function() {
//         var text = $("#text").val();
//         jQuery.post('http://127.0.0.1:5000/api/v2/item', {
//             text: text
//         } , function(data) {
//             console.log(data);
//             if (data["error"]) {
//                 $("#msg").html('Error: ' + data["error"]);
//             }
//             if (data["ok"]) {
//                 $("#msg").html('Item ' + data["text"] + ' added');
//             }
//             show_items();
//
//         });
//        return false;
// });
