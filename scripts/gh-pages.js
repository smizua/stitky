import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'git@github.com:langpavel/stitky.git', // Update to point to your repository
    user: {
      name: 'Pavel Lang', // update to use your name
      email: 'langpavel@phpskelet.org' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);
