import React, { useState } from "react";
import "../Assests/Css/Main.css";
import Calendar from "react-calendar";
import axios from "axios";
import "react-calendar/dist/Calendar.css";

function Form() {
  // useState for values of respective data
  const [startValue, setStartDate] = useState(new Date());
  const [endValue, setEndDate] = useState(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [aadhar, setaadhar] = useState("");
  const [address1, setaddress1] = useState("");
  const [address2, setaddress2] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [valueCottage, setCottage] = useState("");

  // converting object into string
  let v = JSON.stringify(startValue).slice(1, 11);
  // let v1 = JSON.stringify(endValue).slice(1, 11);

  // arrow function for axios http request
  const onClickBtn = async (e) => {
    e.preventDefault();
    console.log('data checkimg');
    // credentail for check availablity
    const credentials = {
      name: name,
      email: email,
      phoneNum: parseInt(Contact),
      aadhar: aadhar,
      city: city,
      state: state,
      address1: address1,
      address2: address2,
      cottageNo: parseInt(valueCottage),
      startDate: v,
      endDate: '',
    };

    // credential for proceed
    const credentials1 = {
      startDate: v,
      endDate: '',
      cottageNo: parseInt(valueCottage),
    };
    await axios
      .get("http://localhost:5000/api/v1/form/getUser", credentials1)
      .then((res) => {
        console.log(res.data.success);
        if (res.data.success === true) {
        } else if (res.data.success === false) {
          axios
            .post("http://localhost:5000/api/v1/form/newUser", credentials)
            .then((res) => {
              if (res.status === 200) {
                document.getElementById("btn02").style.background = "#3e3ead";
                document.getElementById("btn02").style.cursor = "pointer";
              } else {
                console.log("fuck");
              }
            });
        }
      });
  };

  // targetting the values of credential things
  const onName = (e) => {
    setName(e.target.value);
  };
  const onEmail = (e) => {
    setEmail(e.target.value);
  };
  const onContact = (e) => {
    setContact(e.target.value);
  };
  const onaadhar = (e) => {
    setaadhar(e.target.value);
  };
  const oncity = (e) => {
    setcity(e.target.value);
  };
  const onstate = (e) => {
    setstate(e.target.value);
  };
  const onaddress1 = (e) => {
    setaddress1(e.target.value);
  };
  const onaddress2 = (e) => {
    setaddress2(e.target.value);
  };
  const onChangeCottage = (e) => {
    setCottage(e.target.value);
  };
  const onChangeDate = (dateType, e) => {
    if (dateType == 'startDate') {
      setStartDate(e);
      console.log(startValue)
    } else {
      setEndDate(e);
      console.log(startValue)
      
    }
  }

  return (
    <div id="main">
      <div className="left"></div>
      <div className="right">
        <form id="Form">
          <div className="form">
            <h2>REGISTRATION</h2>
            <div className="field">
              <div className="div">
                <label>Full Name</label>
                <input
                  onChange={onName}
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="div">
                <label>Email</label>
                <input
                  onChange={onEmail}
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="field">
              <div className="div">
                <label>Contact Number</label>
                <input
                  onChange={onContact}
                  type="text"
                  placeholder="Enter your contact number"
                />
              </div>
              <div className="div">
                <label>Aadhar Number</label>
                <input
                  onChange={onaadhar}
                  type="text"
                  placeholder="Enter your aadhar number"
                />
              </div>
            </div>
            <div className="field">
              <div className="div">
                <label>Address Line 1</label>
                <textarea
                  placeholder="Enter your address"
                  onChange={onaddress1}
                />
              </div>
              <div className="div">
                <label>Address Line 2</label>
                <textarea
                  placeholder="Enter your address"
                  onChange={onaddress2}
                />
              </div>
            </div>
            <div className="field">
              <div className="div">
                <label>City</label>
                <input
                  onChange={oncity}
                  type="text"
                  placeholder="Enter your city"
                />
              </div>
              <div className="div">
                <label>State</label>
                <input
                  onChange={onstate}
                  type="text"
                  placeholder="Enter your state"
                />
              </div>
            </div>
            <div className="field">
              <div className="div">
                <label>Start Date</label>
                <div>
                  <Calendar
                    onChange={(e) => onChangeDate('startDate', e)}
                    // onChange={onChangeDate}
                    value={startValue}
                  />
                </div>
              </div>
            </div>
            <div className="field">
              <div className="div">
                <label>End Date</label>
                <div>
                  <Calendar
                    onChange={(e) => onChangeDate('endDate', e)}
                    // onChange={onChangeDate}
                    value={endValue}
                  />
                </div>
              </div>
            </div>
            <div className="field">
              <div>
                <label>Select Cottage</label>
                <div>
                  <div id="radio">
                    <label htmlfor="html">1</label>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      onChange={onChangeCottage}
                      value="1"
                    />
                  </div>
                  <div id="radio">
                    <label htmlfor="html">2</label>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      onChange={onChangeCottage}
                      value="2"
                    />
                  </div>
                  <div id="radio">
                    <label htmlfor="html">3</label>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      onChange={onChangeCottage}
                      value="3"
                    />
                  </div>
                  <div id="radio">
                    <label htmlfor="html">4</label>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      onChange={onChangeCottage}
                      value="4"
                    />
                  </div>
                  <div id="radio">
                    <label htmlfor="html">5</label>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      onChange={onChangeCottage}
                      value="5"
                    />
                  </div>
                  <div id="radio">
                    <label htmlfor="html">6</label>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      onChange={onChangeCottage}
                      value="6"
                    />
                  </div>
                  <div id="radio">
                    <label htmlfor="html">7</label>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      onChange={onChangeCottage}
                      value="7"
                    />
                  </div>
                  <div id="radio">
                    <label htmlfor="html">8</label>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      onChange={onChangeCottage}
                      value="8"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="chkbtn">
              <button type="submit" id="btn01" onClick={onClickBtn}>
                Check Availablity
              </button>
              <button type="submit" id="btn02">
                Proceed
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
