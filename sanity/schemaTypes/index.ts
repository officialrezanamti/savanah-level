import { authorType } from './authorType'
import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { videoEmbedType } from './objects/videoEmbedType'
import { postType } from './postType'

export const schemaTypes = [
  postType,
  categoryType,
  authorType,
  blockContentType,
  videoEmbedType,
]
