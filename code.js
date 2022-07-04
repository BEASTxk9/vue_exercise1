const app = Vue.createApp ({

    template: "<h1>My name is {{name}} {{surname}}.</h1>",
    
    data: function (){
    return{
        name: "Shane",
        surname: "Stevens"
    };
        }
    });
    
    app.mount("#app");