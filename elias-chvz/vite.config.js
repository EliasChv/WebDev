import { resolve } from "path";

export default {
	build: {
		rollupOptions: {
			input: {
				main: resolve( __dirname, 'index.html' ),
				water_valve: resolve( __dirname, 'WaterValve/index.html' ),
				cse_figures: resolve( __dirname, 'CSE_Figures/index.html' ),
				energy_app: resolve( __dirname, 'EnergyApp/index.html' ),
				resume: resolve( __dirname, 'src/assets/Elias Chavelaz Resumé.pdf' ),
			}
		}
	}
}