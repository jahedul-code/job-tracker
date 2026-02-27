let currentTab = "all";
const tabActive = ["bg-blue-500", "text-white"];
const tabInactive = ["bg-white", "text-gray-500"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const emptySate = document.getElementById("empty-state");


function switchTab(tab) {
    
    const tabs = ["all", "interview", "rejected"];
    currentTab = tab;
    for (const t of tabs){
        const tabName = document.getElementById("tab-" + t);
    if(t === tab){
        tabName.classList.remove( ...tabInactive);
        tabName.classList.add( ...tabActive);
    }else{
        tabName.classList.add( ...tabInactive);
        tabName.classList.remove( ...tabActive);
    }
    }

    const pages = [allContainer, interviewContainer, rejectedContainer];
    for (const div of pages) {
        div.classList.add("hidden");
        
    }
    // emptySate.classList.remove("hidden");


    if(tab === "all"){
        allContainer.classList.remove("hidden");
        if(allContainer.children.length < 1){
            emptySate.classList.remove("hidden");
        }
    }else if(tab === "interview"){
        if(interviewContainer.children.length < 1){
           emptySate.classList.remove("hidden"); 
        }
        interviewContainer.classList.remove("hidden");
    }else{
        if (rejectedContainer.children.length < 1){
            emptySate.classList.remove("hidden");
        }
        rejectedContainer.classList.remove("hidden");
    }
   updateStat();
}


// stat update
const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectedStat = document.getElementById("stat-rejected");
const availableStat = document.getElementById("available");
switchTab(currentTab);

totalStat.innerText = allContainer.children.length;

document.getElementById("job-container").addEventListener("click", function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const parent = card.parentNode;
    const status = card.querySelector(".status");
    
    
    if (clickedElement.classList.contains("interview")){
        status.innerText = "Interviewed";
        interviewContainer.appendChild(card);
    
    }
    if (clickedElement.classList.contains("rejected")){
        status.innerText = "Rejected"
        rejectedContainer.appendChild(card);
        
    }
    if (clickedElement.classList.contains("delete")){
      parent.removeChild(card);
         
    }
    updateStat();
});

function updateStat() {

  const counts = {
    all: allContainer.children.length,
    interview: interviewContainer.children.length,
    rejected: rejectedContainer.children.length,
  };
  totalStat.innerText = counts.all;
  interviewStat.innerText = counts.interview;
  rejectedStat.innerText = counts.rejected;
  
  availableStat.innerText = counts[currentTab];

  if (counts[currentTab] < 1 ){
    emptySate.classList.remove("hidden");
  }else{
    emptySate.classList.add("hidden");
  }
}
updateStat();
