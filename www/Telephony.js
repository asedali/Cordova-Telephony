function Telephony() {
 }
 Telephony.prototype = {
   getInfo: function (successCallback, errorCallback) {
     cordova.exec(successCallback, errorCallback, "Telephony", "getSignalInfo", []);
   }
 };
 Telephony.install = function () {
   if (!window.plugins) {
     window.plugins = {};
   }
       window.plugins.Telephony = new Telephony();
   return window.plugins.Telephony;

 };
 cordova.addConstructor(Telephony.install);

 setInterval(function(){  
  console.log("new cordova");
     function Telephony() {
 }
 Telephony.prototype = {
   getInfo: function (successCallback, errorCallback) {
     cordova.exec(successCallback, errorCallback, "Telephony", "getSignalInfo", []);
   }
 };
 Telephony.install = function () {
   if (!window.plugins) {
     window.plugins = {};
   }
       window.plugins.Telephony = new Telephony();
   return window.plugins.Telephony;

 };
 cordova.addConstructor(Telephony.install);
   }, 6000);
