import Vue from 'vue'
import Banner from './components/Banner/Banner.vue'


Vue.config.productionTip = false

new Vue({
 el: '#app',
 data:{
     bgNumber:1
 },
 methods:{

  slide(n){
      var allBgs = 3;
      document.getElementById('imageBg').style.backgroundImage = "url('img/"+n+".jpg')";
      botoes(n,allBgs);
      this.bgNumber=n;
  },
 
  botoes(n,m){
      document.getElementById('botoes').innerHTML="";
      for(let a=1;a<=m;a++){
          if(a==n){
              document.getElementById('botoes').innerHTML += "<ol><li class='selected' V-on:click='slide("+a+")'></li><ol>";
          }
          else{
              document.getElementById('botoes').innerHTML += "<ol><li onclick='slide("+a+")'></li><ol>";
          }
      }
  },
  mostrarAtivo(tag){
      var tag_li = document.getElementById('lista');
      var tag_a = tag_li.getElementsByTagName('a');
      for (let i=0; i<tag_a.length; i++ )
      {
         tag_a[i].style.color = "";
      }
         tag.style.color = " #1b9bff";
      }
          
 },
}).$mount('#app')
