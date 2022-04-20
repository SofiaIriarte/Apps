window.onload=function(){
    
    let vm=new Vue({
        el:'#vue-app',
        data:{
            message:'Hello Vue.js!'
        }
    })

    setTimeout(function(){
        vm.message='magia'

    },5000)
}

