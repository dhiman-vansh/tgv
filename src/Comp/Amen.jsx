import { MDBIcon } from "mdb-react-ui-kit"
import staff2 from "../Assests/Gall/staff2.jpg"

export default function Amen() {
  return (
    <>
      <div className="bgimg">
        <div className="amen">
          <h1>Our Amenities</h1>
          <div>
            <a>
              <MDBIcon fas icon="hiking" />
              <p>hiking</p>
            </a>
            {/* <a>
            <MDBIcon fas icon="umbrella-beach" />
          </a> */}
            <a>
              <MDBIcon fas icon="mountain" />
              <p>mountain</p>
            </a>
            <a>
              <MDBIcon fas icon="suitcase" />
              <p>packing</p>
            </a>
            <a>
              <MDBIcon fas icon="campground" />
              <p>camping</p>
            </a>
            <a href="#locat">
              <MDBIcon fas icon="map-marked-alt" />
              <p>location</p>
            </a>
          </div>
          <h1>Getting Around</h1>
          <h4>If you are someone who is more into trekking then surely Nag Tibba
            is going to be delightful experience for you! it is one of the best
            places that you can choose for trekking if you are wanting to go for
            trekking somewhere out of Delhi. For those nature admirers want to
            experience the life at forest or to climb up to 10,000 feet to witness the best ever snowclad
            mountains then surely Nag Tibba is your go to next destination!</h4>
          {/* <img src={staff2} width="75%" /> */}
        </div>
        <div className="locat" id="locat">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13738.556092853874!2d78.1097161!3d30.5877341!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeacb7328f10e4206!2sThe%20Goat%20Village%2C%20Nag%20Tibba!5e0!3m2!1sen!2sin!4v1657779909299!5m2!1sen!2sin"
        width={"100%"}
        height={"500px"}
        />
        </div>
      </div>

    </>
  )
}