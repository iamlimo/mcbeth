<template>
<div>
   <HeaderMenu></HeaderMenu> 
  <carousel></carousel>
  <b-container fluid class="section" style="background-color: #F3F2EE">
  <b-row>
    <div class="mx-auto" style="width: 600px;">
        <h3 class="text-center" style="">Join Us. Become a vounteer</h3>
        <p> Across Nigeria, too many children start life at a disadvantage simply because of who they are and where they come from.
Millions of children are dying from preventable causes, face poverty, violence, disease and hunger.</p>

<p> They are caught up in war zones and disasters they did nothing to create. And they are denied an education and other basic rights owed to them.
All children deserve better.
We champion the rights and interests of children worldwide, putting the most vulnerable children first. </p>
        <p class="text-center"><a href="" id="joinUs">Join Us</a></p>
    </div>
  </b-row>
  </b-container><!-- End of about us -->

  <b-container class="bv-example-row">
  <div class="mx-auto section" style="width: 800px;">
      <h3 class="text-center">Be Part Of Us</h3>
      <br>
      <br>
      <b-row>
          <b-col class="mr-4 shadow">
              <div class="content">
                  <h4 class="text-center">Donate</h4>
              </div>
          </b-col>
    <b-col class="mr-4 shadow">
        <div class="content">
                  <h4 class="text-center">Volunteer</h4>
              </div>
    </b-col>
    <b-col class="mr-4 shadow">
        <div class="content">
                  <h4 class="text-center">Sponsorship/ Partnership</h4>
              </div>
    </b-col>
      </b-row>
  </div>
  </b-container>
<!-- how could you help -->
<b-container fluid class="section volunteer" style="">
  <b-row>
    <div class="mx-auto" style="width: 600px;">
       <h3 class="text-center text-white">Join us. Become a volunteer</h3>
       <p class="text-center text-white">Volunteering can be personally rewarding and helps you 'give something back' to your community. Join us to help give children a better future. Become a McBeth Lifefix Foundation volunteer today.</p>
       <br>
       <p class="text-center"><a href="https://forms.gle/RZgRFSNFucWvVeqG8" id="joinUs">Join Us</a></p>
    </div>
  </b-row>
  </b-container><!-- end of volunteer -->
  <b-container fluid class="bv-example-row" style="background-color: #F3F2EE; padding-top: 20px;">
      <h3 class="text-center">Previous Events</h3>
      <br>
      <carousels></carousels>
  </b-container>
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
                 <li><b-link to="about">McBeth Lifefix Foundation</b-link></li>
                 <li><b-link to="about">Awards & Recognition</b-link></li>
                 <li><b-link to="about">Media & News</b-link></li>
                 <li><b-link to="about">Our Partners</b-link></li>
             </ul>
         </b-col>
          <b-col sm="3">
              <h4>Quick Links</h4>
               <ul class="footer-text">
                 <li><b-link to="about">About MLFF</b-link></li>
                 <li><b-link to="about">Contact Us</b-link></li>
                 <li><b-link to="about">Donate</b-link></li>
                 <li><b-link to="about">Volunteer</b-link></li>
             </ul>
         </b-col>
         <b-col sm="3">
              <h4>Quick Links</h4>
               <ul class="footer-text">
                 <li><b-link to="about">About MLFF</b-link></li>
                 <li><b-link to="about">Contact Us</b-link></li>
                 <li><b-link to="about">Donate</b-link></li>
                 <li><b-link to="about">Volunteer</b-link></li>
             </ul>
         </b-col>
    </b-row>
 </b-container>
  </b-container>

</div>
</template>


<script>
import HeaderMenu from '../components/HeaderMenu.vue'
import Carousel from '../components/Carousel.vue'
import carousels from '../components/EventSlider.vue'
export default {
    name: 'Home',
    components: {
        HeaderMenu,
        Carousel,
        carousels
    }
}
</script>

<style>
.nav-link > a{
    color: #63028F !important;
}
.section{
    /* background-color: #F3F2EE; */
    padding-top: 5em;
    padding-bottom: 10em;
}

.white{
    background-color: #fff;
}
#joinUs{
    background-color: #63028F;
    padding: 0.5em 2em;
}

a#joinUs{
    color: #fff;
    text-decoration: none;
}

#joinUs:hover{
    background-color: #D344AD;
}
.content{
    padding: 5em 2em; 
}

.volunteer{
    background-image: url('../assets/children-fund-NEW.png');
     background-repeat: no-repeat;
     height: 300px;
     background-position: center;
     background-attachment: fixed;
     background-size: cover; 

}

.social > li {
    display: block;
    float: left;
    width: 20%;
    font-size: 20px;
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