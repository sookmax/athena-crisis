import { PlayerID } from '@deities/athena/map/Player.tsx';
import MapData from '@deities/athena/MapData.tsx';
import {
  GameEndActionResponse,
  OptionalWinActionResponse,
} from '../GameOver.tsx';

export default function getWinningTeam(
  map: MapData,
  actionResponse: GameEndActionResponse | OptionalWinActionResponse,
): 'draw' | PlayerID {
  const isDraw = !actionResponse.toPlayer;
  return isDraw
    ? 'draw'
    : map.getTeam(map.getPlayer(actionResponse.toPlayer)).id;
}
