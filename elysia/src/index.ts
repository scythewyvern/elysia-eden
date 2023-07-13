import { Elysia, t, ws } from 'elysia'

const app = new Elysia()
	.use(ws())
	.get('/', () => 'Hello Elysia')
	.ws('/ws', {
		open: ws => {
			ws.send({
				hello: 'world1',
			})
		},
		message: (ws, message) => {},
		response: t.Object({
			hello: t.String(),
		}),
	})
	.listen(3000)

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)

export type App = typeof app
