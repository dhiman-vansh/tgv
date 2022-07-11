import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment'
import 'react-calendar/dist/Calendar.css';
import "./app.css"


export default function Reservation() {

  const [data, setData] = useState([]);
  const [slots, setSlot] = useState('(click on "check slots")');
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState(0);
  const [confirm, setConfirm] = useState("");


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
  //   console.log('check data', result)
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
        slot:confirm
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
  alert("entry done 👍");
  window.location.reload(false);
  }
  return (
    <>

      {/* <button>Fetch API</button>
      <table style={{ border: '5px solid black' }}>
        {data.map((value) => {
          return (
            <tr style={{ border: '1px solid red' }}>
              <td>
                {value.slots}
              </td>
              <td>
                {value.date}
              </td>
            </tr>
          )
        })
        }
      </table> */}
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>BOOKINGS</h1>

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
          <button className='calbut' onClick={slotAvailability}> Check Slots</button>

          {/* {console.log('dateis', dateState)} */}

          <p>Slots available for {moment(dateState).format('MMMM Do YYYY')} are <b>{slots}</b></p>

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
              onChange={e => setConfirm(e.target.value)}
              type="text" placeholder="Enter the Slots " />
          </label>
          <br></br>
          <button onClick={saveData}>SUBMIT</button>
          {/* </form> */}

        </div>
      </div>

    </>
  )
}