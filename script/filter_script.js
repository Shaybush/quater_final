        // filter contries own code
        let rhodes, rome, budapest, paris, amsterdam, arr;
        window.onload = () => {
            rhodes = document.querySelector("#rhodes");
            rome = document.querySelector("#rome");
            budapest = document.querySelector("#budapest");
            paris = document.querySelector("#paris");
            amsterdam = document.querySelector("#amsterdam");
            arr = [rhodes, rome, budapest, paris, amsterdam];
            // cities = ['rhodes', 'rome', 'budapest', 'paris', 'amsterdam'];
            arr.forEach((e) => {e.classList.add("active");})
        }
        const change_Country = () => {
            let select_country = document.querySelector("#id_select").value;
            console.log(select_country);
            // all the contries appear
            if(select_country == "all"){               
                    document.querySelector("#id_span").innerHTML = "";
                    arr.forEach((e) => {
                        e.classList.add("active");
                    })       
            }
            // all the rest
            else{
                // searching existing object
                let select_country_object = eval(select_country);
                arr.forEach((e) =>{
                    if(e === select_country_object){
                        document.querySelector("#id_span").innerHTML = ` in ${select_country}`;
                        e.classList.add("active");
                    }
                    else{
                        e.classList.remove("active");
                    }
                });
            }
            


            // cities.forEach((e, index) =>{
            //     if(e == select_country){
            //         arr[index].classList.add("active");
            //     }
            //     else if(select_country == "all"){
            //         arr.forEach((e) => {
            //             e.classList.add("active");
            //         })
            //     }
            //     else{
            //         arr[index].classList.remove("active");
            //     }
            // })
        }