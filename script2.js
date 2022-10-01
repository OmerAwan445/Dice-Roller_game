// Coding Challange #4 (Strings)
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const btn=document.querySelector('button');

btn.addEventListener('click',()=>{
const text=document.querySelector('textarea').value;
// underscore_case
const allNamesArr=text.trim().toLowerCase().split('\n');
for (let i = 0; i < allNamesArr.length; i++) {
    const splitName=allNamesArr[i].split('_');
    const secondWrd=splitName[1][0].toUpperCase() + splitName[1].slice(1); 
   const camelCaseName=splitName[0]+secondWrd;
   
   console.log(camelCaseName); 
}

})