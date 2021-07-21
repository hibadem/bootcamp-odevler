<template>
   <nav class="navbar">
       <img src="../assets/images/logo.png" alt="" class="nav__logo" />

   </nav>
</template>

<script>
export default {

}
</script>

<style>

    .navbar {

        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        background: #111;

        
    }
    .nav__logo {
        max-width: 40px;
        max-height: 40px;
        margin: 10px;
        object-fit: contain;
    }
</style>