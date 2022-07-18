import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment'
import 'react-calendar/dist/Calendar.css';
import "../app.css"


export default function Reservation() {

  const [data, setData] = useState([]);
  let [actdate, setActdate] = useState();
  const [slots, setSlot] = useState('(click on "check slots")');
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState(0);
  let [newslots, setNewslots] = useState(0);
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [bookslot, setBookslot] = useState(0);

  const makeAPICall = async () => {
    try {
      const response = await fetch('https://tgvapi.herokuapp.com/dataget'
      );
      const data = await response.json();
      console.log({ data })
      setData(data);
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    makeAPICall();
  }, [])

  useEffect(() => {
    // console.log(`adult ${adult} and child ${child}`)
    if (adult < 0) {
      alert("wrong entry of adults")
      window.location.reload(`false`)
    }
    setNewslots(adult * 2 + child)
  }, [adult])

  useEffect(() => {
    setNewslots(adult * 2 + child)
  }, [child])
  useEffect(() => {
    // console.log(`booking slot are ${bookslot}`)
    console.log(`total nuber are ${newslots}`)
    if (newslots > 0) {
      setBookslot(Math.floor((newslots / 5)) +1) 
    }
    if(newslots%5 ==0) {
      setBookslot(newslots/5)
    }
  }, [newslots])
  useEffect(() => {
    console.log(`booking slot are ${Math.floor(bookslot)}`)
  }, [bookslot])

  const slotAvailability = () => {
    const dateSelected = dateState;
    data.map((value) => {
      if (moment(value.date).format('MMMM Do YYYY') == moment(dateSelected).format('MMMM Do YYYY')) {
        setActdate(value.date);
        setSlot(value.slots);
      }
    })
  }

  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e);
    setSlot(`(click on "check slots")`);
  }

  const saveData = () => {

    let result = fetch('https://tgvapi.herokuapp.com/postuser'
      , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          mail: mail,
          phone: phone,
          date: dateState,
          slot: (slots - newslots)
        })
      }
    )
    // .then(function (res) { console.log(res.json()) })
    // .then(response){
    // check if responcse is success
    //set new state as patyment enable
    // }
    // result = result.json();
    // console.log('check data', result)

    upDate();

    alert("entry done 👍");
    window.location.reload(false);
  }

  const upDate = () => {


    let result = fetch(`https://tgvapi.herokuapp.com/putuser/${actdate}`
      , {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          slots: `${newslots}`
        })
      }
    )
    console.log(`new slot for date ${actdate} is ${newslots}`)
  }



  return (
    <div className='resbgimg' >
      <h1 style={{ textAlign: "center", color: "white", fontWeight: "600" }}>BOOKINGS</h1>

      <div className='reserv'>
        <div className='cal'>
          <Calendar
            minDate={new Date()}
            onChange={changeDate}
          />
          <button className='calbut' onClick={slotAvailability}> Check Slots</button>


          <p style={{ color: "white" }}>Slots available for {moment(dateState).format('MMMM Do YYYY')} are <b>{slots}</b></p>


        </div>


        <div className='user'>
          {/* <form> */}

          <label> Full Name<br></br>
            <input
              onChange={e => setName(e.target.value)}
              type="text" placeholder="Enter the full Name " />
          </label>

          <label> Mail ID<br></br>
            <input
              onChange={e => setMail(e.target.value)}
              type="text" placeholder="Enter Mail ID" />
          </label>

          <label> Phone Number<br></br>
            <input
              onChange={e => setPhone(e.target.value)}
              type="text" placeholder="Enter the Phone Number " />
          </label>
          <br></br>
          <label> Slots to be booked: {bookslot}
            <br></br>
            <span>Adults :</span>
            <a onClick={() => setAdult(adult - 1)}>-</a>
            <span> {adult}</span>
            <a onClick={() => { setAdult(adult + 1) }}>+</a>

            <br></br>

            <span>Childs :</span>
            <a onClick={() => setChild(child - 1)}>-</a>
            <span> {child}</span>
            <a onClick={() => setChild(child + 1)}>+</a>
            {/* <input
              onChange={(e) => {
                // setConfirm(e.target.value)
                // console.log(`number of slots selected is ${e.target.value}`)
                setNewslots(slots - (e.target.value))
              }}
              type="text" placeholder="Check Slots then enter " /> */}
          </label>
          {/* {console.log(`new slot is ${newslots}`)} */}
          <br></br>
          <button onClick={() => {
            if (name != "" && phone != 0 && mail != "" && newslots != null) {
              if (newslots < 0) {
                alert("Slots entered are more than available ");
              } else {
                saveData()
              }
            }
            else {
              alert("Please enter all entries correctly bro")
            }
          }}>SUBMIT</button>

        </div>
      </div>

    </div>
  )
}