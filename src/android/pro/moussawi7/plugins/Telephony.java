package pro.moussawi7.plugins;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import android.content.Context;
import android.telephony.TelephonyManager;
import android.telephony.gsm.GsmCellLocation;

public class Telephony extends CordovaPlugin {
	
@Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {	
    try {
TelephonyManager Tel = (TelephonyManager) cordova.getActivity().getSystemService(Context.TELEPHONY_SERVICE);
    	    GsmCellLocation mManager =(GsmCellLocation) Tel.getCellLocation();

      	    String NetworkOperator =   mManager.getCellID();
    	    String SimSerialNumber= mManager.getLac();

            JSONObject result = new JSONObject();
    	    result.put("cell",NetworkOperator);
    	    result.put("lac",SimSerialNumber);

            callbackContext.success(result);
       return true;
    } catch (Exception e) {
      callbackContext.error(e.getMessage());
      return false;
    }
  }

}
