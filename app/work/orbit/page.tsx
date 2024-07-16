'use client'
import dynamic from 'next/dynamic'

import Heading from '@/_components/typography/heading'
import Paragraph from '@/_components/typography/paragraph'
const P5Comp = dynamic(() => import('./Orbit'), { ssr: false })

export default function OrbitSimulation() {
  return (
    <section className="orbit flex flex-col gap-6 md:gap-10 my-16 sm:my-[121px]">
      <Heading type="h3">
        Friendly tool for learning to code and make art.
      </Heading>
      <Paragraph>
        P5 é uma atualização da linguagem Processing, iniciada por Lauren
        McCarthy em 2013, que possibilitou a transição do ambiente e das
        ferramentas de Processing para a web. O ambiente original, criado por
        Ben Fry e Casey Reas em 2001, era escrito como Proce55ing, pois o
        domínio www.processing.org já estava ocupado por uma empresa. Por isso,
        era chamado internamente de P5. Ao adaptá-lo para a web, McCarthy fez
        uma referência às origens e à história dessa tecnologia.
      </Paragraph>
      <Paragraph>
        P5 não é uma linguagem de programação. Ele é um framework: uma
        biblioteca de ferramentas de programação (API) voltada para as
        tecnologias criativas, que funcionam dentro de uma estrutura/mecanismo
        (pipeline) pré-definido. Tanto a biblioteca quanto esta estrutura foram
        herdadas do Processing, e se mantém praticamente idênticas, o que
        significa que qualquer pessoa com familiaridade em Processing poderá
        programar com P5 imediatamente, e vice-versa. A diferença entre as duas
        é que Processing utiliza como base a linguagem Java, e P5 a linguagem
        Javascript, logo, diferenças de sintaxe, procedimentos e recursos que
        existem entre elas se refletirão na diferença entre Processing e P5.
      </Paragraph>
      <Paragraph>
        P5, como Processing, é voltado para a criação de mídia visual e
        interativa, portanto, os primeiros programas começam com o desenho.
        Iniciantes em programação se sentem mais confortáveis no aprendizado
        quando vêem seus programas produzindo algo na tela visualmente, e não
        apenas resultados abstratos. Isso se provou motivador para levar os
        alunos de design, arte e arquitetura à programação. Com poucas linhas de
        código é possível criar muitas coisas
      </Paragraph>
      <Paragraph>
        O exemplo acima é uma simulação criada com algumas linhas de código, o
        usuário pode clicar e arrastar o mouse para interagir com a simulação.
      </Paragraph>
      <P5Comp />
    </section>
  )
}
