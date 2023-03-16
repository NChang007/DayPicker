import React, { useEffect, useState } from "react";

const Home = () => {
  function openDayPicker(e) {
    e.preventDefault();
    document.querySelector("#dayPicker").classList.toggle("show");
  }
  const [selectedDays, setSelectedDays] = useState([])
  const [startT, setStartT] = useState('08:00')
  const [endT, setEndT] = useState('17:00')
  console.log(selectedDays);
  function handleSelectDay(day) {
    if(day =='sun'){
      let selectedD = document.querySelector(`#${day}`)
      selectedD.classList.add('odp_day_selected')
      let newDay = true
      if(selectedDays[0]){
        for(let i=0;i<selectedDays.length;i++){
          let dayN = selectedDays[i].name
          if(dayN == 'Sunday'){ newDay = false }
        }
        if(newDay == false){
          let filtered = selectedDays.filter((el) => el.name !== 'Sunday')
          setSelectedDays(filtered)
          selectedD.classList.remove('odp_day_selected')
        }else {
          let item = {
            name: "Sunday",
            startTime: '08:00',
            endTime: '17:00'
          }
          setSelectedDays([...selectedDays, item])
          // sortDays()
        }
      }else {
        let item = {
          name: "Sunday",
          startTime: '08:00',
          endTime: '17:00'
        }
        setSelectedDays([...selectedDays, item])
        // sortDays()
      }
    }else if(day =='mon'){
      let selectedD = document.querySelector(`#${day}`)
      selectedD.classList.add('odp_day_selected')
      let newDay = true
      if(selectedDays[0]){
        for(let i=0;i<selectedDays.length;i++){
          let dayN = selectedDays[i].name
          if(dayN == 'Monday'){ newDay = false }
        }
        if(newDay == false){
          let filtered = selectedDays.filter((el) => el.name !== 'Monday')
          setSelectedDays(filtered)
          selectedD.classList.remove('odp_day_selected')
        }else {
          let item = {
            name: "Monday",
            startTime: '08:00',
            endTime: '17:00'
          }
          setSelectedDays([...selectedDays, item])
          // sortDays()
        }
      }else {
        let item = {
          name: "Monday",
          startTime: '08:00',
          endTime: '17:00'
        }
        setSelectedDays([...selectedDays, item])
        // sortDays()
      }
    }else if(day =='tue'){
      let selectedD = document.querySelector(`#${day}`)
      selectedD.classList.add('odp_day_selected')
      let newDay = true
      if(selectedDays[0]){
        for(let i=0;i<selectedDays.length;i++){
          let dayN = selectedDays[i].name
          if(dayN == 'Tuesday'){ newDay = false }
        }
        if(newDay == false){
          let filtered = selectedDays.filter((el) => el.name !== 'Tuesday')
          setSelectedDays(filtered)
          selectedD.classList.remove('odp_day_selected')
        }else {
          let item = {
            name: "Tuesday",
            startTime: '08:00',
            endTime: '17:00'
          }
          setSelectedDays([...selectedDays, item])
          // sortDays()
        }
      }else {
        let item = {
          name: "Tuesday",
          startTime: '08:00',
          endTime: '17:00'
        }
        setSelectedDays([...selectedDays, item])
        // sortDays()
      }
    }else if(day =='wed'){
      let selectedD = document.querySelector(`#${day}`)
      selectedD.classList.add('odp_day_selected')
      let newDay = true
      if(selectedDays[0]){
        for(let i=0;i<selectedDays.length;i++){
          let dayN = selectedDays[i].name
          if(dayN == 'Wednesday'){ newDay = false }
        }
        if(newDay == false){
          let filtered = selectedDays.filter((el) => el.name !== 'Wednesday')
          setSelectedDays(filtered)
          selectedD.classList.remove('odp_day_selected')
        }else {
          let item = {
            name: "Wednesday",
            startTime: '08:00',
            endTime: '17:00'
          }
          setSelectedDays([...selectedDays, item])
          // sortDays()
        }
      }else {
        let item = {
          name: "Wednesday",
          startTime: '08:00',
          endTime: '17:00'
        }
        setSelectedDays([...selectedDays, item])
        // sortDays()
      }
    }else if(day =='thu'){
      let selectedD = document.querySelector(`#${day}`)
      selectedD.classList.add('odp_day_selected')
      let newDay = true
      if(selectedDays[0]){
        for(let i=0;i<selectedDays.length;i++){
          let dayN = selectedDays[i].name
          if(dayN == 'Thursday'){ newDay = false }
        }
        if(newDay == false){
          let filtered = selectedDays.filter((el) => el.name !== 'Thursday')
          setSelectedDays(filtered)
          selectedD.classList.remove('odp_day_selected')
        }else {
          let item = {
            name: "Thursday",
            startTime: '08:00',
            endTime: '17:00'
          }
          setSelectedDays([...selectedDays, item])
        }
      }else {
        let item = {
          name: "Thursday",
          startTime: '08:00',
          endTime: '17:00'
        }
        setSelectedDays([...selectedDays, item])
      }
    }else if(day =='fri'){
      let selectedD = document.querySelector(`#${day}`)
      selectedD.classList.add('odp_day_selected')
      let newDay = true
      if(selectedDays[0]){
        for(let i=0;i<selectedDays.length;i++){
          let dayN = selectedDays[i].name
          if(dayN == 'Friday'){ newDay = false }
        }
        if(newDay == false){
          let filtered = selectedDays.filter((el) => el.name !== 'Friday')
          setSelectedDays(filtered)
          selectedD.classList.remove('odp_day_selected')
        }else {
          let item = {
            name: "Friday",
            startTime: '08:00',
            endTime: '17:00'
          }
          setSelectedDays([...selectedDays, item])
        }
      }else {
        let item = {
          name: "Friday",
          startTime: '08:00',
          endTime: '17:00'
        }
        setSelectedDays([...selectedDays, item])
      }
    }else if(day =='sat'){
      let selectedD = document.querySelector(`#${day}`)
      selectedD.classList.add('odp_day_selected')
      let newDay = true
      if(selectedDays[0]){
        for(let i=0;i<selectedDays.length;i++){
          let dayN = selectedDays[i].name
          if(dayN == 'Saturday'){ newDay = false }
        }
        if(newDay == false){
          let filtered = selectedDays.filter((el) => el.name !== 'Saturday')
          setSelectedDays(filtered)
          selectedD.classList.remove('odp_day_selected')
        }else {
          let item = {
            name: "Saturday",
            startTime: '08:00',
            endTime: '17:00'
          }
          setSelectedDays([...selectedDays, item])
        }
      }else {
        let item = {
          name: "Saturday",
          startTime: '08:00',
          endTime: '17:00'
        }
        setSelectedDays([...selectedDays, item])
      }
    }
  }

  function handleOpenDay(e, item){
    e.preventDefault()
    selectedDays.forEach((i) => {
      let mySpan = document.querySelector(`#${i.name}`)
      mySpan.classList.remove('selectedDaySpan')
    })
    let myNewSpan = document.querySelector(`#${item.name}`)
    myNewSpan.classList.add('selectedDaySpan')
    let start = document.querySelector('#startTimeInput')
    let end = document.querySelector('#endTimeInput')
    start.value = item.startTime
    end.value = item.endTime
  }
  function updateTime(e){
    e.preventDefault()
    let start = document.querySelector('#startTimeInput')
    let end = document.querySelector('#endTimeInput')
    let item = document.querySelector('.selectedDaySpan')
    let selectedItem = null
    selectedDays.forEach((i)=> {
      if (i.name == item.id){
        selectedItem = i
      }
    })
    selectedItem.startTime = start.value
    selectedItem.endTime = end.value
    setSelectedDays(selectedDays)
  }
  useEffect(()=>{
    selectedDays.forEach((item) => {
      if(item.name == 'Sunday'){
        item.value = 1
      }else if(item.name =='Monday'){
        item.value = 2
      }else if (item.name == 'Tuesday'){
        item.value = 3
      }else if (item.name == 'Wednesday'){
        item.value = 4
      }else if (item.name == 'Thursday'){
        item.value = 5
      }else if (item.name == 'Friday'){
        item.value = 6
      }else if (item.name == 'Saturday'){
        item.value = 7
      }
    })
    selectedDays.sort((p1, p2) => (p1.value > p2.value) ? 1 : (p1.price < p2.price) ? -1 : 0)

    console.log('sorted arr',selectedDays);
  },[selectedDays])
  

  return (
    <div className="testDayPickerCont">

      <button onClick={(e) => openDayPicker(e)} className="dropbtn">
        Select Availability
      </button>
      <div id="dayPicker" className="odp-content">
        <div className="d-flex">
          <div className="odp-content-cont">
            <span onClick={()=> handleSelectDay('sun')} id='sun' className="odp_day">Sun</span>
            <span onClick={()=> handleSelectDay('mon')} id='mon' className="odp_day">Mon</span>
            <span onClick={()=> handleSelectDay('tue')} id='tue' className="odp_day">Tue</span>
            <span onClick={()=> handleSelectDay('wed')} id='wed' className="odp_day">Wed</span>
            <span onClick={()=> handleSelectDay('thu')} id='thu' className="odp_day">Thu</span>
            <span onClick={()=> handleSelectDay('fri')} id='fri' className="odp_day">Fri</span>
            <span onClick={()=> handleSelectDay('sat')} id='sat' className="odp_day">Sat</span>
          </div>
          <div className="divider"></div>
          <div className="odp-selected-cont">
            <span className="titleSpan">Selected</span>
            <div style={{display: 'flex',flexDirection: 'column', alignItems:'center'}}>
              {selectedDays.map((item, idx) => {
                return (
                  <span 
                    id={item.name}
                    className='daySpan' 
                    key={idx}
                    onClick={(e)=> handleOpenDay(e, item, idx)}
                  >{item.name}</span>
                )
              })}
            </div>
          </div>
          <div className="divider"></div>
          <div className="odp-time-cont">
            <span className="titleSpan">Set Time</span>
            <div className='setTimeInputs'>
              <div style={{display:'flex'}}>
                <span>Open :{' '}</span>
                <input id="startTimeInput" type="time" value={startT} onChange={(e)=> setStartT(e.target.value)} />
              </div>
              <div style={{display:'flex'}}>
                <span>Close :</span>
                <input id="endTimeInput" type="time" step={'900'} value={endT} onChange={(e)=> setEndT(e.target.value)} />
              </div>
            </div>
            <button className="updateTimeBTN" onClick={(e)=> updateTime(e)}>
              Update Time
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
