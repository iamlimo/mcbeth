<template>
<div>
   <HeaderMenu></HeaderMenu> 
 <b-container fluid="" class="carol" style="">

     <span id="text">
         <h2 style="color: #63028F;">WE DO WHATEVER IT TAKES</h2>
        <h2>TO SAVE CHILDREN</h2>
        <h2>AND YOU CAN HELP </h2>
     </span>
     <br>
     <p class="text-left"><a href="https://forms.gle/RZgRFSNFucWvVeqG8" target="_blank" id="donate">Donate Now</a></p>
      
 </b-container>
  <b-container fluid class="section" style="background-color: #F3F2EE">
  <b-row>
    <div class="mx-auto" style="width: 600px;">
        <h3 class="text-center" style="">Join Us. Become a vounteer</h3>
        <p> Across Nigeria, too many children start life at a disadvantage simply because of who they are and where they come from.
Millions of children are dying from preventable causes, face poverty, violence, disease and hunger.</p>

<p> They are caught up in war zones and disasters they did nothing to create. And they are denied an education and other basic rights owed to them.
All children deserve better.
We champion the rights and interests of children worldwide, putting the most vulnerable children first. </p>
        <p class="text-center"><a href="https://forms.gle/RZgRFSNFucWvVeqG8" target="_blank" id="joinUs">Join Us</a></p>
    </div>
  </b-row>
  </b-container><!-- End of about us -->

  <b-container class="bv-example-row">
  <div class="mx-auto section part" style="width: 800px;">
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
  
<footermenu></footermenu>
</div>
</template>


<script>
import HeaderMenu from '../components/HeaderMenu.vue'
import footermenu from '../components/Footer.vue'
//import Carousel from '../components/Carousel.vue'
import carousels from '../components/EventSlider.vue'
export default {
    name: 'Home',
    components: {
        HeaderMenu,
        //Carousel,
        carousels,
        footermenu
    }
}
</script>

<style>
.nav-link > a{
    color: #63028F !important;
}

.carol{
    height: 421px;
    background-image: url('../assets/school-village.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; 
    padding: 5em 2em;
}

.carol > #text > h2{
    font-weight: 900;
    background-color: #fff;
    padding: 6px 9px;
    width: 40%;
}
.section{
    /* background-color: #F3F2EE; */
    padding-top: 5em;
    padding-bottom: 10em;
}

.white{
    background-color: #fff;
}
#joinUs, #donate{
    background-color: #D344AD;
    padding: 0.5em 2em;
    
}

a#joinUs{
    color: #fff;
    text-decoration: none;
}

a#donate{
 font-weight: 900;
 color: #fff;
 padding: 1em 2em;
}

#joinUs:hover, #donate:hover{
    background-color: #63028F ;
}
.content{
    padding: 5em 2em; 
}

.volunteer{
    background-image: url('../assets/donate-join.png');
     background-repeat: no-repeat;
     height: 300px;
     background-position: center;
     background-attachment: fixed;
     background-size: cover; 

}

@media (max-width: 600px) {
    .part{
        width: auto !important;
    }
    .navbar{
        padding: 0.3em 0.3em 0.3em 0.3em !important;
    }

    .carol > #text > h2{
    font-weight: 600;
    background-color: #fff;
    padding: 6px 9px;
    width: 90%;
}
.carol{
    padding-top: 0.4em
}
}
</style>