import { useReadContract } from 'wagmi'
import { abi } from './abi'
import { config } from './config'

export function State() {
  const { data } = useReadContract({
    abi,
    functionName: 'pool_state',
    config,
  })
  if (!data) {
    throw new Error('Geek');
  }
  return (
    <><p>
          supply_x: {data[0].toString()}
      </p><p>
              supply_y: {data[1].toString()}
          </p></>
  );
}