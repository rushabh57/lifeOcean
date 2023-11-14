

const timeline = gsap.timeline({defaults: {duration:1} })
timeline
.from( '.navigation' ,
    {
        //  delay:0.65,
         y: '-100%' ,
         ease:'bounce',
         stagger:0.5,
    }
)
.from( 'li' ,
    {
         stagger:0.5,
         opacity:0
    }
)
.from( '.hero',
{
    opacity:0
}
)
.from( '.Section__2',
{
    opacity:0
}
)
.from( ' .Section__2 p',
{
 stagger:0.3,
 opacity:0
})
.from( '.Section__3',
{
    opacity:0
}
)
.from( '.form__container' , { opacity:0 }
)

// .from( 'footer',
// {
//  stagger:0.3,
//  y:'100%',
//  opacity:0
// })



