const container=document.querySelector('.project_container'),
    slides=document.querySelectorAll('.project_card'),
    doc=document.querySelector('.projects'),
    docWidth=document.querySelector('.body'),
    gallery_img=document.querySelector('.zippy_img'),
    icon=document.querySelectorAll('.btn-icon'),
    main=document.querySelector('.main_1');

    let Changevalue=0;

const nextBtn=document.querySelector('#nextBtn'),
    prevBtn=document.querySelector('#prevBtn');

let cardWidth=slides[0].clientWidth,
    containerWidth=container.clientWidth,
    total=5,
    count=3,
    crr=count,i=0;

window.addEventListener('resize',()=>{

    if((window.innerWidth<1060 ) && (window.innerWidth>=992)){
            count=4;
            crr=count; 
            cardWidth=slides[0].clientWidth;
            container.style.transition = "transform 0.4s ease-in-out";
            container.style.transform='translateX('+(0)+'px)'; 
            i=0;
          
    }else{
        
            count=3;
            crr=count;
            cardWidth=slides[0].clientWidth;
            container.style.transition = "transform 0.4s ease-in-out";
            container.style.transform='translateX('+(0)+'px)';
            i=0; 
        
    }
})


nextBtn.addEventListener('click',()=>{
    // console.log("clicked!");
    resizeWindowNext();

});


prevBtn.addEventListener('click',()=>{
    // console.log("clicked!");
    resizeWindowPrev();

});


const elem=document.querySelectorAll('.gallery-img');


for(let x=0; x<elem.length; x++){
    elem[x].addEventListener('click',()=>{
        clicked(x+1);
    });
}

for(let x=0; x<icon.length; x++){
    icon[x].addEventListener('click',()=>{
        changeBackground(x+1);
    })

}

function clicked(value){
    gallery_img.style.background='url("img/img-'+value+'.jpg")';
    gallery_img.style.backgroundSize='cover';
    gallery_img.style.backgroundRepeat='no-repeat';
    gallery_img.style.backgroundPosition='center';

    for(let x=0; x<elem.length; x++){
        if(x==(value-1)){
            elem[x].style.border='0.2rem solid black';
        }else{
            elem[x].style.border='0';
        }
    };   
}

function changeBackground(value){

    main.style.background='url("img/m-'+value+'.png")';
    main.style.backgroundSize='cover';
    main.style.backgroundRepeat='no-repeat';
    main.style.backgroundPosition='center';

    Changevalue=value;

    for(let x=0; x<icon.length; x++){
        if(x==(value-1)){
            icon[x].style.backgroundColor='white';
        }else{
            icon[x].style.backgroundColor='transparent';
        }
    };
}

setInterval(()=>{
    if(Changevalue>=3){
        Changevalue=0;
    }
    changeBackground((Changevalue+1));
},4000)

function resizeWindowPrev(){
    
   if(i>=1){

            --i;
            container.style.transition = "transform 0.4s ease-in-out";
            container.style.transform='translateX('+(-(cardWidth)*i)+'px)';
            crr--;
            console.log("i--> "+i+" count--> "+crr)
       
    }
}


function resizeWindowNext(){

    if(crr<total){
        ++i;
        container.style.transition = "transform 0.4s ease-in-out";
        container.style.transform='translateX('+(-(cardWidth)*i)+'px)';
        crr++;
        console.log("i--> "+i+" count--> "+crr)
   }
}


function video(url){
    document.getElementById("video_slider").src=url;
}