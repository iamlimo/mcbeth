<template>
<div>
    <HeaderMenu></HeaderMenu>
    <br>
    <div id="about" style="padding: 8em 0;">
       <b-container>
           <b-row>
               <b-col sm="12">
                    <h1 class="text-center">This Page is coming soon!</h1>
    <h4 class="text-center">We are currently working hard on our new awesome website. Please stay tuned</h4>
               </b-col>
           </b-row>
       </b-container>
    </div>
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

