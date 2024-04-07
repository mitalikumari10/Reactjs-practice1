
//CREATING HEADING USING REACT
/*const heading=React.createElement("h1",
{id:"heading"},
"hello from mitali");
const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);*/


 //HEIRARCHY OF ROOT->PARENT->CHILD->H1 TAG
 /*const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"h1 tag")));
 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);*/


 //HEIRARCHY OF ROOT->PARENT->SIBLINGS->H1 TAG,H2 TAG
 const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"siblings"},[React.createElement("h2",{},"h2 tag"),React.createElement("h1",{},"h1 tag"),]));
 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);
