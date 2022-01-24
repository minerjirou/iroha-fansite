import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SingingStreamMediaObject } from './SingingStreamMediaObject';

export default {
  title: 'components/SingingStreamMediaObject',
  component: SingingStreamMediaObject
} as ComponentMeta<typeof SingingStreamMediaObject>;

const Template: ComponentStory<typeof SingingStreamMediaObject> = (args) => (
  <SingingStreamMediaObject {...args} />
);

export const Default = Template.bind({});
Default.args = {
  singingStream: {
    video_id: 'v-bCLl7zR00',
    song_title: '群青',
    song_artist: 'YOASOBI',
    start: 859,
    end: 1105,
    created_at: '2022-01-23T17:47:15+00:00',
    updated_at: '2022-01-23T17:47:15+00:00',
    id: 'fca89a73-8f7f-41f1-8343-6b898dffc960',
    video: {
      id: 'a70d08bf-9ad0-47f9-a8c0-7a86be53308f',
      title: '【歌枠】良いお知らせ✨週1歌枠🎤【風真いろは/ホロライブ】',
      length: 4442,
      url: 'https://www.youtube.com/watch?v=v-bCLl7zR00',
      created_at: '2022-01-23T17:41:04+00:00',
      updated_at: '2022-01-23T17:41:04+00:00',
      video_id: 'v-bCLl7zR00'
    }
  }
};
