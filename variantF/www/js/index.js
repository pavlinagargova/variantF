
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    navigator.geolocation.watchPosition(geolocationSuccess, geolocationError);
}
function geolocationSuccess(position){

    $('#latitude').text(position.coords.latitude);
}
function geolocationError(err){
    alert(err);
}