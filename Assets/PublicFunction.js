/// <reference path="assets/jquery/jquery-3.6.4/jquery-3.6.4.js" />

"use strict";
var PublicFunction={
    Notification:{
        //Start #task01-PublicFunction.Notify
        $notification:null,
        Init:function(){
            if (!("Notification" in window)) {
                // Check if the browser supports notifications
                console.error("This browser does not support desktop notification");
            }
            else if (Notification.permission === "granted") {
                // Check whether notification permissions have already been granted;
                // if so, create a notification
                PublicFunction.Notification = Notification;
                // …
            }
            else if (Notification.permission !== "denied") {
                // We need to ask the user for permission
                Notification.requestPermission().then((permission) => {
                    // If the user accepts, let's create a notification
                    if (permission === "granted") {
                        PublicFunction.Notification= Notification;
                    }
                });
            }
        },
        ShowNotification:function(Title,Body,icon,Timeout,onclick){
            if(Title=='' && Body==''){return;}
            (Timeout===undefined)?(10 * 1000):Timeout;
            (icon===undefined)?App.Config.icon:icon;
            // create and show the notification
            const showNotification = () => {
                // create a new notification
                PublicFunction.Notification = new Notification(Title, {
                    body: Body,
                    icon: icon
                });
                // close the notification after 10 seconds
                setTimeout(() => {
                    PublicFunction.Notification.close();
                }, Timeout);
                // navigate to a URL when clicked
                if(onclick===undefined && onclick==="function"){
                    PublicFunction.Notification.addEventListener('click', onclick);
                }
            }
        }
        //End #task01-PublicFunction.Notify
    },
    Server:{
        Init:function(){
            //initialize
        },
        WebSocket:{
            Send:function(){},
            Receive:function(){}
        },
        XMPP:{
            Send:function(){},
            Receive:function(){}
        },
        MQTT:{
            Send:function(){},
            Receive:function(){}
        },
        GET:function(URL,Data,Callback){
            // Callback like this
            // function(data,status){
            //   alert("Data: " + data + "\nStatus: " + status);
            // }
            $.get(URL, Callback);
        }, 
        POST:function(URL,Data,OnSuccess,OnError){
            // var OnSuccess=function (data, status, xhr) {
            //     $('p').append('status: ' + status + ', data: ' + data);
            // },
            // var OnError= function (jqXhr, textStatus, errorMessage) {
            //     $('p').append('Error' + errorMessage);
            // }

            $.ajax(URL, {
                type: 'POST',  // http method
                data: Data,  // data to submit
                success: OnSuccess ,
                error: OnError
            });
        }, 
        PUT:function(URL,Data,OnSuccess,OnError){
            // var OnSuccess=function (data, status, xhr) {
            //     $('p').append('status: ' + status + ', data: ' + data);
            // },
            // var OnError= function (jqXhr, textStatus, errorMessage) {
            //     $('p').append('Error' + errorMessage);
            // }

            $.ajax(URL, {
                type: 'PUT',  // http method
                data: Data,  // data to submit
                success: OnSuccess ,
                error: OnError
            });
        }, 
        PATCH:function(URL,Data,OnSuccess,OnError){
            // var OnSuccess=function (data, status, xhr) {
            //     $('p').append('status: ' + status + ', data: ' + data);
            // },
            // var OnError= function (jqXhr, textStatus, errorMessage) {
            //     $('p').append('Error' + errorMessage);
            // }

            $.ajax(URL, {
                type: 'PATCH',  // http method
                data: Data,  // data to submit
                success: OnSuccess ,
                error: OnError
            });
        }, 
        DELETE:function(URL,Data,OnSuccess,OnError){
            // var OnSuccess=function (data, status, xhr) {
            //     $('p').append('status: ' + status + ', data: ' + data);
            // },
            // var OnError= function (jqXhr, textStatus, errorMessage) {
            //     $('p').append('Error' + errorMessage);
            // }

            $.ajax(URL, {
                type: 'DELETE',  // http method
                data: Data,  // data to submit
                success: OnSuccess ,
                error: OnError
            });
        }, 
    },
    Convert:{
        //کلیه توابع تبدیل مانند تبدیل ساعت و.. که در طول پروژه مخص می شود
    },
    Browser:{
        //کلیه توابع مربوط به ارتباط با مرورگر و استفاده از حافظه و کویری استرینگ و..
    },
    GETMadules:{
        //ای قسمت وظیفه دارد ماژول ها را بگیرد
    },
    Coders:{
        Encryption:function(){},
        Decryption:function(){}
    }
};

window.$PF=PublicFunction;
window.$notify=PublicFunction.Notification;

