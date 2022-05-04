var app_login;

$(document).ready(function () {
    app_login = new Vue({
        el: "#app_login",
        data: {
            passwordType: "password",
            login_user: {
                email_address: '',
                email_password: ''
            },
            var_welcome: 'Hello CRUD'
        },
        mounted: function(){
            console.log("Mounted", this.var_welcome)
        },
        methods: {
            switchVisibility: function(){
                app_login.passwordType = app_login.passwordType === "password" ? "text" : "password";
            },
            openModelCreateUser: function(){
                let obj = $("#create_user_modal").modal('show');
                console.log("Object: ", obj);
            },
        }
    })
})
