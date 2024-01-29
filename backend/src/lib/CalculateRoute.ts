type Coordinate = {
	x: number;
	y: number;
  }
  
  type Client = {
	id: string;
	name: string;
	email: string;
	phone: string;
	coordinates: Coordinate;
  }
	
  function calculateDistance(coord1: Client, coord2: Client): number {
	const dx = coord1.coordinates.x - coord2.coordinates.x;
	const dy = coord1.coordinates.y - coord2.coordinates.y;
	return Math.sqrt(dx * dx + dy * dy);
  }
	
  function findBestRoute(clients: Client[]): Client[] {
	const unvisitedCoordinates = [...clients];
	
	const startCoordinate: Coordinate = { x: 0, y: 0 };
	const startClient: Client = {
	  id: "",
	  name: "",
	  email: "",
	  phone: "",
	  coordinates: startCoordinate
	}
	const path: Client[] = [startClient];
  
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
  
  export default findBestRoute;
  