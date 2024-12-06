const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    
    const isOpen = dropDownMenu.classList.contains('open');
    
    if (isOpen) {
        toggleBtnIcon.classList.remove('fa-bars'); 
        toggleBtnIcon.classList.add('fa-times');   
    } else {
        toggleBtnIcon.classList.remove('fa-times');
        toggleBtnIcon.classList.add('fa-bars');  
    }
};

