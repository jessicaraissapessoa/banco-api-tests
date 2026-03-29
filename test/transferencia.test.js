const request = require('supertest')
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')
const postTransferencias = require('../fixtures/postTransferencias.json')

describe('Transferências', () => {
    describe('POST /transferencias', () => {
        
        let token
        
        beforeEach(async () => {
            token = await obterToken('julio.lima', '123456')
        })

        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de 10 reais', async () => {
            
            const bodyTransferencias = { ...postTransferencias }

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)

            expect(resposta.status).to.equal(201)
            console.log(resposta.body)
        })

        it('Deve retornar falha com 422 quando o valor da transferência for abaixo de 10 reais', async () => {

            const bodyTransferencias = { ...postTransferencias }
            bodyTransferencias.valor = 9.99

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)

            expect(resposta.status).to.equal(422)
            console.log(resposta.body)
        })
    })
})