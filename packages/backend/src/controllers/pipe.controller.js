const PipeModel = require('../models/pipe.model')
const Controller = require('./controller')

class Pipe extends Controller {
  constructor () {
    super(PipeModel, 'pipe')
  }

  fakeGetAll (req, res) {
    const data = {
      boards: [
        {
          title: 'Tarefas',
          creatable: true,
          cards: [
            {
              id: 1,
              content: 'Estudar módulo 01 de NodeJS',
              labels: ['#7159c1'],
              user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
            },
            {
              id: 2,
              content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
              labels: ['#7159c1'],
              user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
            },
            {
              id: 3,
              content: 'Estudar módulo 03 de React Native',
              labels: ['#7159c1'],
              user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
            },
            {
              id: 4,
              content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
              labels: ['#54e1f7'],
              user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
            },
            {
              id: 5,
              content: 'Gravar testes e deploy ReactJS',
              labels: ['#54e1f7'],
              user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
            }
          ]
        },
        {
          cards: [
            {
              content: 'Recriando clone do Pipefy',
              id: 6,
              labels: [],
              user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
            }
          ],
          title: 'Fazendo'
        },
        {
          cards: [
            {
              content: 'Gravar sobre Geolocalização e mapas com React Native',
              id: 7,
              labels: ['#7159c1'],
              user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
            },
            {
              content: 'Gravar testes e deploy ReactJS',
              id: 8,
              labels: ['#54e1f7'],
              user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
            },
            {
              content: 'Ajustes na biblioteca unform',
              id: 9,
              labels: []
            }
          ],
          title: 'Pausado'
        },
        {
          cards: [
            {
              content: 'Gravar aula sobre deploy e CI com React Native',
              id: 10,
              labels: []
            },
            {
              content: 'Gravar testes e deploy ReactJS',
              id: 12,
              labels: ['#54e1f7']
            },
            {
              content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
              id: 13,
              labels: ['#7159c1']
            }
          ],
          title: 'Concluído'
        },
        {
          cards: [
            {
              content: 'Gravar aula sobre deploy e CI com React Native',
              id: 10,
              labels: []
            },
            {
              content: 'Gravar testes e deploy ReactJS',
              id: 12,
              labels: ['#54e1f7']
            },
            {
              content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
              id: 13,
              labels: ['#7159c1']
            }
          ],
          done: true,
          title: 'Almost Done'
        }
      ],
      description: 'Happy Retro',
      name: 'App builder Retro'
    }

    req.body = data

    super.store(req, res)
  }
}

module.exports = new Pipe()
