/**
 * @typedef {Object} Links
 * @prop {string} github Your github repository
 */

/**
 * @typedef {Object} MetaConfig
 * @prop {string} title Your website title
 * @prop {string} description Your website description
 * @prop {string} author Maybe your name
 * @prop {string} siteUrl Your website URL
 * @prop {string} lang Your website Language
 * @prop {string} utterances Github repository to store comments
 * @prop {Links} links
 * @prop {string} favicon Favicon Path
 */

/** @type {MetaConfig} */
const metaConfig = {
  title: "Nicholas Chiarulli",
  description: `Nick's Blog`,
  author: "Nick",
  siteUrl: "https://nickchiarulli.com",
  lang: "en",
  utterances: "nicholaschiarulli/personal_blog-comment",
  links: {
    github: "https://github.com/nicholaschiarulli/personal_blog",
  },
  favicon: "src/images/logo.png",
}

// eslint-disable-next-line no-undef
module.exports = metaConfig
