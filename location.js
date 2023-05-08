const geolocation = require("@nativescript/geolocation");

export async function getLocation() {
   
let result;

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
    