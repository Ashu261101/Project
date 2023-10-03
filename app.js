//var title=document.querySelector('.list-group-item:nth-child(2)')
//title.style.backgroundColor='green'
//var title1=document.querySelector('.list-group-item:nth-child(3)')
//title1.style.color='white'

var odd1=document.querySelectorAll('li:nth-child(2)')
for(var i=0;i<odd1.length;i++)
{
    odd1[i].style.color='green'
}

var odd=document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green'
}