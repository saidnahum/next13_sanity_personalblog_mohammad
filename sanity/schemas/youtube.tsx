import { defineField, defineType } from 'sanity'

import getYouTubeId from 'get-youtube-id'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


const Preview = (props: any) => {
  const { url, renderDefault } = props
  if (!url) {
    return <div>Missing YouTube URL</div>
  }
  const id:string | any = getYouTubeId(url)
  return (
    <div>
      // 👇 Renders the default preview UI
      {renderDefault({ ...props, title: 'YouTube Embed' })}
      // 👇 Renders the video preview below
      <LiteYouTubeEmbed id={id} title=''/>
    </div>
  )
}

export default defineType({
  name: 'youtube',
  type: 'object',
  title: 'YouTube',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube video URL'
    })
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    preview: Preview,
  },
})
