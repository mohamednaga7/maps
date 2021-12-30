import { Mappable } from './Mappable';

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(divId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(divId), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0,
			},
		});
	}

	public addMarker(mappable: Mappable) {
		const marker = new google.maps.Marker({
			position: mappable.location,
			map: this.googleMap,
		});

		marker.addListener('click', () => {
			const infoWindow = new google.maps.InfoWindow({
				content: mappable.markerContent(),
			});
			infoWindow.open(this.googleMap, marker);
		});
	}
}
