<template>
<div>
    <HeaderMenu></HeaderMenu>
    <br>
   <b-container fluid="" class="about" style="">
      
       <div class="mx-auto" style="background:; z-index: 1000; position: relative;">
           <br>
           <br>
           <h1 class="text-center" style="color: #fff">About Us</h1>
       </div>
       <div class="after"></div>
    </b-container>
    <b-container>
        <div class="mx-auto aboutUs shadow" style="">
       
       <h3 class="text-center"> Help Us To Inspire Children and make a difference</h3>
       <p class="text-center">Every child deserves a chance at happiness. But many children – burdened with disease, disabilities or disorders –
 face daily obstacles that may seem insurmountable. At MBLF, we are local people helping local children, right
 here in the greater Central New York area. </p>

<p>Our efforts focus on providing services directly for children, as well as assistance to families who often 
struggle to overcome the many associated challenges. These services are mostly financial, but also include advocacy,
 intervention and medical referrals. Working in conjunction with other organizations, McBeth Lifefix Foundation strives to 
fulfill most, if not all, of our children’s needs. First, last and always, we are advocates for children.</p>
<p>McBeth Lifefix Foundation is a  registered as "Incorporated Trustees" under Section 590 of the Companies and Allied Matters Act, Cap C20 Laws of the Federation 2010 for the advancement of any religious, educational, literary, scientific, social/cultural development, sporting and charitable causes dedicated to providing financial and educational 
services to needy families in Nigeria, specifically, children who suffer from disabilities, diseases and disorders.</p>
       <br>
       <p class="text-center"><a href="https://forms.gle/RZgRFSNFucWvVeqG8" id="joinUs">Join Us</a></p>
    </div>
    </b-container>

    <footermenu></footermenu>
</div>
    
</template>


<script>
import HeaderMenu from '../components/HeaderMenu.vue'
import footermenu from '../components/Footer.vue'
export default {
    name: 'about',
    components:{
        HeaderMenu,
        footermenu
    }
}
</script>

<style>
.about{
    position: relative;
    background-image: url('../assets/about.jpg');
     background-repeat: no-repeat;
     height: 450px;
     background-position: center;
     /* background-attachment: fixed; */
     background-size: cover; 
}

.about .after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    color: #FFF;
}

.about .after {
    display: block;
    background: rgba(0, 0, 0, .6);
}

.aboutUs{
    position: relative;
    z-index: 10;
   box-shadow:  rgba(0, 0, 0, 0.161);
   margin-top: -100px;
   background: #ffffff;
   padding: 2em 3em;
}
</style>