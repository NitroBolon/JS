var app = angular.module('biblioteka', []);
var books = [];

app.controller('BibController', ['$http', function ($http) {
    var self = this;
    self.order = "title";
    self.books = [];
    $http.get('http://localhost:3000/books').success(function (data) {
    self.books = data;
    });
    this.setorder = function(neworder) {
        self.order=neworder;
    };
   }]);
    
   app.controller("BookController", ['$http', function ($http) {
    this.book = {};
    this.add = function (books) {
        addbook=this.book;
        $http.post('http://localhost:3000/books', addbook).success(function (data) {            
                books.push(data);
            });
    this.book = {};
    };
    this.update = function (books, id) {
        putbook=this.book;
        $http.put('http://localhost:3000/books' + '/' + id, putbook).success(function (data) {
        for(let i=0;i<books.length;i++){
            if(books[i].id==id){
                books[i]=data;
            }
        }        
            });
    this.book = {};
    };
    this.delete = function (books, id) {
        $http.delete('http://localhost:3000/books' + '/' + id).success(function () {       
        for(let i=0;i<books.length;i++){
            if(books[i].id==id){
                books.splice(i,1);
            }
        }      
            });
    };
   }]);

   

   