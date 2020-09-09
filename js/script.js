const tabs = document.querySelectorAll('.tabs-tablist-item');
const content = document.querySelectorAll('.tabs-content-item');
const tabsContent = document.querySelectorAll('.tabs-content');


function buttonClick(event){
  event.preventDefault();
  const link = event.currentTarget.getAttribute('href');
  const id = link.substring(1);
  console.log(id);
  
  for (let index = 0; index < content.length; index++){
    if (content[index].getAttribute('id') == id){
      content[index].style.display = 'block';
    }
  }  
}

function hover() {
  for (let index = 0; index < tabs.length; index++){
    tabs[index].style.borderBottom = 'none';  
    tabs[index].style.backgroundColor = '#fff';      
  }
}


for (let index = 0; index < content.length; index++){
  content[index].style.display = 'none';
}
content[0].style.display = 'block';


for (let index = 0; index < tabs.length; index++){
  tabs[index].addEventListener('click', buttonClick); 
  tabs[index].addEventListener('click', hover); 
}
