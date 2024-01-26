

export function sqlFilter(filters: any) : any {

	const conditions = [];
	const values = [];

	for (const key in filters) {
		if (filters.hasOwnProperty(key) && filters[key]) {
			conditions.push(`${key} = $${conditions.length + 1}`);
			values.push(filters[key]);
		}
	}

	if (conditions.length > 0) {
		return {
			where: 'WHERE ' + conditions.join(' AND '),
			values: values,
		  };
	} else {
		return {
			where: '',
			values: [],
		  };
	}
}