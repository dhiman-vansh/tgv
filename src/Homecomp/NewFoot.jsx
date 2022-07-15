import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function NewFoot() {
  return (
    <>
      <div style={{backgroundColor:"#417c28", color:"white", fontWeight:"normal"}}>
    <MDBFooter className='text-center' 
    data-aos="fade-up"
    data-aos-duration="1000"
    >
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' href='https://www.facebook.com/thegoatvillage' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://www.google.com/search?client=opera-gx&q=goat+villages&sourceid=opera&ie=UTF-8&oe=UTF-8' role='button'>
            <MDBIcon fab icon='google' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://www.instagram.com/thegoatvillages/' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>
          <a className='btn btn-outline-light btn-floating m-1' href='https://wa.me/9068025401' role='button'>
            <MDBIcon fab icon='whatsapp' />
          </a>
        </section>  

        <section className=''>
          {/* <form action=''>
            <div className='row d-flex justify-content-center'>
              <div className='col-auto'>
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <div className='col-auto'>
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </div>
            </div>
          </form> */}
        </section>

        <section className='mb-4'>
          <p>
          The early morning dews with a hope of new beginning, with the melodious rhythm of birds chirping around is what defines The Goat Village. Knowing more about The Goat Village, Nag Tibba is considered 
          to be the soul of the village and originally it is crafted & curated beautifully and is known as the heaven in the chilly hills of Garhwal. Greatly inspired with the artistic influence 
          the entire cottage area which is around 7700 ft, is done excellently the local artisans who are extremely talented and their work can be thoroughly seen in the beautiful ambience of The Goat Village.
          </p>
        </section>

        {/* <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section> */}
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright : 
        <a className='text-white' href='https://zebrians.in'>
        "Zebrians"
        </a>
      </div>
    </MDBFooter>
    </div>
    </>
  )
}