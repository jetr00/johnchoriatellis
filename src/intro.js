import "./intro.css"

let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoS = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
	
    setTimeout(()=>{
		
        logoS.forEach((span, idx) => {
            setTimeout(()=>{
			    span.classList.add("active");
		    }, (idx + 1) * 400)
	    });
	
        setTimeout(()=>{
	    	logoS.forEach((span, idx)=>{
	    		setTimeout(()=>{
	    			span.classList.remove("active");
	    			span.classList.add("fade");
	    		}, (idx + 1) * 50)
	    	});
	    }, 2000);

        setTimeout(()=>{
            intro.classList.add("fade-out");
            setTimeout(() => {
                intro.style.display = "none";
            }, 600);
        }, 2300)
    })
})