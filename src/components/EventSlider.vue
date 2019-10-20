<template>
    <carousel :autoplay="true" :nav="false" :items="4">

<div  @mouseover="seen=true" @mouseleave="seen = false" >
<img src="../assets/children.jpg" rounded alt="" width="100px"> 
<span class="text-content" v-show="seen">
    <h3 class="text-center">This is love</h3>
</span>
</div>
<div  @mouseover="seen=true" @mouseleave="seen = false" >
<img src="../assets/children.jpg" rounded alt="" width="100px"> 
<span class="text-content" v-show="seen">
    <h3 class="text-center">This is love</h3>
</span>
</div>
<div  @mouseover="seen=true" @mouseleave="seen = false" >
<img src="../assets/children.jpg" rounded alt="" width="100px"> 
<span class="text-content" v-show="seen">
    <h3 class="text-center">This is love</h3>
</span>
</div>
<div  @mouseover="seen=true" @mouseleave="seen = false" >
<img src="../assets/children.jpg" rounded alt="" width="100px"> 
<span class="text-content" v-show="seen">
    <h3 class="text-center">This is love</h3>
</span>
</div>
<div  @mouseover="seen=true" @mouseleave="seen = false" >
<img src="../assets/children.jpg" rounded alt="" width="100px"> 
<span class="text-content" v-show="seen">
    <h3 class="text-center">This is love</h3>
</span>
</div>



</carousel>
</template>

<script>

import carousel from 'vue-owl-carousel'

export default {
    components: { carousel },
    data(){
        return{
            //seen: false
        }
    },
   
}

</script>

<style scoped>
.text-content{
   
}


</style>