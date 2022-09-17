import { EngineResponse } from '../../search'

export async function request(query: string): Promise<EngineResponse> {
	if (query.toLowerCase().includes('lorem ipsum'))
		return {
			answer: {
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			}
		}
	else
		return {}
}
