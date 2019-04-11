// var para = document.createElement("p");
// para.textContent = "Hello World"; 
// document.body.appendChild(para); 

// var listItems = ["Buy Groceries","Feed the cat","Do laundry", "Eat healthy"]
// var ul = document.createElement("ul")
// document.getElementById('myList').appendChild(ul);

// listItems.forEach(function(list){
// 	var li = document.createElement('li')
// 	ul.appendChild(li);
// 	li.innerHTML +=list;
// }
// )

// ul.removeChild(ul.childNodes[1]);

// ============================
// 2
// ============================

//  var demoId = document.getElementById("demo");
//   demoId.style.border = "1px solid purple";

//   var className = document.querySelector(".demo");
//   className.style.border = "1px solid orange";

//  var tag = document.getElementsByTagName("h2");
// var changeTagStyle = tag[2].style.border = "1px solid blue";

// var demoQuery = document.querySelector("#demo-query");
//   demoQuery.style.border = "1px solid grey";

// var qSAll = document.querySelectorAll(".demo-query-all");
// var qSAll2 = qSAll[0].style.border = "1px solid green";

// ============================
// 3
// ============================

// var firstLi = document.body.children[3].firstElementChild.style.color = "red";

// var lists = document.getElementsByTagName("li");

//  for (let li of lists) {
//     li.style.backgroundColor = "yellow";
//   }

// var lastli = document.body.children[3].lastElementChild.style.backgroundColor = "pink";

// var middleli = document.body.getElementsByTagName("li")[1];

// middleli.previousElementSibling.style.backgroundColor = "navy";
// middleli.nextElementSibling.style.backgroundColor = "navy";
// middleli.nextElementSibling.style.color = "white";

// ============================
// 5
// ============================

// 4. Iterate through the array of books. For each book, create a `p` element with the book title and author and append it to the page.
// 5. Use a `ul` and `li` to display the books.
// 6. Add a property to each book with the URL of the book cover, and add an `img` element for each book on the page.
// 7. Change the style of the book depending on whether you have read it or not.

 var booksArray = [
 {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   img: 'https://images-na.ssl-images-amazon.com/images/I/51EPMqvqURL._SX331_BO1,204,203,200_.jpg',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
   author: 'Brian Christian',
   img: 'https://images-na.ssl-images-amazon.com/images/I/41eVwAYYrbL._SX326_BO1,204,203,200_.jpg',
   alreadyRead: true,
  },
  {title: 'The Most Human Human',
   author: 'Brian Christian',
   img: 'https://images-na.ssl-images-amazon.com/images/I/41eVwAYYrbL._SX326_BO1,204,203,200_.jpg',
   alreadyRead: false,
  }
  ]


// for(i = 0; i < booksArray.length; i++) {
// 	var para = document.createElement("p");
// 	var node = document.createTextNode(booksArray[i].title + 'by' + booksArray[i].author);
// 	para.appendChild(node);
// 	document.body.appendChild(para);
// }

var booksUl = document.createElement('ul');
for (var i = 0; i < booksArray.length; i++) {
	var booksLi = document.createElement('li');
	var bookImg = document.createElement('img');
	bookImg.src = booksArray[i].img;
	booksLi.appendChild(bookImg);
	bookDescription = document.createTextNode(booksArray[i].title + 'by' + booksArray[i].author)
	booksLi.appendChild(bookDescription);
	if (booksArray[i].alreadyRead) {
		booksLi.style.color = 'grey';
	}
	booksUl.appendChild(booksLi)
}
document.body.appendChild(booksUl)

// for...of and for...in TODO