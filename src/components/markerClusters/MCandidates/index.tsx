import { useResult } from '@hooks';
import React from 'react';
import { HomePageMode } from '../../../utils';
import MCandidatesAble from '../MCandidatesAble';
import MSolutions from '../MSolutions';

interface IMapEventControl {
  mode: HomePageMode;
  editCandidates: boolean;
}
const MapEventControl: React.FC<IMapEventControl> = ({
  editCandidates,
  mode,
}) => {
  const result = useResult();

  return (
    <>
      {mode === HomePageMode.QUERY_FORM && result ? (
        <MSolutions />
      ) : (
        <MCandidatesAble editCandidates={editCandidates} />
      )}
    </>
  );
};

export default MapEventControl;
