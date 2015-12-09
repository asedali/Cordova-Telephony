function Telephony() {
}
Telephony.prototype = {
  getInfo: function (successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "Telephony", "getSignalInfo", []);
  }
};
//Telephony.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }
    window.plugins.Telephony = new Telephony();
    
//	setInterval(function(){   window.plugins.Telephony = new Telephony(); }, 6000);
  // return window.plugins.Telephony;

//};
//cordova.addConstructor(Telephony.install);
