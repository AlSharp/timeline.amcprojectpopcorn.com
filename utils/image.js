export const getOgImageFromEvent = event => {
  const { media, mediaType } = event.frontmatter;

  if (mediaType === 'image') return media;
  if (mediaType === 'video') {
    const splitUrl = media.split('/');
    const youtubeId = splitUrl[splitUrl.length - 1];
    return `https://img.youtube.com/vi/${youtubeId}/0.jpg`;
  }
}