import medalCooper from '@/assets/medal-cooper.svg'
import medalGold from '@/assets/medal-gold.svg'
import medalSilver from '@/assets/medal-silver.svg'
import { getRanking } from '@/http/api'
import Image from 'next/image'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de Indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((subscribe, index) => {
          const rankingPosition = index + 1

          return (
            <div
              key={subscribe.id}
              className="relative rounded-xl p-6 bg-gray-700 border border-gray-600 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}°</span> | {subscribe.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {subscribe.score}
              </span>

              {rankingPosition === 1 && (
                <Image src={medalGold} alt="Medalha de Ouro" className="absolute top-0 right-8" />
              )}

              {rankingPosition === 1 && (
                <Image src={medalSilver} alt="Medalha de Ouro" className="absolute top-0 right-8" />
              )}

              {rankingPosition === 1 && (
                <Image src={medalCooper} alt="Medalha de Ouro" className="absolute top-0 right-8" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
