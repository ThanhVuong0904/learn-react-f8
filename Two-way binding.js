import { useState } from "react";
const courses = [
  {
    id: 1,
    name: "Javascript"
  },
  {
    id: 2,
    name: "PHP"
  },
  {
    id: 3,
    name: "C#"
  }
]
function App() {
  const [checkedRadio, setCheckedRadio] = useState()
  const [checkedCheckbox, setCheckedCheckbox] = useState([])

  //radio(chỉ chọn 1 cái)
  console.log(checkedRadio);
  const handleChangeRadio = (id) =>{
    setCheckedRadio(id)
  }
  //checkbox chọn nhiều cái
  console.log(checkedCheckbox);
  const handleChangeCheckbox = (id) => {
    const isChecked = checkedCheckbox.includes(id)
    setCheckedCheckbox(prev => {
      if(isChecked) {
        //Unchecked
        return checkedCheckbox.filter(item => item !== id)
      }
      else {
        return [...prev, id]
      }
    })
  }
  return (
    <div>
      {
        courses.map(course => {
          return (
            <div key={course.id}>
              <input 
                type="radio"
                checked={checkedRadio === course.id}
                onChange={() => handleChangeRadio(course.id)}
              />
              {course.name}
            </div>
          )
        })
      }
      <hr />
      {
        courses.map(course => {
          return (
            <div key={course.id}>
              <input 
                type="checkbox"
                checked={checkedCheckbox.includes(course.id)}
                onChange={() => handleChangeCheckbox(course.id)}
              />
              {course.name}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
