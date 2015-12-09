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
  console.log("new request");
    window.plugins.Telephony = new Telephony();
   return window.plugins.Telephony;

 };
 cordova.addConstructor(Telephony.install);
