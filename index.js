console.log("this is app");


showdata();

//adding node
localStorage.clear();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(){
 //changes
 let title =document.getElementById("title");
 let notetitle =localStorage.getItem("titles");
 if(notetitle == null)
 {
     titleobj =[]
 }
 else{
        titleobj = JSON.parse(notetitle);
 }
  titleobj.push(title.value);
  localStorage.setItem("titles",JSON.stringify(titleobj));


    let addTxt = document.getElementById("addTxt");
    let note = localStorage.getItem("notes");
    if(note == null)
    {
         notesobj = [];
    }
    else{
        notesobj = JSON.parse(note);  // we have JSON OBJECT(string) parsed  and maked it an array
    }
    if(addTxt.value != "")
    {
    notesobj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesobj)); // converting object to string
    addTxt.value = "";
    }
    showdata();
    title.value = "";
})


function showdata() {
    let html="";
    let notetitle = localStorage.getItem("titles");
    if(notetitle == null)
    {
        titleobj =[]
    }
    else{
           titleobj = JSON.parse(notetitle);
    }
    let noteEle = document.getElementById("notes");
    let note = localStorage.getItem("notes");
    if(note == null)
    {
        notesobj =[]
    }
    else{
        
          notesobj = JSON.parse(note);
    }
    for(let i=0 ;i<notesobj.length;i++)
    {
        if(notesobj[i]!="")
        {
        html = html + `<div class="card cardnote mx-2 my-2">
        <div class="card-body">
            <h5 class="card-title">${titleobj[i]}</h5>
            <div class="form-group">
                <p style="width: 18rem;">${notesobj[i]}</p>
            </div>
            <button id="${i}" class="btn btn-primary" onclick="deletenode(this.id)" >Delete</button>
        </div>
    </div>`
   noteEle.innerHTML = html;
        }
        
        
    }
      
}


//deleting notes
function deletenode(index) {
    let notetitle = localStorage.getItem("titles");
    if(notetitle == null)
    {
        titleobj =[]
    }
    else{
           titleobj = JSON.parse(notetitle);
    }

    let note = localStorage.getItem("notes");
    if(note == null)
    {
        notesobj =[]
    }
    else{
          notesobj =JSON.parse(note);
    }
    if(notesobj.length == 1)
  {  
    
    localStorage.clear();
  }
   
   else
   {
       titleobj.splice(index,1);
    notesobj.splice(index, 1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    localStorage.setItem("titles",JSON.stringify(titleobj));
        
   }  
  showdata();      
}

//searching for notes

     let search = document.getElementById("searchTxt");
     search.addEventListener("input",function(){
         let input = search.value;
       let card = document.getElementsByClassName("cardnote");
        Array.from(card).forEach(function(element){
            // console.log(element);
             cardtxt= element.getElementsByTagName("p")[0];
            //  console.log(typeof cardtxt.innerText);
             if(cardtxt.innerText.includes(input))
             {
                 element.style.display ="block";
             }
             else{
                element.style.display ="none";
             }
             
        })
     })