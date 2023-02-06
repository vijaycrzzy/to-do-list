var list=document.getElementsByTagName("li");
var list1 = document.querySelector('ul');
for( var i=0;i<list.length;i++)
{
  var span=document.createElement("span");
  span.className="close";
  var close=document.createTextNode("X");
  span.appendChild(close);
  list[i].appendChild(span);
}

var close=document.getElementsByClassName("close");
for(var i=0;i<close.length;i++)
{
  close[i].onclick=function(){
      var d=this.parentElement;
      d.style.display="none";
  }
}

function myList(){
  var li=document.createElement("li");
  var text=document.getElementById("mytext").value;
  var t=document.createTextNode(text);
  li.appendChild(t);
  if(text=="")
  {
      alert("Input field is empty");
  }
  else{
      document.getElementById("myul");
      myul.appendChild(li);
  }
  var list=document.getElementsByTagName("li");
for( var i=0;i<list.length;i++)
{
  var span=document.createElement("span");
  span.className="close";
  var close=document.createTextNode("X");
  span.appendChild(close);
  list[i].appendChild(span);
}
var close=document.getElementsByClassName("close");
for(var i=0;i<close.length;i++)
{
  close[i].onclick=function(){
      var d=this.parentElement;
      d.style.display="none";
  }
}
}
