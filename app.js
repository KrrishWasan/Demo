gsap.to("#page2 h2",{
    transform: "translateX(-170%)", // Corrected here
    scrollTrigger:{
        trigger:"#page2",                   //trigger is used generally for defining that this animation is used on which element but in case where we are going to use pins we use onlty the parent element
        scroller:"body",                    //scroller is always set to body
        markers:true,                       //this shows on the page from where does the animation start and end
        start:"top 0%",                    //this specifies the position of start trigger of animation on the page here it is set to 0% from top which means at the top of the page
        end:"top -120%",                   //this specifies the position of endpoint trigger of animation on the page here it is set to 100% from top which means 100vh more top than the start of the page here if we increase the % then it will be done more slower eg. at -150% it will be a lot more smoother
        scrub:3,                           //scrub is the smoothness of the transition it varies from 1-5, 2 is generl
        pin:true                           //pin is used to make u go thru the animation untill endpoint is triggered
    }
})