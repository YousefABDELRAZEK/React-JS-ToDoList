import React, {useState} from "react"
import pic from "./assets/wallpaperflare.com_wallpaper (6).jpg"
function Todolist(){
const [task,settask] =useState(["Eat breakfast","Take a Shower","Go to the gym"]);
const [newtask,setnewtask] =useState("");
function handleAdd (){
    if(newtask.trim()!==""){
settask(t=>[...t,newtask])
setnewtask("")
}
}
function HandleInput(event){
setnewtask(event.target.value)
}
function handledelete(index){
const updatetasks = task.filter((_, i)=> i !== index);
settask(updatetasks);
}
function handleup(index){
if(index>0){
    const updatetasks=[...task];
    [updatetasks[index],updatetasks[index-1]]=
    [updatetasks[index-1],updatetasks[index]]
settask(updatetasks);
}
}
function handledown(index){
    if(index<task.length-1){
    const updatetasks=[...task];
    [updatetasks[index],updatetasks[index+1]]=
    [updatetasks[index+1],updatetasks[index]]
settask(updatetasks);
    }
}
return(<div className="firstdiv">
    <h1>To-Do-List</h1>
    <div className="seconddiv">
        <input type="text" placeholder="Enter a task..." value={newtask} onChange={HandleInput} />
        <button className="addbtn" onClick={handleAdd}>Add</button>
    </div>
    <ol>
{task.map((task,index)=> <li key={index}>
<span className="span-txt">{task}</span>
<button className="del-btn" onClick={()=>handledelete(index)}>Delete</button>
<button className="up-btn" onClick={()=>handleup(index)}>⬆</button>
<button className="down-btn" onClick={()=>handledown(index)}>⬇</button>
</li>)}
    </ol>

</div>);
}
export default Todolist