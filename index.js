let currentTab = "all";
const tabActive = ["bg-blue-500", "text-white"];
const tabInactive = ["bg-white", "text-gray-500"]

function switchTab(tab) {
    
    const tabs = ["all", "interview", "rejected"];

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
   
}
switchTab(currentTab);