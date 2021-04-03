
class BookList {
    constructor(root) {
        this.listOfBooks = [];
        this.root = root;
    }

    addBook(title, author, isbn) {
        let newBook = new Book(title, author, isbn);
        this.listOfBooks.push(newBook);
        this.createUI();
        return this.listOfBooks.length;
    }
    deleteBook(isbn) {
        let index = this.listOfBooks.forEach((e, index) => {
            if (e.isbn == isbn) {
                return index;
            }
        })
        this.listOfBooks.splice(index, 1);
        this.createUI();
        return this.listOfBooks.length;
    }
    createUI() {
        document.getElementById("tname").value = "";
        document.getElementById("aname").value = "";
        document.getElementById("isbnNo").value = "";

        this.root.innerHTML = "";
        this.listOfBooks.forEach(book => {
            let ui = book.createUI();
            ui.querySelector("i").addEventListener("click", this.deleteBook.bind(this, book.isbn));

            this.root.append(ui);
        });

    }

}
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isRead = false;
    }

    changeStatus() {
        this.isRead = !this.isRead;
    }

    createUI() {
        let listItem = document.createElement("li");
        listItem.classList.add("flex", "list-item");
        listItem.style.borderBottom = "1px dotted black";
        let subItem1 = document.createElement("span");
        subItem1.innerText = this.title;
        subItem1.classList.add("flex-30");
        let subItem2 = document.createElement("span");
        subItem2.classList.add("flex-25");
        subItem2.innerText = this.author;
        let subItem3 = document.createElement("span");
        subItem3.classList.add("flex-30");
        subItem3.innerText = this.isbn;
        let subItem4 = document.createElement("span");
        subItem4.classList.add("flex-10");
        let deleteButton = document.createElement("i");
        deleteButton.classList.add("fa", "fa-trash");
        subItem4.append(deleteButton);
        deleteButton.setAttribute("aria-hidden", "true");
        //deleteButton.addEventListener('click',handleDelete);
        listItem.append(subItem1, subItem2, subItem3, subItem4);
        return listItem;
    }
}

let myBookList = new BookList(document.querySelector(".booklist"));

let submit = document.querySelector(".btn-primary");

submit.addEventListener("click", (event) => {
    event.preventDefault();
    let title = document.getElementById("tname").value;
    let author = document.getElementById("aname").value;
    let isbn = document.getElementById("isbnNo").value;
    if (title && author && isbn) {
        myBookList.addBook(title, author, isbn);
    }

});
