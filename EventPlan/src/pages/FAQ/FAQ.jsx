import react from 'react'
import { useState } from 'react'
import { Accordion, Button, Card, Form } from 'react-bootstrap'
import styles from './FAQ.module.css'

const FAQ = () => {
  const [serchTerm, setSerchTerm] = useState('')
  const [faqData, setFaqData] = useState([
    {
      question: "Quem somos nós?",
      answer: "EventPlan é um grupo de jovens que se juntaram para criar um site de planejamento de eventos. Nós queremos ajudar você a planejar o seu evento dos sonhos.",
      helpful: 0,
      nothelpful: 0
    }, {
      question: "Como posso entrar em contato com vocês?",
      answer: "Você pode nos contatar pelo nosso email",
      helpful: 0,
      nothelpful: 0
    }, {
      question: "Como posso planejar um evento?",
      answer: "Você pode planejar um evento clicando no botão 'Planejar Evento' na página inicial",
      helpful: 0,
      nothelpful: 0
    }, {
      question: "Quanto custa planejar um evento?",
      answer: "O custo de planejar um evento depende do tipo de evento que você deseja planejar. Você pode ver os preços na página de planejamento de eventos",
      helpful: 0,
      nothelpful: 0
    }, {
      question: "Como posso cancelar um evento?",
      answer: "Você pode cancelar um evento clicando no botão 'Cancelar Evento' na página de planejamento de eventos",
      helpful: 0,
      nothelpful: 0
    }
  ])

  const handleSerch = (e) => {
    setSerchTerm(e.target.value)
  }

  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(serchTerm.toLowerCase())
  )

  const handleFeedback = (index, type) => {
    const updateFaqs = [...faqData];
    if (type === 'helpful') {
      updateFaqs[index].helpful += 1;
    } else {
      updateFaqs[index].nothelpful += 1;
    }
    setFaqData(updateFaqs)
  }

  return (
    <div className={styles.container}>
      <h2>Perguntas Frequentes</h2>
      <Form.Control
        type='text'
        placeholder='Pesquisar'
        value={serchTerm}
        onChange={handleSerch}
        className='search'
      />
      <Accordion defaultActiveKey="0">
        {filteredFaqs.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>
              <p>{faq.answer}</p>
              <div>
                <Button
                  variant='success'
                  size='sm'
                  onClick={() => handleFeedback(index, 'helpful')}
                >
                  helpful ({faq.helpful})
                </Button>
                <Button
                  variant='danger'
                  size='sm'
                  onClick={() => handleFeedback(index, 'nothelpful')}
                >
                  not helpful ({faq.nothelpful})
                </Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

export default FAQ