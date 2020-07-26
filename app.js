
var main = document.getElementById("content");

function addItem()
{

    var item = document.getElementById("text");

    var list = document.createElement("ul");

    

    var listItem = document.createElement("li");

    listItem.className = "listItem";

    var listText = document.createTextNode(item.value);

    

    main.appendChild(list);
    list.appendChild(listItem);
    listItem.appendChild(listText);

    item.value = "";

    var check = document.createElement("input")

    check.setAttribute("type", "checkbox");

    check.className = "checkBox";

    var edit = document.createElement("button")
    var del = document.createElement("button")

    del.className = "btn2";
    edit.className = "btn2"
    

    var delText = document.createTextNode("Delete")
    var editText = document.createTextNode("Edit")


    del.setAttribute("onclick", "deleteRow(this)")
    edit.setAttribute("onclick", "editRow(this)")

    listItem.appendChild(check)

    listItem.appendChild(edit)
    listItem.appendChild(del)
    
    edit.appendChild(editText)
    del.appendChild(delText)


    item.value = "";

    
    l


}

function deleteRow(e)
{
    e.parentNode.remove();
}

function editRow(e)
{

    var val = e.parentNode.firstChild.nodeValue;

    
    var a = prompt("Enter updated item:", val)
    

    e.parentNode.firstChild.nodeValue = a;

}

function deleteAll(){

    main.innerHTML = ""
}