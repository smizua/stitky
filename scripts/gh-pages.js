import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'git@github.com:smizua/stitky.git', // Update to point to your repository
    user: {
      name: 'Zuzana Šmídová', // update to use your name
      email: 'zuzana.smid@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);
