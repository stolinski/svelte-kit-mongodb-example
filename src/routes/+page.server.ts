import { tutorials } from "$db/tutorials";
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async function() {
	const data = await tutorials.find({}, {limit: 50, projection: {
		title: 1
	}}).toArray();

	return {
		tutorials: data
	}
}