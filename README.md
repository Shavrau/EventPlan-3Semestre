# EventPlan 3 Semestre
Aplicação de Desenvolvimento Web feita para um projeto da faculdade, para este semestre será desenvolvido uma SPA com backend em Firebase.
A nossa ideia de projeto é um site de mapeamento de eventos em torno da região

# EventPlan
Repositório para desenvolvimento do software EventPlan, para o cumprimento do Projeto Transdisciplinar do curso Desenvolvimento de Software Multiplataforma, na faculdade Fatec Matão - Luiz Marchesan.

# Tarefas de Melhorias como Avaliação [11/06/2024] 
(As Sugestões de Códigos São Geradas para guiar exemplos não são implementações prontas. As utilize como guias de introdução)


### Tarefas de Melhorias e Novas Funcionalidades

1. **[3 pontos] Atualizar o componente de cabeçalho**
   - **Descrição**: Atualize o componente de cabeçalho para incluir um menu de navegação mais intuitivo e responsivo.
   - **Exemplo de Código**:
     ```jsx
     import React from 'react';
     import { Navbar, Nav } from 'react-bootstrap';

     const Header = () => {
       return (
         <Navbar bg="dark" variant="dark" expand="lg">
           <Navbar.Brand href="#home">EventPlan</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="mr-auto">
               <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#features">Features</Nav.Link>
               <Nav.Link href="#pricing">Pricing</Nav.Link>
             </Nav>
           </Navbar.Collapse>
         </Navbar>
       );
     };

     export default Header;
     ```

2. **[3 pontos] Melhorar o layout do formulário de login**
   - **Descrição**: Melhore a aparência do formulário de login, tornando-o mais amigável e visualmente atraente.
   - **Exemplo de Código**:
     ```jsx
     import React from 'react';
     import { Form, Button, Container } from 'react-bootstrap';

     const LoginForm = () => {
       return (
         <Container className="mt-5">
           <Form>
             <Form.Group controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" />
             </Form.Group>

             <Form.Group controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" placeholder="Password" />
             </Form.Group>

             <Button variant="primary" type="submit">
               Submit
             </Button>
           </Form>
         </Container>
       );
     };

     export default LoginForm;
     ```

3. **[3 pontos] Adicionar ícones aos botões de ação**
   - **Descrição**: Adicione ícones aos botões de ação para melhorar a clareza das funcionalidades.
   - **Exemplo de Código**:
     ```jsx
     import React from 'react';
     import { Button } from 'react-bootstrap';
     import { FaPlus } from 'react-icons/fa';

     const ActionButton = () => {
       return (
         <Button variant="success">
           <FaPlus /> Add Event
         </Button>
       );
     };

     export default ActionButton;
     ```

4. **[5 pontos] Implementar sistema de claims de usuário**
   - **Descrição**: Implemente um sistema de claims de usuário para controlar permissões específicas dentro do aplicativo.
   - **Exemplo de Código**:
     ```js
     // Firebase function to add user claims
     const functions = require('firebase-functions');
     const admin = require('firebase-admin');
     admin.initializeApp();

     exports.addUserClaims = functions.https.onCall((data, context) => {
       const email = data.email;
       const claims = data.claims;

       return admin.auth().getUserByEmail(email)
         .then(user => {
           return admin.auth().setCustomUserClaims(user.uid, claims);
         })
         .then(() => {
           return { message: `Success! ${email} now has custom claims` };
         })
         .catch(error => {
           return { error: error.message };
         });
     });
     ```

5. **[8 pontos] Integrar Bootstrap via npm**
   - **Descrição**: Integre o Bootstrap no projeto utilizando npm para facilitar a manutenção e personalização de estilos.
   - **Exemplo de Código**:
     ```bash
     npm install bootstrap
     ```

     ```jsx
     // In your index.js or App.js
     import 'bootstrap/dist/css/bootstrap.min.css';
     ```

6. **[13 pontos] Configurar Actions GitHub para deploy no Projeto Google**
   - **Descrição**: Configure GitHub Actions para automação de deploy no Google Cloud Platform.
   - **Exemplo de Código**:
     ```yaml
     name: CI/CD Pipeline

     on:
       push:
         branches: [ main ]

     jobs:
       build:
         runs-on: ubuntu-latest

         steps:
         - name: Checkout code
           uses: actions/checkout@v2

         - name: Set up Node.js
           uses: actions/setup-node@v1
           with:
             node-version: '14'

         - name: Install dependencies
           run: npm install

         - name: Run tests
           run: npm test

         - name: Deploy to Firebase
           uses: w9jds/firebase-action@master
           with:
             args: deploy
           env:
             FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
     ```

7. **[21 pontos] Adicionar suporte a testes de integração**
   - **Descrição**: Adicione suporte a testes de integração para melhorar a confiabilidade do código.
   - **Exemplo de Código**:
     ```jsx
     // Example test using Jest and React Testing Library
     import { render, screen } from '@testing-library/react';
     import App from './App';

     test('renders learn react link', () => {
       render(<App />);
       const linkElement = screen.getByText(/learn react/i);
       expect(linkElement).toBeInTheDocument();
     });
     ```

8. **[34 pontos] Implementar sistema de autenticação com Firebase**
   - **Descrição**: Implemente um sistema de autenticação robusto utilizando Firebase Authentication.
   - **Exemplo de Código**:
     ```jsx
     import React, { useState } from 'react';
     import firebase from 'firebase/app';
     import 'firebase/auth';

     const Auth = () => {
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');

       const handleLogin = async () => {
         try {
           await firebase.auth().signInWithEmailAndPassword(email, password);
         } catch (error) {
           console.error("Error signing in with password and email", error);
         }
       };

       return (
         <div>
           <input
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             placeholder="Email"
           />
           <input
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             placeholder="Password"
           />
           <button onClick={handleLogin}>Login</button>
         </div>
       );
     };

     export default Auth;
     ```

9. **[55 pontos] Implementar dashboard para administração de eventos**
   - **Descrição**: Implemente uma dashboard completa para a administração de eventos, incluindo gráficos e estatísticas.
   - **Exemplo de Código**:
     ```jsx
     import React, { useState, useEffect } from 'react';
     import { db } from './firebaseConfig';
     import { Bar } from 'react-chartjs-2';

     const Dashboard = () => {
       const [eventData, setEventData] = useState([]);

       useEffect(() => {
         const fetchData = async () => {
           const data = await db.collection('events').get();
           setEventData(data.docs.map(doc => doc.data()));
         };

         fetchData();
       }, []);

       const data = {
         labels: eventData.map(event => event.name),
         datasets: [
           {
             label: 'Event Registrations',
             data: eventData.map(event => event.registrations),
             backgroundColor: 'rgba(75,192,192,1)',
           },
         ],
       };

       return (
         <div>
           <h2>Event Dashboard</h2>
           <Bar data={data} />
         </div>
       );
     };

     export default Dashboard;
     ```

10. **[21 pontos] Implementar sistema de notificações para usuários**
    - **Descrição**: Adicione um sistema de notificações para informar os usuários sobre novos eventos, atualizações e lembretes.
    - **Exemplo de Código**:
      ```jsx
      import React, { useEffect } from 'react';
      import { toast } from 'react-toastify';
      import 'react-toastify/dist/ReactToastify.css';

      toast.configure();

      const Notifications = ({ notifications }) => {
        useEffect(() => {
          notifications.forEach(notification => {
            toast(notification.message, { type: notification.type });
          });
        }, [notifications]);

        return null;
      };

      export default Notifications;
      ```

11. **[3 pontos] Melhorar a responsividade do rodapé**
    - **Descrição**: Atualize o componente de rodapé para garantir que ele seja totalmente responsivo em dispositivos móveis.
    - **Exemplo de Código**:
      ```jsx
      import React from 'react';
      import { Container, Row, Col } from 'react-bootstrap';

      const Footer = () => {
        return (
          <footer className="bg-dark text-white mt-5 p-4">
            <Container>
              <Row>
                <Col md="6">© 2024 EventPlan</Col>
                <Col md="6" className="text-right">
                  <a href="#privacy" className="text-white">Privacy Policy</a>
                </Col>
              </Row>
            </Container>
          </footer>
        );
      };

      export default Footer;
      ```

12. **[5 pontos] Adicionar tooltip aos botões de ação**
    - **Descrição**: Adicione tooltips explicativos aos botões de ação para melhorar a usabilidade.
    - **Exemplo de Código**:
      ```jsx
      import React from 'react';
      import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

      const ActionButtonWithTooltip = () => {
        return (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="button-tooltip">Add a new event</Tooltip>}
          >
            <Button variant="success">Add Event</Button>
          </OverlayTrigger>
        );
      };

      export default ActionButtonWithTooltip;
      ```

13. **[8 pontos] Implementar componente de feedback do usuário**
    - **Descrição**: Crie um componente para coletar feedback dos usuários após eventos.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState } from 'react';
      import { Modal, Button, Form } from 'react-bootstrap';

      const FeedbackModal = () => {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Give Feedback
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Event Feedback</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="feedbackForm.ControlTextarea">
                    <Form.Label>Your Feedback</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      };

      export default FeedbackModal;
      ```

14. **[13 pontos] Implementar recuperação de senha usando Firebase**
    - **Descrição**: Adicione funcionalidade de recuperação de senha utilizando Firebase Authentication.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState } from 'react';
      import firebase from 'firebase/app';
      import 'firebase/auth';

      const PasswordReset = () => {
        const [email, setEmail] = useState('');

        const handlePasswordReset = async () => {
          try {
            await firebase.auth().sendPasswordResetEmail(email);
            alert('Password reset email sent!');
          } catch (error) {
            console.error('Error sending password reset email', error);
          }
        };

        return (
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <button onClick={handlePasswordReset}>Reset Password</button>
          </div>
        );
      };

      export default PasswordReset;
      ```

15. **[21 pontos] Adicionar suporte a testes unitários para componentes críticos**
    - **Descrição**: Adicione testes unitários para componentes críticos usando Jest.
    - **Exemplo de Código**:
      ```jsx
      import { render, screen } from '@testing-library/react';
      import Header from './Header';

      test('renders header component', () => {
        render(<Header />);
        const linkElement = screen.getByText(/EventPlan/i);
        expect(linkElement).toBeInTheDocument();
      });
      ```

16. **[34 pontos] Implementar sistema de notificações push com Firebase Cloud Messaging**
    - **Descrição**: Adicione um sistema de notificações push para alertar os usuários sobre novos eventos e atualizações importantes.
    - **Exemplo de Código**:
      ```js
      // Firebase Cloud Messaging setup
      import firebase from 'firebase/app';
      import 'firebase/messaging';

      const messaging = firebase.messaging();

      messaging.requestPermission()
        .then(() => {
          console.log('Notification permission granted.');
          return messaging.getToken();
        })
        .then(token => {
          console.log('FCM Token:', token);
          // Send the token to your server and update the UI if necessary
        })
        .catch(error => {
          console.error('Unable to get permission to notify.', error);
        });
      ```

17. **[55 pontos] Implementar painel de administração com gráficos e relatórios**
    - **Descrição**: Crie um painel de administração completo com gráficos interativos e relatórios detalhados.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState, useEffect } from 'react';
      import { db } from './firebaseConfig';
      import { Line } from 'react-chartjs-2';

      const AdminPanel = () => {
        const [eventData, setEventData] = useState([]);

        useEffect(() => {
          const fetchData = async () => {
            const data = await db.collection('events').get();
            setEventData(data.docs.map(doc => doc.data()));
          };

          fetchData();
        }, []);

        const data = {
          labels: eventData.map(event => event.date),
          datasets: [
            {
              label: 'Event Registrations',
              data: eventData.map(event => event.registrations),
              borderColor: 'rgba(75,192,192,1)',
              fill: false,
            },
          ],
        };

        return (
          <div>
            <h2>Admin Panel</h2>
            <Line data={data} />
          </div>
        );
      };

      export default AdminPanel;
      ```

18. **[21 pontos] Adicionar autenticação social (Google, Facebook) com Firebase**
    - **Descrição**: Implemente a autenticação social utilizando Firebase Authentication para permitir login via Google e Facebook.
    - **Exemplo de Código**:
      ```jsx
      import React from 'react';
      import firebase from 'firebase/app';
      import 'firebase/auth';

      const SocialAuth = () => {
        const handleGoogleSignIn = () => {
          const provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider)
            .then(result => {
              console.log('User signed in with Google', result.user);
            })
            .catch(error => {
              console.error('Error signing in with Google', error);
            });
        };

        const handleFacebookSignIn = () => {
          const provider = new firebase.auth.FacebookAuthProvider();
          firebase.auth().signInWithPopup(provider)
            .then(result => {
              console.log('User signed in with Facebook', result.user);
            })
            .catch(error => {
              console.error('Error signing in with Facebook', error);
            });
        };

        return (
          <div>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
            <button onClick={handleFacebookSignIn}>Sign in with Facebook</button>
          </div>
        );
      };

      export default SocialAuth;
      ```

19. **[34 pontos] Adicionar funcionalidade de chat em tempo real usando Firebase Realtime Database**
    - **Descrição**: Implemente um sistema de chat em tempo real para os usuários interagirem durante os eventos.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState, useEffect } from 'react';
      import { db } from './firebaseConfig';

      const Chat = () => {
        const [messages, setMessages] = useState([]);
        const [newMessage, setNewMessage] = useState('');

        useEffect(() => {
          const unsubscribe = db.ref('messages').on('value', snapshot => {
            const messagesData = snapshot.val();
            setMessages(Object.values(messagesData));
          });

          return () => unsubscribe();
        }, []);

        const handleSendMessage = () => {
          db.ref('messages').push({ text: newMessage, timestamp: Date.now() });
          setNewMessage('');
        };

        return (
          <div>
            <div>
              {messages.map((msg, index) => (
                <div key={index}>{msg.text}</div>
              ))}
            </div>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message"
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        );
      };

      export default Chat;
      ```

20. **[55 pontos] Implementar sistema de avaliação de eventos**
    - **Descrição**: Adicione um sistema para os usuários avaliarem os eventos que participaram, com média de avaliações e comentários.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState, useEffect } from 'react';
      import { db } from './firebaseConfig';

      const EventRating = ({ eventId }) => {
        const [ratings, setRatings] = useState([]);
        const [newRating, setNewRating] = useState(0);
        const [comment, setComment] = useState('');

        useEffect(() => {
          const unsubscribe = db.collection('events').doc(eventId).collection('ratings')
            .onSnapshot(snapshot => {
              setRatings(snapshot.docs.map(doc => doc.data()));
            });

          return () => unsubscribe();
        }, [eventId]);

        const handleRatingSubmit = () => {
          db.collection('events').doc(eventId).collection('ratings').add({
            rating: newRating,
            comment,
            timestamp: Date.now()
          });
          setNewRating(0);
          setComment('');
        };

        const averageRating = ratings.reduce((acc, rating) => acc + rating.rating, 0) / ratings.length;

        return (
          <div>
            <h3>Event Rating: {averageRating.toFixed(1)}</h3>
            {ratings.map((rating, index) => (
              <div key={index}>
                <p>{rating.rating} stars</p>
                <p>{rating.comment}</p>
              </div>
            ))}
            <input
              type="number"
              value={newRating}
              onChange={(e) => setNewRating(Number(e.target.value))}
              max="5"
              min="1"
            />
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Leave a comment"
            />
            <button onClick={handleRatingSubmit}>Submit Rating</button>
          </div>
        );
      };

      export default EventRating;
      ```

21. **[3 pontos] Adicionar placeholders aos campos de formulário**
    - **Descrição**: Adicione placeholders descritivos aos campos de entrada nos formulários para melhorar a usabilidade.
    - **Exemplo de Código**:
      ```jsx
      import React from 'react';
      import { Form, Button } from 'react-bootstrap';

      const EventForm = () => {
        return (
          <Form>
            <Form.Group controlId="eventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control type="text" placeholder="Enter event name" />
            </Form.Group>
            <Form.Group controlId="eventDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control type="date" placeholder="Select event date" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        );
      };

      export default EventForm;
      ```

22. **[5 pontos] Implementar barra de progresso em uploads**
    - **Descrição**: Adicione uma barra de progresso para uploads de arquivos para melhorar a experiência do usuário.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState } from 'react';
      import { ProgressBar } from 'react-bootstrap';
      import firebase from 'firebase/app';
      import 'firebase/storage';

      const FileUpload = () => {
        const [uploadProgress, setUploadProgress] = useState(0);

        const handleUpload = (e) => {
          const file = e.target.files[0];
          const storageRef = firebase.storage().ref(`uploads/${file.name}`);
          const uploadTask = storageRef.put(file);

          uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
          }, (error) => {
            console.error('Upload failed:', error);
          });
        };

        return (
          <div>
            <input type="file" onChange={handleUpload} />
            <ProgressBar now={uploadProgress} label={`${uploadProgress}%`} />
          </div>
        );
      };

      export default FileUpload;
      ```

23. **[8 pontos] Adicionar botão de logout**
    - **Descrição**: Adicione um botão de logout para permitir que os usuários se desconectem de suas contas.
    - **Exemplo de Código**:
      ```jsx
      import React from 'react';
      import firebase from 'firebase/app';
      import 'firebase/auth';

      const LogoutButton = () => {
        const handleLogout = () => {
          firebase.auth().signOut().then(() => {
            console.log('User signed out.');
          }).catch((error) => {
            console.error('Error signing out:', error);
          });
        };

        return (
          <button onClick={handleLogout}>Logout</button>
        );
      };

      export default LogoutButton;
      ```

24. **[13 pontos] Implementar suporte para múltiplos idiomas**
    - **Descrição**: Adicione suporte para múltiplos idiomas no aplicativo para atender a uma base de usuários global.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState } from 'react';
      import { IntlProvider, FormattedMessage } from 'react-intl';
      import messages from './messages';

      const LanguageSelector = () => {
        const [locale, setLocale] = useState('en');

        const handleChangeLanguage = (e) => {
          setLocale(e.target.value);
        };

        return (
          <IntlProvider locale={locale} messages={messages[locale]}>
            <div>
              <select onChange={handleChangeLanguage}>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
              <p>
                <FormattedMessage id="greeting" defaultMessage="Hello, World!" />
              </p>
            </div>
          </IntlProvider>
        );
      };

      export default LanguageSelector;
      ```

25. **[21 pontos] Implementar autenticação de dois fatores (2FA)**
    - **Descrição**: Adicione suporte para autenticação de dois fatores usando Firebase Authentication.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState } from 'react';
      import firebase from 'firebase/app';
      import 'firebase/auth';

      const TwoFactorAuth = () => {
        const [phoneNumber, setPhoneNumber] = useState('');
        const [verificationCode, setVerificationCode] = useState('');
        const [verificationId, setVerificationId] = useState('');

        const handleSendCode = () => {
          const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
          firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
              setVerificationId(confirmationResult.verificationId);
            }).catch((error) => {
              console.error('Error sending verification code:', error);
            });
        };

        const handleVerifyCode = () => {
          const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
          firebase.auth().signInWithCredential(credential)
            .then((result) => {
              console.log('User signed in with 2FA', result.user);
            }).catch((error) => {
              console.error('Error verifying code:', error);
            });
        };

        return (
          <div>
            <div id="recaptcha-container"></div>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter phone number"
            />
            <button onClick={handleSendCode}>Send Code</button>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Enter verification code"
            />
            <button onClick={handleVerifyCode}>Verify Code</button>
          </div>
        );
      };

      export default TwoFactorAuth;
      ```

26. **[34 pontos] Implementar gerenciamento de eventos recorrentes**
    - **Descrição**: Adicione suporte para criação e gerenciamento de eventos recorrentes.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState } from 'react';
      import { Form, Button } from 'react-bootstrap';

      const RecurringEventForm = () => {
        const [frequency, setFrequency] = useState('daily');

        const handleFrequencyChange = (e) => {
          setFrequency(e.target.value);
        };

        return (
          <Form>
            <Form.Group controlId="eventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control type="text" placeholder="Enter event name" />
            </Form.Group>
            <Form.Group controlId="eventDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control type="date" placeholder="Select event date" />
            </Form.Group>
            <Form.Group controlId="recurrence">
              <Form.Label>Recurrence</Form.Label>
              <Form.Control as="select" value={frequency} onChange={handleFrequencyChange}>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        );
      };

      export default RecurringEventForm;
      ```

27. **[55 pontos] Implementar painel de controle para administradores**
    - **Descrição**: Adicione um painel de controle abrangente para administradores, permitindo a gestão completa dos usuários e eventos.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState, useEffect } from 'react';
      import { db } from './firebaseConfig';
      import { Table, Button } from 'react-bootstrap';

      const AdminDashboard = () => {
        const [users, setUsers] = useState([]);
        const [events, setEvents] = useState([]);

        useEffect(() => {
          const fetchUsers = async () => {
            const userData = await db.collection('users').get();
            setUsers(userData.docs.map(doc => doc.data()));
          };

          const fetchEvents = async () => {
            const eventData = await db.collection('events').get();
            setEvents(eventData.docs.map(doc => doc.data()));
          };

          fetchUsers();
          fetchEvents();
        }, []);

        return (
          <div>
            <h2>Admin Dashboard</h2>
            <h3>Users</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h3>Events</h3>
            <Table striped bordered hover

>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr key={index}>
                    <td>{event.id}</td>
                    <td>{event.name}</td>
                    <td>{event.date}</td>
                    <td>
                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        );
      };

      export default AdminDashboard;
      ```

28. **[21 pontos] Implementar sistema de comentários para eventos**
    - **Descrição**: Adicione um sistema de comentários para que os usuários possam discutir sobre os eventos.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState, useEffect } from 'react';
      import { db } from './firebaseConfig';

      const Comments = ({ eventId }) => {
        const [comments, setComments] = useState([]);
        const [newComment, setNewComment] = useState('');

        useEffect(() => {
          const unsubscribe = db.collection('events').doc(eventId).collection('comments')
            .onSnapshot(snapshot => {
              setComments(snapshot.docs.map(doc => doc.data()));
            });

          return () => unsubscribe();
        }, [eventId]);

        const handleCommentSubmit = () => {
          db.collection('events').doc(eventId).collection('comments').add({
            text: newComment,
            timestamp: Date.now()
          });
          setNewComment('');
        };

        return (
          <div>
            <h3>Comments</h3>
            {comments.map((comment, index) => (
              <div key={index}>
                <p>{comment.text}</p>
              </div>
            ))}
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment"
            />
            <button onClick={handleCommentSubmit}>Submit</button>
          </div>
        );
      };

      export default Comments;
      ```

29. **[34 pontos] Adicionar suporte para pagamento com Stripe**
    - **Descrição**: Integre Stripe para permitir pagamentos e doações para eventos.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState } from 'react';
      import { loadStripe } from '@stripe/stripe-js';
      import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

      const stripePromise = loadStripe('your-publishable-key-here');

      const CheckoutForm = () => {
        const stripe = useStripe();
        const elements = useElements();
        const [error, setError] = useState(null);
        const [success, setSuccess] = useState(false);

        const handleSubmit = async (event) => {
          event.preventDefault();
          const cardElement = elements.getElement(CardElement);

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
          });

          if (error) {
            setError(error.message);
          } else {
            setError(null);
            setSuccess(true);
            console.log('PaymentMethod:', paymentMethod);
          }
        };

        return (
          <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
              Pay
            </button>
            {error && <div>{error}</div>}
            {success && <div>Payment successful!</div>}
          </form>
        );
      };

      const StripePayment = () => {
        return (
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        );
      };

      export default StripePayment;
      ```

30. **[13 pontos] Implementar log de atividades do usuário**
    - **Descrição**: Adicione um log de atividades para monitorar ações dos usuários dentro do aplicativo.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState, useEffect } from 'react';
      import { db } from './firebaseConfig';

      const UserActivityLog = () => {
        const [activities, setActivities] = useState([]);

        useEffect(() => {
          const unsubscribe = db.collection('userActivities').orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
              setActivities(snapshot.docs.map(doc => doc.data()));
            });

          return () => unsubscribe();
        }, []);

        return (
          <div>
            <h3>User Activity Log</h3>
            <ul>
              {activities.map((activity, index) => (
                <li key={index}>{activity.action} at {new Date(activity.timestamp).toLocaleString()}</li>
              ))}
            </ul>
          </div>
        );
      };

      export default UserActivityLog;
      ```
31. **[3 pontos] Melhorar a acessibilidade dos formulários**
    - **Descrição**: Adicione atributos ARIA aos elementos dos formulários para melhorar a acessibilidade para usuários com deficiência.
    - **Exemplo de Código**:
      ```jsx
      import React from 'react';
      import { Form, Button } from 'react-bootstrap';

      const AccessibleForm = () => {
        return (
          <Form>
            <Form.Group controlId="eventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control type="text" placeholder="Enter event name" aria-label="Event Name" />
            </Form.Group>
            <Form.Group controlId="eventDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control type="date" placeholder="Select event date" aria-label="Event Date" />
            </Form.Group>
            <Button variant="primary" type="submit" aria-label="Submit">
              Submit
            </Button>
          </Form>
        );
      };

      export default AccessibleForm;
      ```

32. **[5 pontos] Adicionar animações de carregamento**
    - **Descrição**: Adicione animações de carregamento para melhorar a experiência do usuário ao aguardar por processos.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState } from 'react';
      import { Spinner, Button } from 'react-bootstrap';

      const LoadingButton = () => {
        const [loading, setLoading] = useState(false);

        const handleClick = () => {
          setLoading(true);
          // Simulate a loading process
          setTimeout(() => setLoading(false), 2000);
        };

        return (
          <Button onClick={handleClick} disabled={loading}>
            {loading ? <Spinner as="span" animation="border" size="sm" /> : 'Click me'}
          </Button>
        );
      };

      export default LoadingButton;
      ```

33. **[8 pontos] Adicionar notificações visuais para ações do usuário**
    - **Descrição**: Adicione notificações visuais para feedback imediato sobre as ações dos usuários.
    - **Exemplo de Código**:
      ```jsx
      import React from 'react';
      import { Toast, ToastContainer, Button } from 'react-bootstrap';

      const NotificationToast = () => {
        const [show, setShow] = React.useState(false);

        const toggleShow = () => setShow(!show);

        return (
          <>
            <Button onClick={toggleShow}>
              Show Notification
            </Button>
            <ToastContainer position="top-end" className="p-3">
              <Toast show={show} onClose={toggleShow}>
                <Toast.Header>
                  <strong className="me-auto">Notification</strong>
                </Toast.Header>
                <Toast.Body>Action completed successfully!</Toast.Body>
              </Toast>
            </ToastContainer>
          </>
        );
      };

      export default NotificationToast;
      ```

34. **[13 pontos] Implementar sistema de filtragem de eventos**
    - **Descrição**: Adicione funcionalidade de filtragem para os eventos, permitindo que os usuários filtrem por data, tipo, etc.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState } from 'react';
      import { Form, Button } from 'react-bootstrap';

      const EventFilter = ({ onFilter }) => {
        const [date, setDate] = useState('');
        const [type, setType] = useState('');

        const handleFilter = () => {
          onFilter({ date, type });
        };

        return (
          <Form>
            <Form.Group controlId="filterDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="filterType">
              <Form.Label>Type</Form.Label>
              <Form.Control type="text" value={type} onChange={(e) => setType(e.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={handleFilter}>
              Filter
            </Button>
          </Form>
        );
      };

      export default EventFilter;
      ```

35. **[21 pontos] Implementar suporte a integração com API externa**
    - **Descrição**: Adicione suporte para integração com uma API externa para importar dados de eventos.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState } from 'react';
      import axios from 'axios';

      const ExternalApiIntegration = () => {
        const [events, setEvents] = useState([]);

        const fetchEvents = async () => {
          try {
            const response = await axios.get('https://api.example.com/events');
            setEvents(response.data);
          } catch (error) {
            console.error('Error fetching events:', error);
          }
        };

        return (
          <div>
            <button onClick={fetchEvents}>Fetch Events</button>
            <ul>
              {events.map((event, index) => (
                <li key={index}>{event.name}</li>
              ))}
            </ul>
          </div>
        );
      };

      export default ExternalApiIntegration;
      ```

36. **[34 pontos] Adicionar funcionalidade de exportação de dados para CSV**
    - **Descrição**: Adicione uma funcionalidade para exportar os dados dos eventos para um arquivo CSV.
    - **Exemplo de Código**:
      ```jsx
      import React from 'react';
      import { CSVLink } from 'react-csv';

      const ExportToCSV = ({ data }) => {
        const headers = [
          { label: "Event Name", key: "name" },
          { label: "Date", key: "date" },
          { label: "Type", key: "type" },
        ];

        return (
          <CSVLink data={data} headers={headers} filename="events.csv">
            Export to CSV
          </CSVLink>
        );
      };

      export default ExportToCSV;
      ```

37. **[55 pontos] Implementar suporte para testes end-to-end com Cypress**
    - **Descrição**: Adicione suporte para testes end-to-end utilizando Cypress para garantir a qualidade do fluxo de usuário.
    - **Exemplo de Código**:
      ```jsx
      // cypress/integration/event_test.js
      describe('Event Management', () => {
        it('should create a new event', () => {
          cy.visit('/events');
          cy.contains('Add Event').click();
          cy.get('input[name="name"]').type('New Event');
          cy.get('input[name="date"]').type('2024-07-01');
          cy.get('select[name="type"]').select('Conference');
          cy.contains('Submit').click();
          cy.contains('New Event');
        });

        it('should filter events', () => {
          cy.visit('/events');
          cy.get('input[name="date"]').type('2024-07-01');
          cy.get('input[name="type"]').type('Conference');
          cy.contains('Filter').click();
          cy.contains('Conference');
        });
      });
      ```

38. **[21 pontos] Implementar dashboard de relatórios financeiros**
    - **Descrição**: Adicione um dashboard para visualização de relatórios financeiros dos eventos.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState, useEffect } from 'react';
      import { db } from './firebaseConfig';
      import { Bar } from 'react-chartjs-2';

      const FinancialDashboard = () => {
        const [financialData, setFinancialData] = useState([]);

        useEffect(() => {
          const fetchData = async () => {
            const data = await db.collection('financials').get();
            setFinancialData(data.docs.map(doc => doc.data()));
          };

          fetchData();
        }, []);

        const data = {
          labels: financialData.map(entry => entry.month),
          datasets: [
            {
              label: 'Revenue',
              data: financialData.map(entry => entry.revenue),
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
              label: 'Expenses',
              data: financialData.map(entry => entry.expenses),
              backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
          ],
        };

        return (
          <div>
            <h2>Financial Dashboard</h2>
            <Bar data={data} />
          </div>
        );
      };

      export default FinancialDashboard;
      ```

39. **[34 pontos] Adicionar funcionalidade de upload de imagens para eventos**
    - **Descrição**: Permitir que os usuários façam upload de imagens relacionadas aos eventos.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState } from 'react';
      import { storage } from './firebaseConfig';

      const ImageUpload = () => {
        const [image, setImage] = useState(null);
        const [url, setUrl] = useState('');

        const handleChange = (e) => {
          if (e.target.files[0]) {
            setImage(e.target.files[0]);
          }
        };

        const handleUpload = () => {
          const uploadTask = storage.ref(`images/${image.name}`).put(image);
          uploadTask.on(
            'state_changed',
            (snapshot) => {},
            (error) => {
              console

.error('Upload error:', error);
            },
            () => {
              storage.ref('images').child(image.name).getDownloadURL().then(setUrl);
            }
          );
        };

        return (
          <div>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
            {url && <img src={url} alt="Event" />}
          </div>
        );
      };

      export default ImageUpload;
      ```

40. **[13 pontos] Adicionar funcionalidade de favoritos para eventos**
    - **Descrição**: Permitir que os usuários marquem eventos como favoritos para fácil acesso.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState, useEffect } from 'react';
      import { db } from './firebaseConfig';

      const FavoriteEvents = ({ userId }) => {
        const [favorites, setFavorites] = useState([]);

        useEffect(() => {
          const fetchFavorites = async () => {
            const data = await db.collection('users').doc(userId).collection('favorites').get();
            setFavorites(data.docs.map(doc => doc.data()));
          };

          fetchFavorites();
        }, [userId]);

        const handleFavorite = (eventId) => {
          db.collection('users').doc(userId).collection('favorites').doc(eventId).set({ eventId });
        };

        return (
          <div>
            <h3>Favorites</h3>
            <ul>
              {favorites.map((favorite, index) => (
                <li key={index}>{favorite.eventId}</li>
              ))}
            </ul>
            <button onClick={() => handleFavorite('new-event-id')}>Add to Favorites</button>
          </div>
        );
      };

      export default FavoriteEvents;
      ```

41. **[21 pontos] Implementar página de FAQ interativa**
    - **Descrição**: Adicione uma página de FAQ (Perguntas Frequentes) interativa ao site para fornecer respostas rápidas e úteis para as perguntas mais comuns dos usuários. Esta página deve permitir que os usuários busquem por perguntas e respostas específicas, bem como forneça feedback sobre a utilidade das respostas.
    - **Exemplo de Código**:
      ```jsx
      import React, { useState } from 'react';
      import { Accordion, Card, Button, Form } from 'react-bootstrap';

      const FAQ = () => {
        const [searchTerm, setSearchTerm] = useState('');
        const [faqs, setFaqs] = useState([
          {
            question: "What is EventPlan?",
            answer: "EventPlan is a platform that helps you manage and organize events efficiently.",
            helpful: 0,
            notHelpful: 0
          },
          {
            question: "How do I create an event?",
            answer: "To create an event, log in to your account and navigate to the 'Create Event' section. Fill out the required details and click 'Submit'.",
            helpful: 0,
            notHelpful: 0
          },
          {
            question: "How can I contact support?",
            answer: "You can contact support by emailing support@eventplan.com or by using the contact form on our website.",
            helpful: 0,
            notHelpful: 0
          },
        ]);

        const handleSearch = (e) => {
          setSearchTerm(e.target.value);
        };

        const filteredFaqs = faqs.filter(faq =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const handleFeedback = (index, type) => {
          const updatedFaqs = [...faqs];
          if (type === 'helpful') {
            updatedFaqs[index].helpful += 1;
          } else {
            updatedFaqs[index].notHelpful += 1;
          }
          setFaqs(updatedFaqs);
        };

        return (
          <div className="container mt-5">
            <h2>Frequently Asked Questions</h2>
            <Form.Control
              type="text"
              placeholder="Search FAQs"
              value={searchTerm}
              onChange={handleSearch}
              className="mb-4"
            />
            <Accordion defaultActiveKey="0">
              {filteredFaqs.map((faq, index) => (
                <Card key={index}>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={index.toString()}>
                      {faq.question}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body>
                      <p>{faq.answer}</p>
                      <div>
                        <Button
                          variant="outline-success"
                          size="sm"
                          onClick={() => handleFeedback(index, 'helpful')}
                        >
                          Helpful ({faq.helpful})
                        </Button>{' '}
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleFeedback(index, 'notHelpful')}
                        >
                          Not Helpful ({faq.notHelpful})
                        </Button>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </div>
        );
      };

      export default FAQ;
      ```

    - **Passos para Implementação**:
      1. **Criar Componente FAQ**: Crie um novo componente chamado `FAQ.js` e adicione o código acima.
      2. **Adicionar Rota**: Adicione uma nova rota para a página de FAQ no arquivo de rotas principal da aplicação.
        ```jsx
        import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
        import FAQ from './components/FAQ';

        function App() {
          return (
            <Router>
              <Switch>
                {/* outras rotas */}
                <Route path="/faq" component={FAQ} />
              </Switch>
            </Router>
          );
        }

        export default App;
        ```
      3. **Adicionar Link no Menu**: Adicione um link para a página de FAQ no menu de navegação para facilitar o acesso.
        ```jsx
        import React from 'react';
        import { Navbar, Nav } from 'react-bootstrap';

        const Header = () => {
          return (
            <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="#home">EventPlan</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/faq">FAQ</Nav.Link>
                  {/* outros links */}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          );
        };

        export default Header;
        ```
