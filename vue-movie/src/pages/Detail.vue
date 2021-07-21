<template>
  <div>
      <div  class="detail">
          <div class="detail__header">
          <h2 >
              {{movieSearch.title}} 
          </h2>
          </div>
          <small class="detail__desc">
           {{movieSearch.overview}}           </small>
          <div class="detail__image--inner">
              <img class="detail__image" :src="'https://image.tmdb.org/t/p/w500/'+movieSearch.poster_path" alt="">
          </div>
      </div>
  </div>
</template>

<script>
import {onMounted, ref,} from 'vue';
import { useRoute } from 'vue-router'

export default {
setup(){
    onMounted(() => {getMovie(); 
    });
    const movieSearch = ref({});
    const route = useRoute()
    const id = route.params.id
    const getMovie = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=52a18783ed514602a5facb15a0177e61   `
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log("search olan",responseJson);
      movieSearch.value = responseJson;
    }
return {
    getMovie, movieSearch
}
},

}
</script>

<style>
.detail {
    display: flex;
    flex-direction: column;
    width: auto;
    height: 500px;
    margin: 20px auto;
    color: #fff;
}
.detail > *{
    margin: 20px auto ;
}
.detail__header {
    font-size: 24px;
    
}
.detail__image--inner {
     height: 100%;
}
.detail__image{
    width: 100%;
    object-fit: contain;
    max-height: 500px;
}

</style>