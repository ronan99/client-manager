interface Coordinate {
	x: number;
	y: number;
}
  
function calculateDistance(coord1: Coordinate, coord2: Coordinate): number {
	const dx = coord1.x - coord2.x;
	const dy = coord1.y - coord2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
  
function findBestRoute(coordinates: Coordinate[]): Coordinate[] {
	const unvisitedCoordinates = [...coordinates];

	const startCoordinate: Coordinate = { x: 0, y: 0 };
	const path: Coordinate[] = [startCoordinate];

	while (unvisitedCoordinates.length > 0) {
		const currentLocation = path[path.length - 1];
		let nearestCoordinateIndex = -1;
		let nearestDistance = Infinity;

		for (let i = 0; i < unvisitedCoordinates.length; i++) {
			const distance = calculateDistance(currentLocation, unvisitedCoordinates[i]);
			if (distance < nearestDistance) {
			nearestDistance = distance;
			nearestCoordinateIndex = i;
			}
		}

		path.push(unvisitedCoordinates.splice(nearestCoordinateIndex, 1)[0]);
	}

	return path;
}
  


export default findBestRoute