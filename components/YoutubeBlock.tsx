'use client'

import getYouTubeId from 'get-youtube-id'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


const YoutubeBlock = ({ props }: any) => {
  const { url } = props;
  const id:string | any = getYouTubeId(url)

  return (
    <div className=''>
      <LiteYouTubeEmbed id={id} title='Yotube'/>
    </div>
  )
}

export default YoutubeBlock