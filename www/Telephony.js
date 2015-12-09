function Telephony() {
 }
 Telephony.prototype = {
   getInfo: function (successCallback, errorCallback) {
     console.log(successCallback);
     cordova.exec(successCallback, errorCallback, "Telephony", "getSignalInfo", []);
   }
 };
 Telephony.install = function () {
   if (!window.plugins) {
     window.plugins = {};
   }
   		setInterval(function(){  console.log("new"); }, 6000);
  console.log("new request");
    window.plugins.Telephony = new Telephony();
   return window.plugins.Telephony;

 };
 cordova.addConstructor(Telephony.install);
