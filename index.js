document.addEventListener("DOMContentLoaded",()=>{
    const box = document.querySelector('.box');
    const Line1 = box.querySelector('.linie1');
    const Line2 = box.querySelector('.linie2');
    const Line3 = box.querySelector('.linie3');
    const DropNav = document.querySelector('.navbar-drop');

    let contor = 0;

    box.addEventListener('click',()=>{
        if(contor % 2 == 0){
            DropNav.classList.add("active-nav");
            contor++;
        }
        else {
            DropNav.classList.remove("active-nav");
            contor++;
        }
       
    })

    const MainVideo = document.querySelector('.main-body video');
    MainVideo.playbackRate = 0.8;

    /*
    const Swticher = document.querySelector('.display-selector');
    const ContainerImg = document.querySelector('.content-img');
    const Mobile = document.querySelector('.mobile');
    const Desktop = document.querySelector('.desktop');
    const ActiveSelector = document.querySelector('.selected-circle');


   

    function ActiveDesktop(){
        document.querySelector('.DesktopImg').classList.add('selected');
        document.querySelector('.MobileImg').classList.remove('selected');
        ActiveSelector.classList.remove('mobile-selected');
        ActiveSelector.classList.add('desktop-selected');
    }
    function ActiveMobile(){
        document.querySelector('.DesktopImg').classList.remove('selected');
        document.querySelector('.MobileImg').classList.add('selected');
        ActiveSelector.classList.remove('desktop-selected');
        ActiveSelector.classList.add('mobile-selected');
    }
    Desktop.addEventListener('click', ActiveDesktop);
    Mobile.addEventListener('click', ActiveMobile);
    */

    const ContainerPortofolio = document.querySelector('.container-portofoliu');
    const PortofolioCards = document.querySelectorAll('.card-portofoliu');
    const NextProject = document.getElementById('NextPortofolio');
    const PreviousProject = document.getElementById('BackPortofolio');
    const DotsContainer = document.querySelector('.dots-container');

    let Dots = [];

    for( i = 0; i< PortofolioCards.length; i++){
        let Dot= document.createElement('div');
        Dot.setAttribute('class', 'dot');
        DotsContainer.appendChild(Dot);
        Dots.push(Dot);
    }

    function UpdateDots(index){
        Dots.forEach(dot =>{
            dot.classList.remove('current-dot');
        })
        Dots[index].classList.add('current-dot');
    }

    
     function ScrollPortofolio(arg){
        let Portofolio_Card_Width = PortofolioCards[0].offsetWidth;
        ContainerPortofolio.scrollLeft += arg * Portofolio_Card_Width
     }
     NextProject.addEventListener('click',()=>{
        ScrollPortofolio(1);
     });
     PreviousProject.addEventListener('click',()=>{
        ScrollPortofolio(-1);
     });

     const ObserverPortofolio = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry =>{
            if (entry.isIntersecting)
                UpdateDots(Array.from(PortofolioCards).indexOf(entry.target));
        })
     },{
        threshold: 0.5
     });

    PortofolioCards.forEach(card =>{
      ObserverPortofolio.observe(card);
    })



    const CardQA = document.querySelectorAll('.card-qa');

    CardQA.forEach(card =>{
        let ContorPress = 0;
        const intrebare = card.querySelector('.intrebare');
        const raspuns = card.querySelector('.raspuns');
        const Icon = card.querySelector('i');
        card.style.height = intrebare.offsetHeight + 'px';

        card.addEventListener('click',()=>{
            console.log(`Inaltimea la inceput este ${intrebare.offsetHeight}`)
            if(ContorPress % 2 === 0){
                Expand(card,intrebare,raspuns);
                Icon.classList.add('rotate');
                ContorPress++;
            }
            else{
                Minimize(card,intrebare);
                Icon.classList.remove('rotate');
                ContorPress++;
            }
        })

    })
    function Expand(item,x,y){
        item.style.height = x.offsetHeight + y.offsetHeight + 20 + 'px'
    }
    function Minimize (item,x){
        item.style.height = x.offsetHeight + 'px';
        console.log(`Inaltimea dupa minimizare este ${x.offsetHeight}`)
    }

   
})
