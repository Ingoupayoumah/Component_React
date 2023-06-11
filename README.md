# Component_React
permet la gestion des listes avec react js et de gerer les datas venant d'un objet avec id 
code css 
* {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  padding: 0;
  box-sizing: border-box;
  background: #f2f2f2;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.Booklist {
  width: 90vh;
  margin: 5rem auto;
  display: grid;
  gap: 2rem;
}
.Book {
  background: #fff;
  border-radius: 2rem;
  padding: 2rem;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
  letter-spacing: 0.1em;
}
.Book img {
  width: 100px;
  object-fit: cover;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.Book h1 {
  margin-top: 1rem;
}
.Title {
  border-radius: 2px;
}
@media screen and (min-width: 750px) {
  .Booklist {
    grid-template-columns: repeat(3, 1fr);
  }
}
.Book h3 {
  font-size: 1rem;
  color: aqua;
}

