/* Geral */
body {
    font-family: 'Montserrat', sans-serif;
    background-color: #000;
    color: #fff;
    margin: 0;
    padding: 0;
  }
 
  header {
    background-color: #111;
    padding: 1rem;
  }
 
  .nav {
    display: flex;
    gap: 1rem;
    list-style: none;
    align-items: center;
  }
 
  .nav a {
    color: #ffcc00;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
  }
 
  .nav a:hover {
    color: #fff;
  }
 
  /* Início */
  .inicio-fundo {
    background: url('img/friends-bg.jpg') center/cover no-repeat;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
 
  .inicio-fundo h1 {
    font-size: 2.5rem;
    color: #ffcc00;
    text-shadow: 2px 2px #000;
  }
 
  .btn-inicio {
    background-color: #ffcc00;
    color: #000;
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 10px;
    margin-top: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }
 
  .btn-inicio:hover {
    background-color: #fff;
    transform: scale(1.1);
  }
 
  /* Galeria */
  .grid-galeria {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
 
  .grid-galeria img {
    width: 100%;
    border-radius: 10px;
    border: 2px solid #ffcc00;
  }
 
  /* Curiosidades */
  .curiosidades-lista {
    padding: 1rem 2rem;
  }
 
  .curiosidades-lista li {
    margin: 0.8rem 0;
    font-size: 1.1rem;
    color: #ffcc00;
  }
 
  /* Episódios */
  .episodios-lista {
    padding: 1rem 2rem;
    color: #ffcc00;
  }
 
  .episodios-lista li {
    margin: 0.5rem 0;
  }
 
  /* Estilos dos personagens */
  .estilos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
 
  .personagem img {
    width: 100%;
    border-radius: 10px;
    border: 2px solid #ffcc00;
  }
 
  .personagem p {
    text-align: center;
    margin-top: 0.5rem;
  }
 
  /* Quiz */
  #quiz-container {
    background-color: #222;
    border: 3px solid #ffcc00;
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    position: relative;
    margin: 1rem;
  }
 
  .quiz-question {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #ffcc00;
  }
 
  .quiz-options button {
    display: block;
    margin: 0.5rem auto;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color: #555;
    color: #fff;
    transition: 0.3s;
  }
 
  .quiz-options button:hover {
    background-color: #ffcc00;
    color: #000;
    transform: scale(1.1);
  }
 
  .btn-next {
    margin-top: 1rem;
    background-color: #ffcc00;
    color: #000;
    border: none;
    border-radius: 10px;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
  }
 
  .btn-next:hover {
    background-color: #fff;
    color: #ffcc00;
    transform: scale(1.1);
  }
 
  .quiz-result {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 1rem;
  }
 
  /* Decoração quiz */
  .quiz-decor {
    position: relative;
    height: 100px;
    margin-bottom: 1rem;
  }
 
  .quiz-sofa {
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 150px;
  }
 
  .quiz-caneca {
    position: absolute;
    right: 0;
    top: -10px;
    width: 50px;
  }
 
  /* Contato */
  .formulario {
    background-color: #111;
    padding: 2rem;
    border-radius: 15px;
    width: 90%;
    max-width: 600px;
    margin: 2rem auto;
  }
 
  .formulario input, .formulario textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    border: none;
  }
 
  .formulario button {
    background-color: #ffcc00;
    border: none;
    padding: 0.8rem 2rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }
 
  .formulario button:hover {
    background-color: #fff;
    color: #ffcc00;
    transform: scale(1.1);
  }
 
  /* Footer */
  footer {
    text-align: center;
    padding: 1rem;
    background-color: #111;
    margin-top: 2rem;
  }
  .quiz-container {
    background-color: #282828;
    color: #fff;
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    max-width: 600px;
    margin: 2rem auto;
  }
 
  .quiz-options button {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    background-color: #FF862A;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
  }
 
  .quiz-options button:hover {
    background-color: #ffd700;
    color: #000;
  }
 
  #next-btn {
    margin-top: 15px;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
    background-color: #CB6D43;
    color: #fff;
    cursor: pointer;
  }

