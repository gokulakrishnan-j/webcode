document.body.innerHTML=`<nav class="search"><input type="text" class="inputs" placeholder="Pokemon_Name"> <button onclick="inputFunction()" class="searchButton" >SEARCH</button><div class="searchContant"></div></nav>`

function serachBar(pokemonSerach){
    console.log(pokemonSerach)
    var serachContant=document.querySelector('.searchContant')

    serachContant.innerHTML=`<div class="box_search">
 <div class="name_search">${pokemonSerach.name}</div> 
 <div>
 <img src="${pokemonSerach.sprites.other["official-artwork"].front_default}" class="image_search" alt="${pokemonSerach.name}"> 
 </div>
 <div class="contant">
 <h5>Ability:  ${pokemonSerach.abilities[0].ability.name}</h5>
 <h5>Moves: ${pokemonSerach.moves[0].move.name}</h5>
 <h5>Weight: ${pokemonSerach.weight}</h5>
 </div>

 </div>`
}


async function inputFunction(){
var inputs=document.querySelector('.inputs')
var inputName=inputs.value
    try{
       let data= await fetch(`https://pokeapi.co/api/v2/pokemon/${inputName}`);
        let pokemoni= await data.json();
        serachBar(pokemoni);
    }catch(error){
    console.log("error",error)
}
}



function keypressSearch(pokemonSerach){
    console.log(pokemonSerach)
    var serachContant=document.querySelector('.searchContant')

    serachContant.innerHTML=`<div class="box_search">
 <div class="name_search">${pokemonSerach.name}</div> 
 <div>
 <img src="${pokemonSerach.sprites.other["official-artwork"].front_default}" class="image_search" alt="${pokemonSerach.name}"> 
 </div>
 <div class="contant">
 <h5>Ability:  ${pokemonSerach.abilities[0].ability.name}</h5>
 <h5>Moves: ${pokemonSerach.moves[0].move.name}</h5>
 <h5>Weight: ${pokemonSerach.weight}</h5>
 </div>

 </div>`
}

document.addEventListener('keypress',(e)=>{
    if(e.code=='Enter'){
        async function clickFunction(){
            var inputs=document.querySelector('.inputs')
            var inputName=inputs.value
                try{
                   let data= await fetch(`https://pokeapi.co/api/v2/pokemon/${inputName}`);
                    let pokemoni= await data.json();
                    keypressSearch(pokemoni);
                }catch(error){
                console.log("error",error)
            }
            }clickFunction()
    }
    else{
        
    }
})

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function getting_pokemon_first(s){
    console.log(s)
 
    document.body.innerHTML += ` 
    
     <div class="box_one">
 <div class="name_one">${s.name}</div> 
 <div>
 <img src="${s.sprites.other["official-artwork"].front_default}" class="image_one" alt="${s.name}"> 
 </div>
 <div class="contant">
 <h5>Ability:  ${s.abilities[0].ability.name}</h5>
 <h5>Moves: ${s.moves[0].move.name}</h5>
 <h5>Weight: ${s.weight}</h5>
 </div>

 </div>`
 
 
 
 }

 
function first(){

             
function pokeMon_first(first_twenty){
    var first_value;
    first_twenty.map((n)=>{      
 first_value=n.name
 async function poke_first(){

            try{
               let data= await fetch(`https://pokeapi.co/api/v2/pokemon/${first_value}`);
                let pokemon= await data.json();
                getting_pokemon_first(pokemon);
            }catch(error){
            console.log("error",error)
        }
    }poke_first()
})
    }

        async function get_pokemon_first(){
            try{
               let data= await fetch("https://pokeapi.co/api/v2/pokemon/");
                let poke= await data.json();
               
                  pokeMon_first(poke.results) 


            }catch(error){
            console.log("error",error)
            }
            }get_pokemon_first()
        }
     first()
    
    
////////////////////////////////////////////////////////////////////////////////////////////////////


    

function getting_pokemon_second(b){
    console.log(b)
  
    
     document.body.innerHTML += ` 
    <div class="box_two">
 <div class="name_two">${b.name}</div> 
 <div>
 <img src="${b.sprites.other["official-artwork"].front_default}" class="image_two" alt="${b.name}> 
 </div>
 <div class="contant">
 <h5>Ability: ${b.abilities[0].ability.name}</h5>
 <h5>Moves: ${b.moves[0].move.name}</h5>
 <h5>Weight: ${b.weight}</h5>
 </div>
 </div>`
 
 
 
 }


 function second(){

           
    function pokeMon_second(second_twenty){
    var second_value;
    second_twenty.map((nn)=>{
        second_value=nn.name
       
    
    async function poke_second(){
                    try{
                       let data= await fetch(`https://pokeapi.co/api/v2/pokemon/${second_value}`);
                        let pokei= await data.json();
                        getting_pokemon_second(pokei)
                     
                    }catch(error){
                    console.log("error",error)
                    }
                    }poke_second()
                })
    }
                async function get_pokemon_second(){
                    try{
                       let data= await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20");
                        let poker= await data.json();
                      pokeMon_second(poker.results)
    
                    }catch(error){
                    console.log("error",error)
                    }
                    }get_pokemon_second()
                }
                second()

                    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



            function getting_pokemon_third(z){
                console.log(z)
               
              
                 document.body.innerHTML += ` 
                 <div class="box_three">
             <div class="name_three">${z.name}</div> 
             <div>
             <img src="${z.sprites.other["official-artwork"].front_default}" class="image_three" alt="${z.name}> 
             </div>
             <div class="contant">
             <h5>Ability: ${z.abilities[0].ability.name}</h5>
             <h5>Moves: ${z.moves[0].move.name}</h5>
             <h5>Weight: ${z.weight}</h5>
             </div>
             </div>`
             
             
             
             }
            
            
             
             function third(){
            
                function pokeMon_third(third_twenty){
                    var third_value;          
                third_twenty.map((nnn)=>{
                    third_value=nnn.name
                    async function poke_third(){
                                    try{
                                       let data= await fetch(`https://pokeapi.co/api/v2/pokemon/${third_value}`);
                                        let pokec= await data.json();
                                        getting_pokemon_third(pokec)
                                    }catch(error){
                                    console.log("error",error)
                                } 
                            } poke_third()
                                })
                            
                            }    
                
                                
                                async function get_pokemon_third(){
                                    try{
                                       let data= await fetch("https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20");
                                        let poked= await data.json();
                                        
                                        pokeMon_third(poked.results)
                
                
                                    }catch(error){
                                    console.log("error",error)
                                    }
                                    }get_pokemon_third()
                
                                
                                  }  third()
                             function button_one(){
                                document.querySelector('#one_hide').style.display="flex"

                             }
                        
                           
                            