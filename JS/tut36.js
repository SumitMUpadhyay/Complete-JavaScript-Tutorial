console.log("This is tutorial 36 solution of tut -32");

// create a class library and implement the following:
// constructor must take the book list an an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class Library {
    constructor(bookList){
        this.bookList = bookList;
        this.issueBooks = {};
    }

    getBookList(){
         this.bookList.forEach(element => {
             console.log(element);
         });
    }

    issueBook(bookname, user){
      this.issuedBooks[bookname]==undefined{
          this.issuedBooks[bookname]=  user;
      }
      else{
          console.log("This book is already issued");
      }
    }

    returnBook(bookname){
       delete this.issuedBooks[bookname];
    }
}