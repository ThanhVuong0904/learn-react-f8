import { useState } from "react";

function App() {
  const [job, setJob] = useState('')
  //toán tử ?? là
  //storageJobs mà là null hoặc undefine là nó sẽ lấy giá trị đằng sau (ở đây là mảng rỗng)
  const [jobs, setjobs] = useState(()=>{
    const storageJobs = JSON.parse(localStorage.getItem("jobs"))
    console.log(storageJobs);
    return storageJobs
  })
  const handleAdd = ()=> {
    setjobs(prev => {
      const newJobs = [...prev, job]
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem("jobs", jsonJobs)
      return newJobs
    })
    setJob('')
  }
  return (
    <div>
      <input type="text" value={job} onChange={(e) => setJob(e.target.value)}/>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job, index) => <li key={index}>{job}</li>)}
      </ul>
    </div>
  );
}

export default App;
