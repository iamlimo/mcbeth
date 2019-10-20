<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">
        <img src="../assets/life.png" alt="" width="100">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
       
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        

       <b-nav-item>
         <b-link to="/">Home</b-link>
       </b-nav-item>
        <b-nav-item>
          <b-link to="about">About McBeth Lifefix Foundation</b-link>
        </b-nav-item>
        <b-nav-item>
          <b-link to="about">Contact Us</b-link>
        </b-nav-item>
        <b-nav-item>
          <b-link to="about">Donate</b-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name: 'headermenu'
}
</script>

<style>
.bg-info{
    background-color: #fff !important;
}
.navbar{
    padding: 0.5em 5em !important;
}

.nav-link{
  color: #63028F !important;
}
</style>