var geolocation = require("@nativescript/geolocation");

export async function getLocation() {
   
var result;

if (!geolocation.isEnabled()) {
await geolocation.enableLocationRequest().then(res => {
geolocation.getCurrentLocation({}).then((location) => {
		
	    result = location;
	
		}); });
	
} else {

await geolocation.getCurrentLocation({}).then((location) => {
		
		result = location;
	
	});

}
	return result;

}
    