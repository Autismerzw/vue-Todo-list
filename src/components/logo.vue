<template>
  <div class="logo">
    <div class="ltop"></div>
    <div class="rtop"></div>
  </div>
</template>
<script>
// export default {
//   name: 'logo',
//   data () {
// 	return {
// 	  msg: 'TODO'
// 	}
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */
div.logo{
  width: 180px;
  height: 180px;
  display: inline-block;
  position: relative;
}
.logo .ltop{
  width: 36px;
  height: 72px;
  background:rgba(66, 185, 131, 0.35);  
  position: absolute;
  top:56px;
  left: 62px;
  transform: rotate(-45deg);
}
.logo .rtop{
  width: 36px;
  height: 107px;
  background: #42b983;
  position: absolute;
  top:26px;
  left: 100px;
  transform: rotate(45deg);
}
</style>
