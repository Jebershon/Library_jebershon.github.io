// document.write("Hello");
function CreateBook(){
    return{
    title:"The Book",
    author:"The author",
    yearPublished:0,
    readStatus:"UnRead",
    price:0,
    getSummary:function(){
        return "[ Title: "+this.title+" Author: "+this.author+" Price: $"+this.price+" YearPublished:  "+this.yearPublished+" ReadStatus: "+this.readStatus+" ]";
    },
    toggleReadStatus:function(status){
       this.readStatus=status;
    }
};
}
let book=CreateBook();
book.title="Song of Ice and Fire - Game of Thrones";
book.author="George R.R. Martin";
book.yearPublished=2001;
book.price=2000;
book.readStatus="UnRead";

let book1=CreateBook();
book1.title="Dance of Dragons - House of Dragons";
book1.author="George R.R. Martin";
book1.yearPublished=2010;
book1.price=2000;
book1.readStatus="UnRead";


let book2=CreateBook();
book2.title="Chamber of Secrets - Harry potter";
book2.author="J K Rowling";
book2.yearPublished=2010;
book2.price=2000;
book2.readStatus="Read";

let book3=CreateBook();
book3.title="Prisoner of azkabon - Harry potter";
book3.author="J K Rowling";
book3.yearPublished=2022;
book3.price=2000;
book3.readStatus="Read";

let book4=CreateBook();
book4.title="John wick";
book4.author="Bale";
book4.yearPublished=2000;
book4.price=2000;
book4.readStatus="Read";

let book5=CreateBook();
book5.title="Hangover-1";
book5.author="alan";
book5.yearPublished=1999;
book5.price=2000;
book5.readStatus="Read";

let book6=CreateBook();
book6.title="Hangover-2";
book6.author="phil";
book6.yearPublished=2088;
book6.price=2000;
book6.readStatus="Read";

let book7=CreateBook();
book7.title="Hangover-3";
book7.author="teddy";
book7.yearPublished=2099;
book7.price=2000;
book7.readStatus="Read";

let book8=CreateBook();
book8.title="KGF";
book8.author="rocky";
book8.yearPublished=2006;
book8.price=2000;
book8.readStatus="Read";

let library=Array();
function addBook(book){
    library.push(book);
}
function removeLastBook()
{
    if(library.pop()==undefined)
    {
        console.log("The array is Empty");
    }
    else
    {
    library.pop();
    console.log("The Element is removed Successfully");
    }
}
function addBookToFront(book)
{
    library.unshift(book);
}
function removefirstBook()
{
    if(library.shift()==undefined)
    {
        console.log("The array is Empty");
    }
    else
    {
    library.shift();
    console.log("The Element is removed Successfully");
    }
}
function getAllTitles()
{
    let arr=library.map(x=>x.title+'</br>');
    console.log(arr);
    return arr;
}
function getAllNames()
{
    let arr=library.map(x=>x.title);
    return arr;
}
function getBooksByName(tit)
{
    let newArr=[];
    newArr=library.filter(x=>x.title==tit);
    return newArr.map(x=>x.getSummary()+'</br>'+'</br>');
}
function getBooksByAuthor(auth)
{
    let newArr=[];
    newArr=library.filter(x=>x.author==auth);
    //console.log(newArr.map(x=>x.getSummary()+'</br>'+'</br>'));
    return newArr.map(x=>x.getSummary()+'</br>');
}
function getTotalBooksPublishedBefore(year){
    let Arr = library.filter(x=>x.yearPublished<year).reduce(p=>p=p+1,0);
   return Arr;
}
function removeBookByTitle(title){
    let index=library.findIndex(x=>x.title==title);
    console.log(index);
    library.splice(index,1);
}
function getBooksByReadStatus(status){
    let readBook=library.filter(x=>x.readStatus==status);
    return readBook.map(x=>x.getSummary()+'</br>'+'</br>');
}
function getSubLibrary(start,end){
    let tempLib=library.slice(start,end);
    return tempLib.map(x=>x.getSummary()+'</br>'+'</br>');
}
addBook(book);
addBook(book1);
addBook(book2);
addBook(book3);
addBook(book4);
addBook(book5);
addBook(book6);
addBook(book7);
addBook(book8);
function myTitles() {
document.getElementById("test").innerHTML = getAllTitles();
}
function myAuthor() {
    let  authu = document.getElementById("thor").value;
    document.getElementById("authuro").innerHTML = getBooksByAuthor(authu);
}
function myBooks() {
    let  tit = document.getElementById("boook").value;
    document.getElementById("hcl").innerHTML =getBooksByName(tit);
}
function myYear() {
    let  year = document.getElementById("year").value;
    document.getElementById("total").innerHTML = getTotalBooksPublishedBefore(year);
}
function mystatus() {
    let  status = document.getElementById("statu").value;
    console.log(status);
    document.getElementById("option").innerHTML = getBooksByReadStatus(status);
}
function subArray() {
    let  start = document.getElementById("start").value;
    let  end = document.getElementById("end").value;
    document.getElementById("poke").innerHTML = getSubLibrary(start,end);
}
// function mybooks() {
//     let titles=getAllNames();
//     var str='';
//     var month = titles;
//     for (var i=0; i < month.length;++i){
//     str += "<td>"+month[i]+"</td>"; // Storing options in variable
//     }
//     document.getElementById("gio").innerHTML = str;
//     }
function generateTable(){  
    let title=getAllTitles();
    mytable.innerHTML="<th>BOOKS:</th>";
    for(var i=0;i<title.length;i++)
    {
        mytable.innerHTML += "<td>"+title[i]+"</td>";
    }
}
function addBookdetailsfirst(){
    let  name = document.getElementById("in1").value;
    let  auth = document.getElementById("in2").value;
    let  year = document.getElementById("in3").value;
    let  price = document.getElementById("in5").value;
    let  state = document.getElementById("in4").value; 
if(name!=""){
    let tempbook=CreateBook();
    tempbook.title=name;
    tempbook.author=auth;
    tempbook.price=price;
    tempbook.yearPublished=year;
    tempbook.readStatus=state;
    addBookToFront(tempbook);
}
else{
    console.log("Empty Input!!!");
}
}
function addBookdetailslast(){
    let  name = document.getElementById("in1").value;
    let  auth = document.getElementById("in2").value;
    let  year = document.getElementById("in3").value;
    let  price = document.getElementById("in5").value;
    let  state = document.getElementById("in4").value; 
    if(name!=""){
    let tempbook=CreateBook();
    tempbook.title=name;
    tempbook.author=auth;
    tempbook.yearPublished=year;
    tempbook.price=price;
    tempbook.readStatus=state;
    addBook(tempbook);
}
else{
    console.log("Empty Input!!!");
}
}
function removeBookfirst()
{
    removefirstBook();
}
function removeBookend()
{
    removeLastBook();
}
function removetitlewise()
{
    let  name = document.getElementById("input2").value;
    removeBookByTitle(name);
}
function toggle() {
    let  name = document.getElementById("name").value;
    let  stats  = document.getElementById("sta").value;
    console.log(name+" "+stats);
    library.filter(x=>
        {if(x.title==name)
            {
                x.toggleReadStatus(stats);
            }
        });
    document.getElementById("modi").innerHTML="Successfully Toggles";
}