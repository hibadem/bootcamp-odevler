<template>
<div>
 <Navbar />
 <Header :latest="latest" />
 <Poster :movies="movies" :name="'Popular'"/>
 <Poster :movies="topRated" :name="'Top Rated'"/>
 <Poster :movies="upComing" :name="'Up Coming'"/>

</div>
</template>



<script>
import { onMounted, ref } from "vue";
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import Poster from '../components/Poster.vue';


export default {
  components: { Navbar, Header, Poster},
  setup() {
    onMounted(() => {getMoviesRequest(); getTopRated(); getUpComing(); getLatest();
    });

    const search = 'https://api.themoviedb.org/3/search/movie?api_key=52a18783ed514602a5facb15a0177e61&query=avengers'
    
    const movies = ref([]);
    const topRated = ref([]);
    const upComing = ref([]);
    const latest = ref([]);
    

    const apiKey = '52a18783ed514602a5facb15a0177e61'


    const getMoviesRequest = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log("popular ",responseJson);
      movies.value = responseJson.results;
    }
    const getTopRated = async () => {
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log("top rated ",responseJson);
      topRated.value = responseJson.results;
    }
    const getUpComing = async () => {
      const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log("upcoming ",responseJson);
      upComing.value = responseJson.results;
    }
   
   const getLatest = async () => {
     
      const url = `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log("latest",responseJson);
      latest.value = responseJson;
    }

    return {
      getMoviesRequest, movies,getTopRated, topRated, getUpComing, upComing, getLatest, latest
    };
  },
};
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>


</style>
