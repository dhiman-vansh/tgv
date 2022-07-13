// import Navcomp from "./Homecomp/Navcomp"
import Testimonals from "./Homecomp/Testimonals"
import Vidcomp from "./Homecomp/Vidcomp"
// import Foot from "./Homecomp/Foot"
import AutoPlay from "./Homecomp/Autoplay"
import Blogs from "./Homecomp/Blogs"
import Utube from "./Homecomp/Utube"
import Grev from "./Homecomp/Grev"
// import InstagramEmbed from 'react-instagram-embed';

export default function Home() {
  // var userFeed = new Instafeed({
  // 	get: 'user',
  // 	target: "instafeed-container",
  // 	resolution: 'low_resolution',
  // 	accessToken: 'YOUR_INSTAGRAM_ACCESS_TOKEN_GOES_HERE'
  // });

  return (
    <>
      {/* <Navcomp /> */}
      <Vidcomp />
      {/* <div id="root" style="overflow: hidden"><a href="https://wa.me/country_code_and_your_phone_number" class="whatsapp_float" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a></div> */}

      <Blogs />
      <Utube />
      <Grev />
      <Testimonals />
      <AutoPlay />
      {/* <InstagramEmbed
        url='https://instagr.am/p/Zw9o4/'
        clientAccessToken='123|456'
        maxWidth={320}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
        /> */}
      {/* <Foot /> */}
    </>
  )
}