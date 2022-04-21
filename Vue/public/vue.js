window.onload=function(){
    
    let vm=new Vue({
        el:'#app-4',
        data:{
            perros:['isa', 'ameli', 'mozart', 'indio', 'pepe', 'pancho', 'lola', 'jambo']
        },
        methods: {
            agregar: function () {
              this.append(perroNuevo) 
            }
          }
    })
    vm.plus()
    vm.perros

    setTimeout(function(){
        vm.message='magia'

    },5000)
}

