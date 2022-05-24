import { FC, useEffect, useMemo, useState } from 'react'

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

// 一般來說會採用Payload的形式撰寫query的function，
// 也就是說custom hook的部分如果要從外提入output的形式必須定義
function useFetchData<Payload>(url: string): {
  data: Payload | null;
  done: boolean;
} {
  const [data, setData] = useState<Payload | null>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    fetch(url).then(res => res.json()).then((d: Payload) => {
      setData(d)
      setDone(true)
    })
  }, [url])
  return {
    data,
    done,
  }
}

const CustomHookComponent: FC = () => {
  const { data } = useFetchData<Beverage[]>("/hv-taplist.json");
  // useMemo example
  const portlandTaps = useMemo(() => 
    (data || []).filter(
      bev => bev.producerLocation.includes("Portland")
    ), [data]
  )
  
  return (
    <div>
      {portlandTaps.length && (
        <img 
          src={portlandTaps![0].logo}
          alt="Beverage logo"
        />
      )}
    </div>
  )
}

export default CustomHookComponent