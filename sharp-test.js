import sharp from 'sharp';

// sharp('./src/routes/(pages)/work/(projects)/siriusxm/gifs/SXM-Media_7B.gif', {animated: true})
//   .resize(480)
//   .webp()
//   .toFile('./src/routes/(pages)/work/(projects)/siriusxm/gifs/SXM-Media_7B-480.webp');

sharp('./src/routes/(pages)/work/(projects)/siriusxm/gifs/SXM-Media_7B.gif')
  .resize(280)
  .gif()
  .toFile('./src/routes/(pages)/work/(projects)/siriusxm/gifs/SXM-Media_7B-280.gif');