const request = require('supertest')
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')
const postTransferencias = require('../fixtures/postTransferencias.json')

describe('Transferências', () => {

    let token

    describe('POST /transferencias', () => {
        
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

    describe('GET /transferencias/{id}', () => {
        it('Deve retornar sucesso com 200 e os dados da transferência', async () => {

            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias/15')
                .set('Authorization', `Bearer ${token}`)
            
                expect(resposta.status).to.equal(200)
                expect(resposta.body.id).to.equal(15)
                expect(resposta.body.id).to.be.a('number')
                expect(resposta.body.conta_origem_id).to.equal(1)
                expect(resposta.body.conta_destino_id).to.equal(2)
                //expect(resposta.body.valor).to.equal(11)
                expect(resposta.body.data_hora).to.be.a('string')
                expect(resposta.body.autenticada).to.equal(0)
                
                console.log(resposta.status)
                console.log(resposta.body)
        })
    })

    describe('GET /transferencias', () => {
        it('Deve retornar 10 elementos na paginação quando informar limite de 10 registros', async () => {
            
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limit=10')
                .set('Authorization', `Bearer ${token}`)
            
            expect(resposta.status).to.equal(200)
            expect(resposta.body.limit).to.equal(10)
            expect(resposta.body.transferencias).to.have.lengthOf(10)

            console.log(resposta.body)
        })
    })
})