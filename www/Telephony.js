function Telephony() {
 }
 Telephony.prototype = {
   getInfo: function (successCallback, errorCallback) {
     cordova.exec(successCallback, errorCallback, "Telephony", "getSignalInfo", []);
        		setInterval(function(){  
  console.log("new cordova");
     cordova.exec(successCallback, errorCallback, "Telephony", "getSignalInfo", []);
   		}, 6000);
   }
 };
 Telephony.install = function () {
   if (!window.plugins) {
     window.plugins = {};
   }
       window.plugins.Telephony = new Telephony();
   		setInterval(function(){  
  console.log("new request");
    window.plugins.Telephony = new Telephony();
   		}, 6000);
   return window.plugins.Telephony;

 };
 cordova.addConstructor(Telephony.install);
