export const LoaderContainer={
    hidden:{
        scaleY:0,
    },
    show:{
        scaleY:1,
        transition:{
            duration:0.6,
            ease:"easeIn",
            delayChildren:0.6
            
        }

    },
    

}

export const imageContainer={
    hidden:{
    },
    show:{
        transition:{
            staggerChildren:0.4
        }
    }


}
export const imageAnimation={
    hidden:{
        y:"100%"
    },
    show:{
        y:0,
        transition:{
            duration:0.4,
            ease:"linear"
        }
    }

}
export const imageBlock={
    hidden:{
        y:"-100%"
    },
    show:{
        y:0,
        transition:{
            duration:0.4,
            ease:"linear"
        }
    }
}
export const loaderContainer2={
    hidden:{
        scaleY:0
    },
    show:{
        scaleY:1,
        transition:{
            delay:5.2,
            duration:0.6,
            ease:"linear"
        }
    }
}


