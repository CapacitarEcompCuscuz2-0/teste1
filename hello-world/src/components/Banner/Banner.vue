<template>
  <div class="inteira" id="carrosel">
    <div class="contencao">
      <div id="imageBg"></div>
    </div>
    <ol id="botoes"></ol>
    <h1 style="font-size: 90px; margin-top: -70vh; margin-left: 70px;">FAÇA JÁ SUA MATRÍCULA!</h1>
  </div>
</template>

<script>
import Vue from 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'
    new Vue({
    el:'carrossel',
    data:{
    
    },
    methods:{
    botoes(n,m){
    document.getElementById('botoes').innerHTML="";
    for(let a=1;a<=m;a++){
        if(a==n){
            document.getElementById('botoes').innerHTML += "<ol><li class='selected' onclick='slide("+a+")'></li><ol>";
        }
        else{
            document.getElementById('botoes').innerHTML += "<ol><li onclick='slide("+a+")'></li><ol>";
        }
    }
    },

    slide(n){
    var allBgs = 3;
    document.getElementById('imageBg').style.backgroundImage = "url('../../assets/img/"+n+".jpg')";
    botoes(n,allBgs);
    }

    
    
    }
})


        
</script>
<style>
.contencao {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: black;
}
#imageBg {
  width: 100%;
  height: 100vh;
  transition: 1s;
  background-size: cover;
}
#botoes{
     background: white;
  width: 25px;
  height: 15px;

  border-radius: 100%;
  cursor: pointer;
}
ol {
  list-style: none;
  width: 40px;
  margin-top: -25px;
  display: flex;
}
ol li {
  background: white;
  width: 25px;
  height: 15px;

  border-radius: 100%;
  cursor: pointer;
}
.selected {
  background: rgba(69, 65, 255, 0.8);
}
</style>