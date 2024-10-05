import React from 'react'
import './App.css';
 function App() {
   return (
    <>
       <div className="card-group">
        
       <Card1 /><Card2/><Card3/> 
       
       
       </div>   
     </>
   );
 }

 function Card1(){
   return(
   React.createElement("div",{className:"card-body", id:"card-body1"},
   React.createElement("div", {className:"card-head", id:"card-head1"},
   React.createElement("h6", {className:"card-title"}, "FREE"),
   React.createElement("h2", {className:"card-price"}, "$0/month")),
   React.createElement("div", {className:"list-card"},
   React.createElement("p", {className:"list"}, "✔️ Single User"),
   React.createElement("p", {className:"list"}, "✔️ 50GB Storage"),
   React.createElement("p", {className:"list"}, "✔️ Unlimited Public Project"),
   React.createElement("p", {className:"list"}, "✔️ Community Access"),
   React.createElement("p", {className:"listx"}, "✖️ Unlimited Private Project"),
   React.createElement("p", {className:"listx"}, "✖️ Dedicated Phone Support"),
   React.createElement("p", {className:"listx"}, "✖️ Free Subdomain"),
   React.createElement("p", {className:"listx"}, "✖️ Monthly Status Report")),
   React.createElement("button", {className:"btn"}, "BUTTON"))    
 )}

 function Card2(){
  return(
  React.createElement("div",{className:"card-body", id:"card-body2"},
  React.createElement("div", {className:"card-head", id:"card-head2"},
  React.createElement("h6", {className:"card-title"}, "PLUS"),
  React.createElement("h2", {className:"card-price"}, "$9/month")),
  React.createElement("div", {className:"list-card"},
  React.createElement("p", {className:"list"}, "✔️ 5 Users"),
  React.createElement("p", {className:"list"}, "✔️ 50GB Storage"),
  React.createElement("p", {className:"list"}, "✔️ Unlimited Public Project"),
  React.createElement("p", {className:"list"}, "✔️ Community Access"),
  React.createElement("p", {className:"list"}, "✔️ Unlimited Private Project"),
  React.createElement("p", {className:"list"}, "✔️ Dedicated Phone Support"),
  React.createElement("p", {className:"list"}, "✔️ Free Subdomain"),
  React.createElement("p", {className:"listx"}, "✖️ Monthly Status Report")),
  React.createElement("button", {className:"btn"}, "BUTTON"))    
  )   
   }

function Card3(){
  return(
  React.createElement("div",{className:"card-body", id:"card-body2"},
  React.createElement("div", {className:"card-head", id:"card-head3"},
  React.createElement("h6", {className:"card-title"}, "PRO"),
  React.createElement("h2", {className:"card-price"}, "$49/month")),
  React.createElement("div", {className:"list-card"},
  React.createElement("p", {className:"list"}, "✔️ Unlimited Users"),
  React.createElement("p", {className:"list"}, "✔️ 50GB Storage"),
  React.createElement("p", {className:"list"}, "✔️ Unlimited Public Project"),
  React.createElement("p", {className:"list"}, "✔️ Community Access"),
  React.createElement("p", {className:"list"}, "✔️ Unlimited Private Project"),
  React.createElement("p", {className:"list"}, "✔️ Dedicated Phone Support"),
  React.createElement("p", {className:"list"}, "✔️ Free Subdomain"),
  React.createElement("p", {className:"list"}, "✔️ Monthly Status Report")),
  React.createElement("button", {className:"btn", id:"btn3"}, "BUTTON"))    
  )}
 export default App

