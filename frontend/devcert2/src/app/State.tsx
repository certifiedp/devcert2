import { useReadContract } from 'wagmi'
import { abi } from './abi'
import { config } from './config'

export default function State() {
  const { data } = useReadContract({
    abi,
    address: '0x812E4424F0301CAF0cE3079ba5b0f9875D618868',
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