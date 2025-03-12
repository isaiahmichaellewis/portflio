function GAME(){ 
    let start = document.getElementById("start")
    let stop = document.getElementById("stop")
    let intro = document.getElementById("intro")
    let next = document.getElementById("next")
    let choose1 = document.getElementById("choose1")
    let choose2 = document.getElementById("choose2")
    let choose3 = document.getElementById("choose3")
    let choose4 = document.getElementById("choose4")
    let choose5 = document.getElementById("choose5")
    let choose6 = document.getElementById("choose6")
    let choose7 = document.getElementById("choose7")
    let choose8 = document.getElementById("choose8")
    let choose9 = document.getElementById("choose9")
    let choose10 = document.getElementById("choose10")
    let choose11 = document.getElementById("choose11")
    let choose12 = document.getElementById("choose12")
    let choose13 = document.getElementById("choose13")
    let story = document.getElementById("story")
    

    gameStart(start,stop,intro,next,choose1,choose2,choose3,choose4,story)
    section(choose1,choose2,choose3,choose4,choose5,choose6,choose7,choose8,story)
    fightScene(choose7,choose8,choose9,choose10,choose11,choose12,choose13,story)


   


   

    

}




function gameStart(start,stop,intro,next,choose1,choose2,choose3,choose4,choose5,choose6,choose7,choose8,choose9,choose10,choose11,choose12,choose13,Health){
    
    start.classList.add("star");
    stop.classList.remove("star");
    intro.classList.remove("star");
     story.classList.add("Hide");
    
    
    intro.addEventListener("click" , e=>{
     intro.innerHTML =  "Armed with his father's enchanted sword and guided by the wisdom of the ancient sage, Elder FLOWERMAN, TOASTER STRUDEL journeyed through treacherous forests and daunting mountains.";
     next.classList.remove("star");
   




    },{once:true} )

    next.addEventListener("click" , e=>{
        next.classList.add("star");
        intro.classList.add("star");
        choose1.classList.remove("Hide");
        choose2.classList.remove("Hide");
        story.classList.remove("Hide");
        choose1.innerHTML = "<span>The</span> route of <span>Beginnings</span> and No Ends";
        choose2.innerHTML = "<span>The End</span> and no Beginnings";
        story.innerHTML = " treacherous forests has a cross roads the map has two directions";
        
         

     


     
        
     



    },{once:true})

     choose1.addEventListener("click" , e=>{
        choose3.classList.remove("Hide");
        choose4.classList.remove("Hide");
        choose4.innerHTML = "<span>CHALLENGE THE GOLEM</span>";
        choose3.innerHTML = "<span>Let's Talk it through</span>"  ;     
        story.innerHTML = "In the heart of the Dark Forest, Prince TOASTER STRUDEL encounters spectral guardians, sworn to protect its secrets. Armed with his father's enchanted sword, TOASTER STRUDDEL must either fight these apparitions or attempt to reason with them.";
       choose2.classList.add("Hide");
       choose1.classList.add("Hide");
     },{once:true})


    choose2.addEventListener("click" , e=>{
        choose1.classList.add("Hide"); 
        choose2.classList.add("Hide");
        choose3.classList.add("Hide");
        choose4.classList.add("Hide");
        start.classList.remove("star");
        story.innerHTML = "GAMEOVER";
     


     },{once:true})
            stop.addEventListener("click" , e=>{
        choose1.classList.add("Hide") ;
        choose2.classList.add("Hide");
        choose3.classList.add("Hide");
        choose4.classList.add("Hide");
        choose5.classList.add("Hide") ;
        choose7.classList.add("Hide");
        choose8.classList.add("Hide");
        choose9.classList.add("Hide") ;
        choose10.classList.add("Hide");
        choose11.classList.add("Hide");
        choose12.classList.add("Hide");
        choose13.classList.add("Hide");

        start.classList.remove("star");
        story.innerHTML = "GAMEOVER";
            },{once:true})

    return
}




function section(choose1,choose2,choose3,choose4,choose5,choose6,choose7,choose8,story){
    choose4.addEventListener("click" , e=>{
        choose3.classList.add("Hide") ;
        choose4.classList.add("Hide");
        choose5.classList.remove("Hide") ;
        choose6.classList.remove("Hide") ;       
        story.innerHTML= "Drawing his sword, Prince TOASTER STRUDDEL engages in a fierce battle with the spectral guardians. Each strike of his blade seems to weaken their ethereal forms, but they fight with an otherworldly strength that threatens to overwhelm him. WITH quick slash he steals the soul of Gaurdians gaurding the PRINCESS TOASTER OVEN.";
        choose5.innerHTML = "<span>Break the barrier of the PRINCESS TOASTER OVEN</span>";
        choose6.innerHTML = "<span>CHALLENGE THE BAKER</span>";

    },{once:true})


        
        
       
   choose3.addEventListener("click" , e=>{
        choose1.classList.add("Hide"); 
        choose2.classList.add("Hide");
        choose3.classList.add("Hide");
        choose4.classList.add("Hide");
        start.classList.remove("star");
        story.innerHTML = "GAMEOVER";

   },{once:true})

   choose6.addEventListener("click", e=>{
    choose6.classList.add("Hide");
    choose5.classList.add("Hide");
    choose8.classList.remove("Hide");
    choose7.classList.remove("Hide");     
    story.innerHTML= "THE BAKER sneers, unleashing dark tendrils of magic that writhe and twist, aiming to ensnare the valiant prince. Aldric dodges and weaves through the sinister onslaught, his movements swift and graceful. With each step, he closes the gap between them, determination burning in his eyes."; 
    choose7.innerHTML = "<span>DODGE HIS SLASH</span>";
    choose8.innerHTML = "<span>PARRY HIS HIT</span>";
},{once:true})

   choose5.addEventListener("click", e=>{
    choose5.classList.add("Hide")
    choose6.classList.add("Hide");
    choose3.classList.add("Hide");
    choose4.classList.add("Hide");
    start.classList.remove("star");
    story.innerHTML = "GAMEOVER";



   },{once:true})







        
    

    

    


}


function fightScene(choose7,choose8,choose9,choose10,choose11,choose12,choose13,story){ 
    choose8.addEventListener("click", e=>{
    choose10.classList.add("Hide")
    choose9.classList.add("Hide");
    choose8.classList.add("Hide");
    choose7.classList.add("Hide");
    start.classList.remove("star");
    story.innerHTML = "GAMEOVER";

 
   },{once:true})

  choose7.addEventListener("click", e=>{
    story.innerHTML = "Drawing upon his inner strength and the memories of his time with PRINCESS TOASTER OVEN with Elara, FLOWER MAN channels his resolve into a powerful counterattack . with a mighty roar,he charges forward,his sword blazing wth radiant light that sears through the darkness,inching closer to THE BAKER with each step."
    choose10.innerHTML = "<span> GO FOR HIS HEAD</span>"
    choose9.innerHTML = "<span>CUT THROUGH HIS ARMOUR</span>"
    choose8.classList.add("Hide")
    choose7.classList.add("Hide")
    choose9.classList.remove("Hide")
    choose10.classList.remove("Hide")
   },{once:true})



    choose9.addEventListener("click", e=>{
    choose9.classList.add("Hide");
    choose8.classList.add("Hide");
    choose10.classList.add("Hide");
    choose11.classList.add("Hide")
    start.classList.remove("star");
    story.innerHTML = "GAMEOVER";

 
   },{once:true})

   choose10.addEventListener("click", e=>{
    
    choose12.innerHTML = "<span>Release</span> the princess and <span> escape </span> the chambers"
    choose11.innerHTML = "Use a <span>SHIELD</span> cover your head from the <span>shattering roof</span>"
    choose9.classList.add("Hide")
    choose10.classList.add("Hide")
    choose11.classList.remove("Hide")
    choose12.classList.remove("Hide")
     story.innerHTML = "With a final,thunderous clash,TOASTER STRUDDEL sword pierce his neck through THE BAKER defenses and shattering his dark enchantments.THE BAKER staggers,his sinister facade crumbling away reveal the vulnerabilty beneath. Realease THE PRINCESS from her chamber before the roof callapse "


   },{once:true})


 choose12.addEventListener("click", e=>{
    choose11.classList.add("Hide");
    choose12.classList.add("Hide");
    choose10.classList.add("Hide");
    choose9.classList.add("Hide")
    start.classList.remove("star");
    story.innerHTML = "GAMEOVER";

 
   },{once:true})

    choose11.addEventListener("click", e=>{
    
    choose13.innerHTML = "<span>Go to THE PRINCESS TOASTER OVEN's Oven </span> "
    choose12.classList.add("Hide")
    choose11.classList.add("Hide")
    choose13.classList.remove("Hide")
     story.innerHTML = "As the chamber falls silent, PRINCE TOASTER STRUDDEL stands victorious his chest heaving with exertion but his spirit undaunted. WITH TOASTER OVEN PRINCESS on his lips,he strides forward to claim his PRINCESS and bring an end to the tyranny that had threatened their love."


   },{once:true})


   choose13.addEventListener("click", e=>{
    
    
    choose13.classList.add("Hide")
  
   
     story.innerHTML = "YOU WIN THE GAME"


   },{once:true})

   

   






   

}
