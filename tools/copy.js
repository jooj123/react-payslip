import task from './lib/task';
import cp from './lib/copy';

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
export default task(async function copy() {
  // we dont have these for this example
  await cp('static', 'build');
});
