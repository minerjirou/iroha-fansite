import type { SingingStream } from '@prisma/client';
import { useCallback, useState } from 'react';
import type { KeyedMutator } from 'swr';

import type { DeleteSingingStream } from '../../../pages/api/singing-streams/[id]';

type Props = {
  mutate: KeyedMutator<SingingStream[]>;
};

export function useDeleteSingingStreamApi({ mutate }: Props) {
  const [isLoading, setLoading] = useState(false);

  const api = useCallback(
    async (request: DeleteSingingStream): Promise<void> => {
      setLoading(true);

      await fetch(`/api/singing-streams/${request.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());

      mutate((data) => (data ? data.filter((song) => song.id !== request.id) : []));

      setLoading(false);
    },
    [mutate],
  );

  return { api, isLoading };
}
