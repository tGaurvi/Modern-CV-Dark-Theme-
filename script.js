$(document).ready(function(){
    $("#profile_ripple").ripples({
    resolution: 200,
    perturbance: .054,
    });
});
const bars=document.querySelectorAll('.progress-bar');

bars.forEach(function(bar){
    let percentage=bar.dataset.percent ;
    let tooltip=bar.children[0];
    tooltip.innerText=percentage;
    bar.style.width=percentage;
});

var icon =document.getElementById("light");

icon.onclick=function(){
    document.body.classList.toggle(".light-theme");
}

// image filter

var $wrapper=$('.images');
$wrapper.isotope({
    filter:'*' ,
    layoutMode:'masonry',
    animationOptions:{
        duration:750,
        easing:'linear'
    }

})

let links=document.querySelectorAll('.tabs a');

links.forEach(link=>{
    let selector =link.dataset.filter;
    console.log(selector)
    link.addEventListener('click',function(e){
        e.preventDefault();
        $wrapper.isotope({
            filter:selector,
            layoutMode:'masonry',
            animationOptions:{
                duration:750,
                easing:'linear'
            }
        
        });

     

        links.forEach(link=>{
            link.classList.remove('active')
        })
        e.target.classList.add('active');
    })
})
