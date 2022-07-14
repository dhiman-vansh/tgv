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
  // const [confirm, setConfirm] = useState("");


  const makeAPICall = async () => {
    try {
      const response = await fetch('https://tgvapi.herokuapp.com/dataget'
        // , {
        //   mode: 'cors', headers: {
        //     'Access-Control-Allow-Origin': '*'
        //   }
        // }
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

  const slotAvailability = () => {
    const dateSelected = dateState;
    data.map((value) => {
      // console.log(moment(value.date).format('MMMM Do YYYY'))
      if (moment(value.date).format('MMMM Do YYYY') == moment(dateSelected).format('MMMM Do YYYY')) {
        // console.log("slots are ", value.slots)
        setActdate(value.date);
        // console.log(actdate);
        setSlot(value.slots);
      }
      // else {setSlot(`(no data available)`)}
    })
  }

  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e);
    setSlot(`(click on "check slots")`);
  }

  // const saveUserData = () => {
  //   { console.log("name is ", name) }

  //     method: 'POST',
  //     mode: 'cors',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({"date": new Date(),
  //     "slots": 12})
  //   });
  //   result = result.json();
  //   console.log('check data', r  esult)
  // }

  const saveData = () => {
    // { console.log("name is ", name) }

    let result = fetch('https://tgvapi.herokuapp.com/postuser'
      , {
        method: 'POST',
        // mode: 'cors',
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

    // { console.log("name is ", name) }

    let result = fetch(`https://tgvapi.herokuapp.com/putuser/${actdate}`
      , {
        method: 'PUT',
        // mode: 'cors',
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
      <h1 style={{ textAlign: "center",color:"white", fontWeight:"600" }}>BOOKINGS</h1>

      <div className='reserv'>
        <div className='cal'>
          <Calendar
            // className={"exactcal"}
            // activeStartDate={new Date()}
            // value={dateState}
            minDate={new Date()}
            // value={dateState}
            onChange={changeDate}
          />
          {/* {console.log(actdate) } */}
          <button className='calbut' onClick={slotAvailability}> Check Slots</button>

          {/* {console.log('dateis', dateState)} */}

          <p style={{color:"white"}}>Slots available for {moment(dateState).format('MMMM Do YYYY')} are <b>{slots}</b></p>

          {/* <button disabled={slots == 0}>Proceed to book</button>
          {slots == 0 && <p>No slots available for Selected date</p>} */}

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

          <label> Slots<br></br>
            <input
              onChange={(e) => {
                // setConfirm(e.target.value)
                // console.log(`number of slots selected is ${e.target.value}`)
                setNewslots(slots - (e.target.value))
              }}
              type="text" placeholder="Check Slots then enter " />
          </label>
          {console.log(`new slot is ${newslots}`)}
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
            //  if (newslots < 0) {
            //   alert("Slots entered are more than available ");
            // } else {
            //   saveData()
            // }
          }}>SUBMIT</button>
          {/* </form> */}

        </div>
      </div>

    </div>
  )
}