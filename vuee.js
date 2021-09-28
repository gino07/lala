Vue.component('modal' , {
 
template: `
<div class="modal is-active">
<div class="modal-background"></div>
  <div class="modal-content">
      <div class="box">
      <slot> </slot>
      </div>
  </div>
<button @click="$emit('close')" class="modal-close is-large" aria-label="close"></button>
</div>
`
});
Vue.component('tabs',{

template:`
<div>
  <div class="tabs">
    <ul>
      <li v-for="tab in tabs":class="{ 'is-active': tab.seleccionada }">
      <a href="#" @click="selec(tab)">{{tab.name}}</a></li>
    
    </ul>
  </div>
  <div class="tabs-details">
    <slot></slot>
  </div>
</div>

`,
data(){
return{ tabs: [] };
},
created(){
  this.tabs= this.$children;

},
methods:{
selec(selectab){
  this.tabs.forEach(tab => {
    tab.seleccionada= tab.name===selectab.name
    
  });

}

}
});

Vue.component('tab',{

  template:`
  <div v-show="seleccionada"><slot></slot></div>
  
  
  
  
  `
,
  props: {
    name:{ required : true},
    seleccionada: {default: false}
  }, 
  data() {
    return {
        seleccionada: false
    };}

});

Vue.component('cupon',{
template: `<div>
 <input> </input> 
 <button @click="cuponAplicar">Apretame si tenes cupon</button>   
</div>

`, 
methods:{
cuponAplicar(){
  this.$emit('aplicado')
}
}
}





)
new Vue({
    el: '#root',
    data:{
      mostrarModal:false,
      cuponAplicado: false

    }
    
    ,
    methods:{
      aplicarCupon(){
        this.cuponAplicado=true
      }

    }

    
      
    

});