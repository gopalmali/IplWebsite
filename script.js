function myFun(image,colour,head,logo){
    document.getElementById('myimage').src=image;
    document.querySelector('.empty').style.backgroundColor=colour;
    document.querySelector('button').style.backgroundColor=colour;
    document.getElementById('head').innerHTML=head;
    document.getElementById('logobg').src=logo;
}