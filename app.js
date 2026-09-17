const modules=[
["Management","▥"],["System Administration","⚙"],["HR","♟"],["Purchase","🛒"],
["Inventory","▣"],["Production (PPC)","▥"],["Sales","▰"],["Quality","✓"],
["Maintenance","⚒"],["Accounts & Finance","₹"],["Gate Entry & Logistics","▣"],["Legal & Compliance","⚖"],
["Fixed Assets","▥"],["Document Vault","▰"],["Reports & Analytics","◔"]
];
const grid=document.getElementById("moduleGrid");
modules.forEach(([name,icon])=>{
 const b=document.createElement("button"); b.className="module"; b.innerHTML=`<div class="module-icon">${icon}</div><b>${name}</b>`;
 b.onclick=()=>alert(`${name} module selected`);
 grid.appendChild(b);
});
function clock(){
 const d=new Date();
 document.getElementById("date").textContent=d.toLocaleDateString("en-IN",{weekday:"long",day:"2-digit",month:"short",year:"numeric"});
 document.getElementById("time").textContent=d.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",hour12:true});
 const h=d.getHours(); document.getElementById("greeting").textContent=h<12?"Good Morning,":h<17?"Good Afternoon,":"Good Evening,";
}
clock();setInterval(clock,1000);
document.getElementById("menuBtn").onclick=()=>document.getElementById("sidebar").classList.toggle("collapsed");
document.getElementById("addNote").onclick=()=>{const n=prompt("Enter your note");if(n)alert("Note saved for this prototype.")};
document.getElementById("allModules").onclick=e=>{e.preventDefault();document.getElementById("moduleGrid").scrollIntoView({behavior:"smooth"})};
document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();document.getElementById("search").focus()}});
