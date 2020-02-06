const STORYBLOK_IMAGE_SIZE_LIMIT = 4000
const QUALITY_DEFAULT = 90

function resize(image, option) {
  if (image === undefined) return ''
  const imageService = '//img2.storyblok.com/'
  const path = image.replace('//a.storyblok.com', '')
  return imageService + option + path
}
function resizeWithFocusPointSrcSet(
  image,
  originalSize,
  focusPoint,
  srcSet,
  quality = QUALITY_DEFAULT
) {
  return srcSet.map(size => {
    const resizedImg = resizeWithFocusPoint(
      image,
      originalSize,
      focusPoint,
      {
        width: size.width,
        height: size.height
      },
      quality
    )

    return `${resizedImg.url} ${size.srcSetSize}`
  })
}
function resizeWithFocusPoint(
  image,
  originalSize,
  focusPoint,
  size,
  quality = QUALITY_DEFAULT
) {
  if (image === undefined || image.length === 0)
    return { url: '', size: { width: 0, height: 0 } }

  //if we are dealing with an svg we don't crop/resize the image
  if (image.endsWith('.svg')) {
    return {
      url: image,
      size: size
    }
  }

  // as the service only allows images up to 4000x4000 we do some math to make sure the resize is correct
  size = calculateMaxSize(size, STORYBLOK_IMAGE_SIZE_LIMIT)

  // this bit is to deal with resize coordinates if image original size is bigger than STORYBLOK_IMAGE_SIZE_LIMIT
  const maxOriginalSize = calculateMaxSize(
    originalSize,
    STORYBLOK_IMAGE_SIZE_LIMIT
  )

  const sizeOption = `${size.width}x${size.height}/`
  const focusInPx = {
    x: Math.round((maxOriginalSize.width * focusPoint.x) / 100),
    y: Math.round((maxOriginalSize.height * focusPoint.y) / 100)
  }

  // https://www.storyblok.com/docs/image-service
  // filters:focal(<left>x<top>:<right>x<bottom>)
  const focusPointOption = `filters:focal(${focusInPx.x}x${
    focusInPx.y
  }:${focusInPx.x + 1}x${focusInPx.y + 1}):quality(${quality})`

  const imageService = '//img2.storyblok.com/'
  const path = image.replace('//a.storyblok.com', '')
  return {
    url: imageService + sizeOption + focusPointOption + path,
    size: size
  }
}

function calculateMaxSize(size, sizeLimit) {
  const newSize = size

  if (newSize.width > sizeLimit) {
    newSize.height = Math.round((sizeLimit * size.height) / size.width)
    newSize.width = sizeLimit
  }

  if (newSize.height > sizeLimit) {
    newSize.width = Math.round((sizeLimit * size.width) / size.height)
    newSize.height = sizeLimit
  }

  return newSize
}

export { resize, resizeWithFocusPoint, resizeWithFocusPointSrcSet }
