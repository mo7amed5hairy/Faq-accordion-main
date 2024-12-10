const toggleBtns = document.querySelectorAll('.btn');

toggleBtns.forEach(btn => {

    btn.addEventListener('click', (e) => {
        for(let x = 0; x < toggleBtns.length; x++)
        {
           
            if(btn.value == x){
            const acc_content = document.querySelector(`.acc_content_${x}`);
            acc_content.classList.toggle('active')

            if(acc_content.classList.contains('active'))
            {
                btn.innerHTML = '<img class="btn_image" src="./assets/images/icon-minus.svg" alt="icon-plus">'

            }else{

                btn.innerHTML = '<img class="btn_image" src="./assets/images/icon-plus.svg" alt="icon-plus">'
                
            }
            
            }
        }
    })
    
});