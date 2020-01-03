import { run } from './run';


const build = async function () {
    await run(`npm run build:book`, {
        cwd: process.cwd(),
        stdio: 'inherit',
    })
}

export { build }