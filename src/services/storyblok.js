import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: 'd4CYnHSqrEyw60QID5O8rAtt',
  cache: {
    clear: 'auto',
    type: 'memory'
  }
});

export default Storyblok;