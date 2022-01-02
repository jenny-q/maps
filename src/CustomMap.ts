// instructions to every other class
// on how they can be an argument to add marker
interface Mappable {
    location: {
        lat: number,
        lng: number
    }
}

export class CustomMap {
    // cannot reference property outside of this class w private
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: Mappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
    }
}