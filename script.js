$(document).ready(function(){
  var ul = $("<ul class='tree__list'></ul>");
  $(".tree").append(ul);
  buildTree(data, ul);

  setEvents();
 });

function buildTree(data, parentDom) {
  for(var i=0; i<data.length;i++){
    if (typeof data[i].children === 'undefined') {
      parentDom.append("<li class='tree__file'><a class='tree__file-name'>" + data[i].name + "</a></li>");
    }
    else {
      var ul = $("<ul class='tree__list tree__list--" + data[i].status + "'></ul>");
      var a = $("<a class='tree__folder-name tree__folder-name--" + data[i].status + "'>" + data[i].name + "</a>");
      var li = $("<li class='tree__folder'></li>");
      li.append(a);
      li.append(ul);
      parentDom.append(li);
      buildTree(data[i].children, ul);
    }
  }
};

function setEvents(){
  $(".tree__folder-name").click(function() {
    $(this).next(".tree__list").toggleClass("tree__list--close");
    $(this).toggleClass("tree__folder-name--close");
    $(this).toggleClass("tree__folder-name--open");
    $(this).next(".tree__list").toggleClass("tree__list--open");
  });
}


