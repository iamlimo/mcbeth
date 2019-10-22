<template>
    <div>
        <b-container fluid class="text-white" style="background-color: #1D1D1D; padding: 1em 0;">
  <b-container>
      <b-row>
   <b-col sm="8" class="">
       <h4>Together we are stonger. Join the conversation</h4>
   </b-col>
   <b-col sm="4" class="">
       <ul class="social">
           <li><unicon name="facebook" fill="#3b5999"></unicon></li>
           <li><unicon name="twitter" fill="#55acee"></unicon> </li>
           <li><unicon name="instagram-alt" fill="#e4405f"></unicon></li>
       </ul>
   </b-col>
  </b-row>
  </b-container>
  </b-container>
<b-container fluid class="bv-example-row text-white" style="background-color: #232323; padding-top: 25px;">
 <b-container>
        <b-row>
         <b-col sm="3" class="footer-text">
             <img src="../assets/life.png" alt="" width="100px">
             <br>
             <br>
             <p>Across Nigeria, too many children start life at a disadvantage simply because of who they are and where they come from. </p>
             
         </b-col>
          <b-col sm="3">
              <h4>About Us</h4>
               <ul class="footer-text">
                   <br>
                 <li><b-link to="about">McBeth Lifefix Foundation</b-link></li>
                 <li><b-link to="about">Awards & Recognition</b-link></li>
                 <li><b-link to="about">Media & News</b-link></li>
                 <li><b-link to="about">Our Partners</b-link></li>
             </ul>
         </b-col>
          <b-col sm="3">
              <h4>Quick Links</h4>
              <br>
               <ul class="footer-text">
                 <li><b-link to="about">About MLFF</b-link></li>
                 <li><b-link to="about">Contact Us</b-link></li>
                 <li><b-link to="about">Donate</b-link></li>
                 <li><b-link to="about">Volunteer</b-link></li>
             </ul>
         </b-col>
         <b-col sm="3">
              <h4>Find Us</h4>
              <br>
               <ul class="location">
           <li><unicon name="map-marker" fill="#A3A3A3"></unicon>Nigeria Office: Amuwo Odofin, Lagos, Nigeria</li>
           <li><unicon name="map-marker" fill="rgb(194, 194, 194)"></unicon>Switzerland Office: Switzerland</li>
           <li><unicon name="phone" fill="rgb(194, 194, 194)"></unicon>+41 77 912 59 38, +234 816 919 993</li>
       </ul>
         </b-col>
    </b-row>
 </b-container>
  </b-container>
    </div>
</template>

<script>
export default {
    name: "footermenu",
}
</script>

<style>
.social > li {
    display: block;
    float: left;
    width: 20%;
    font-size: 20px;
}

.location > li{
    list-style-type: none;
    font-size: 14px;
    padding-top: 5px;
    color: rgb(194, 194, 194);
}

ul.location{
    margin: 0;
    padding: 0;
}

.footer-text{
     color: rgb(194, 194, 194);
     font-weight: lighter;
}

.footer-text > p{
    font-size: 14px;
}

.footer-text > li{
     list-style-type: none !important;
}

.footer-text > li> a{
    font-size: 14px;
    text-decoration: none;
    color: rgb(194, 194, 194);
}

.footer-text > li > a:hover {
    color: #D344AD;
}

ul.footer-text{
    margin: 0;
    padding: 0;
}
</style>