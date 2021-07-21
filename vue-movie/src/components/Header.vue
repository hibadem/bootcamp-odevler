<template>
  <div>
    <div >
      <header  class="banner" :style="{ backgroundImage: 'url('+image+')' }" >
      <div class="banner__contents">
        <h1 class="banner__title">{{latest.title}}</h1>
        <h3 class="banner__description">
       {{latest.overview}}
        </h3>
      </div>
    </header>
</div>
  </div>
</template>

<script>




export default {
  props: ['latest'],
  setup(props){
  //const image = `https://image.tmdb.org/t/p/w500/${props.latest.poster_path}`
  const image = `https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg`

  return{
    image
  }
},

}
</script>

<style>
.banner {
  background-size: cover;
  background-position: center center;
  color: white;
  object-fit: contain;
  height: 448px;
}
.banner__contents {
  margin-left: 30px;
  padding-top: 140px;
  height: 200px;
}

.banner__title {
  font-size: 50px;
  font-weight: 800;
  padding-bottom: 5px;
}

.banner__description {
  width: 720px;
  line-height: 1.5;
  padding-top: 16px;
  font-size: 14px;
  max-width: 360px;
  height: 180px;
}


</style>