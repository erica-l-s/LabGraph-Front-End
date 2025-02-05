import checkResponse from '@/components/utils/helpers/checkResponse';
import getStatusMessage from '@/components/utils/helpers/getStatusMessage';
import { useEffect, useState } from 'react';
import { LevelGroupResponse } from '../../types/Chart';

const useFetchListeningGrouped = (url: string) => {
  const [listing, setListing] = useState<LevelGroupResponse[]>([]);
  const [unitValues, setUnitValues] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenResponse = await fetch('/api/get-token');
        const { token } = await tokenResponse.json();

        const listingResponse = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const listingData = (await checkResponse(listingResponse)) as LevelGroupResponse[];

        setListing(listingData);

        if (listingData.length > 0 && listingData[0].groupedValuesByLevelDTO.values.length > 0) {
          setUnitValues(listingData[0].groupedValuesByLevelDTO.values[0].unit_value);
        }
      } catch (error) {
        console.error('Error fetching data:', getStatusMessage((error as any).status));
      }
    };

    fetchData();
  }, [url]);

  return {
    listing,
    unitValues,
  };
};

export default useFetchListeningGrouped;
