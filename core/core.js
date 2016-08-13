module.exports = {
    production : false,
    port: function(){
        if(!this.production){
            return 3000
        }else{
            return 80
        }
    }
}