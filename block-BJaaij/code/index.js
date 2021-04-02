class BookList {
    constructor() {
        this.bookList = [];
        this.currentReadIndex = 0;
    }
    add(arrayOfBooks) {
        arrayOfBooks.forEach(e => { this.bookList.push(e) });
    }
    getCurrentBook() {
        return this.bookList[this.currentReadIndex];
    }
    getNextBook() {
        return this.bookList[this.currentReadIndex + 1];
    }
    getPrevBook() {
        return this.bookList[this.currentReadIndex - 1];
    }
    changeCurrentBook(i) {
        this.currentReadIndex = i;
    }
}

class Book {
    constructor(title, category, author) {
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = false;

    }
    markBookAsRead() {
        this.isRead = true;
        this.finishedDate = Date(Date.now());
    }

}

let book1 = new Book("Harry Potter P1", "fiction", "J K Rowling");
let book2 = new Book("Harry Potter P2", "fiction", "J K Rowling");
let book3 = new Book("Harry Potter P3", "fiction", "J K Rowling");
let book4 = new Book("Harry Potter P4", "fiction", "J K Rowling");
let book5 = new Book("Harry Potter P5", "fiction", "J K Rowling");

const myList = [book1, book2, book3, book4, book5];

let theBookList = new BookList(myList);
