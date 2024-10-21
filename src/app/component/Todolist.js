const Todolist = ({ tasks, deleteList, edit, done }) => {
  return (
    <div className="mt-3 pt-3 border-top ">
      {/* {tasks.map((a) => {
              return(
                <div className='d-flex row gap-2 border rounded align-items-center p-2 m-1'> 
                  <input type="checkbox" checked={a.isDone} onClick={()=>done(a.id)}  className="col"/>
                  <p className='m-0 col-4'>{a.input}</p>
                  <p className='m-0 col-2'>{ a.isCore ? <i class="bi bi-star-fill" ></i> : <i class="bi bi-star"></i>} </p>
                  <p className='m-0 col-2'> Type: {a.type === "0" ? "none": a.type=== "1" ? "personal": a.type=== "2" ? "work" : "others"}</p>
                  <button className='btn col-2  btn-danger' onClick={()=>deleteList(a.id)}>Delete</button>
                  <button className='btn col-1  btn-warning' onClick={()=>edit(a.id)}>Edit</button>
                </div>
              )
            })} */}
    </div>
  );
};
export default Todolist;
