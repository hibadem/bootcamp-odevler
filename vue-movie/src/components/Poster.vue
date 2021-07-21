<template>
  <div>
    <div class="posters">
      <h2 class="posters__header" >{{name}}</h2>
      <div  class="posters__inner">
        <div v-for="movie in movies" :key="movie.id" class="poster" :data-id="movie.id">
          <router-link :to="'/detail/'+movie.id">
          <img class="poster--large" :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" alt="" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
props: ['movies','name'],
setup(){
  
  // const routeDetail = (id) => {
  //   this.$emit('onChange',id);
  // }
return {
  
}
},

}
</script>

<style>
.posters{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 500px;
}
.posters__header{
  color: white;

}
.poster {
  width: 100%;
  object-fit: contain;
  max-height: 100px;
  margin-right: 10px;
  transition: transform 450ms;
}

.posters__inner {
  display: flex;
  height: 200px;
  padding: 20px;
}

.poster:hover {
  transform: scale(1);
  cursor: pointer;
}

.poster--large {
  max-height: 250px;
}

.poster--large:hover {
  transform: scale(1);
  cursor: pointer;
}


</style>