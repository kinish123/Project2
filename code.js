const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id==='grey')
        {
            body.style.backgroundColor='grey'
            //body.style.background=e.target.id
        }
        if(e.target.id==='white')
        {
            body.style.backgroundColor='white'
            //body.style.background=e.target.id
        }
        if(e.target.id==='blue')
        {
            body.style.backgroundColor='blue'
            //body.style.background=e.target.id
        }
        if(e.target.id==='yellow')
        {
            body.style.backgroundColor='yellow'
            //body.style.background=e.target.id
        }
        if(e.target.id==='purple')
        {
            body.style.backgroundColor='purple'
            //body.style.background=e.target.id
        }

        
    })
})