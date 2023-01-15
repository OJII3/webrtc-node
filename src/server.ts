import express from 'express';

export const HttpServer = (port: number) => {
	const app = express();
	return {
		start() {
			app.use(express.static('src/pages'));

			app.listen(port, () => {
				console.log(`Http Server Listening on Port${port}`);
			});
		},
	};
};
