// defines an interface Mappable with a single property, location, which is an object with lat and lng properties.

interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
}

// CustomMap class takes a div ID in its constructor and creates a new instance of a Google Maps map, using the
// passed-in ID as the container for the map. It sets the initial zoom level to 1 and the center of the map to be at
// latitude 0 and longitude 0.

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

// addMarker method takes an object that implements the Mappable interface and adds a marker to the map,
// using the lat and lng properties from the location object. The marker is positioned on the map using the
// position property of the Google Maps marker, which is set to the lat and lng values
// from the location object passed in.

    addMarker(mappable: Mappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })
    }

}