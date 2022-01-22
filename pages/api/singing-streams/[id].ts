import { SingingStream } from './../../../types/index';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id) {
    res.status(400).json({
      message: '`id` is required.'
    });
    return;
  }

  const data: SingingStream[] = [
    {
      id: 'v-bCLl7zR00',
      title: '【歌枠】良いお知らせ✨週1歌枠🎤【風真いろは/ホロライブ】',
      length: 4442,
      url: 'https://www.youtube.com/watch?v=v-bCLl7zR00',
      songId: 'b0fjofeaw',
      songTitle: '群青',
      songArtist: 'YOASOBI',
      startAt: 859,
      endAt: 1105
    },
    {
      id: 'v-bCLl7zR00',
      title: '【歌枠】良いお知らせ✨週1歌枠🎤【風真いろは/ホロライブ】',
      length: 4442,
      url: 'https://www.youtube.com/watch?v=v-bCLl7zR00',
      songId: 'gj0bvawer',
      songTitle: 'からくりピエロ',
      songArtist: '40mP',
      startAt: 1373,
      endAt: 1628
    },
    {
      id: 'v-bCLl7zR00',
      title: '【歌枠】良いお知らせ✨週1歌枠🎤【風真いろは/ホロライブ】',
      length: 4442,
      url: 'https://www.youtube.com/watch?v=v-bCLl7zR00',
      songId: 'b0u4rjsaf',
      songTitle: 'ピースサイン',
      songArtist: '米津玄師',
      startAt: 1827,
      endAt: 2066
    },
    {
      id: 'v-bCLl7zR00',
      title: '【歌枠】良いお知らせ✨週1歌枠🎤【風真いろは/ホロライブ】',
      length: 4442,
      url: 'https://www.youtube.com/watch?v=v-bCLl7zR00',
      songId: 'bjewrjcer',
      songTitle: 'Unravel',
      songArtist: 'TK from 凛として時雨',
      startAt: 2176,
      endAt: 2413
    },
    {
      id: 'v-bCLl7zR00',
      title: '【歌枠】良いお知らせ✨週1歌枠🎤【風真いろは/ホロライブ】',
      length: 4442,
      url: 'https://www.youtube.com/watch?v=v-bCLl7zR00',
      songId: 'b0fjofea3w',
      songTitle: 'KING',
      songArtist: 'kanaria',
      startAt: 2696,
      endAt: 2830
    },
    {
      id: 'v-bCLl7zR00',
      title: '【歌枠】良いお知らせ✨週1歌枠🎤【風真いろは/ホロライブ】',
      length: 4442,
      url: 'https://www.youtube.com/watch?v=v-bCLl7zR00',
      songId: 'gu034jf',
      songTitle: 'PONPONPON',
      songArtist: 'きゃりーぱみゅぱみゅ',
      startAt: 2965,
      endAt: 3209
    },
    {
      id: 'v-bCLl7zR00',
      title: '【歌枠】良いお知らせ✨週1歌枠🎤【風真いろは/ホロライブ】',
      length: 4442,
      url: 'https://www.youtube.com/watch?v=v-bCLl7zR00',
      songId: 'b0rjfc',
      songTitle: 'only my railgun',
      songArtist: 'fripSide',
      startAt: 3527,
      endAt: 3777
    },
    {
      id: 'v-bCLl7zR00',
      title: '【歌枠】良いお知らせ✨週1歌枠🎤【風真いろは/ホロライブ】',
      length: 4442,
      url: 'https://www.youtube.com/watch?v=v-bCLl7zR00',
      songId: 'jboajef',
      songTitle: '白日',
      songArtist: 'King Gnu',
      startAt: 3986,
      endAt: 4264
    }
  ];

  const result = data.find((item) => item.songId === id);
  if (!result) {
    res.status(404).json({
      message: 'Not found.'
    });
    return;
  }

  res.status(200).json(result);
}
