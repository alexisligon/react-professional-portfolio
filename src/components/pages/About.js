import self from '../../img/self.jpeg';

export default function About() {
  return (
    <div>
      <section id="1">
        <div className="d-flex h-100 align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <header className="text-center">
                  <h2 className="text-uppercase lined" id="about">
                    About Me
                  </h2>
                </header>
                <p className="lead">
                  I am a full stack web developer looking for opportunities in
                  contributing to a highly collaborative work environment,
                  finding solutions, and determining customer satisfaction. I
                  have proven experience developing websites using HTML, CSS,
                  and JavaScript. I have designed and developed web applications
                  across multiple APIs, third-party integrations, and databases.
                </p>
                <p>
                  My current skillset includes HTML/CSS, Javascript, jQuery,
                  React, Node.js, SQL, and Express.js. I enjoy learning new
                  skills, discovering the intracacies of the web, and
                  challenging myself creatively.
                </p>
                <p>
                  If I am not working on improving my code, you can find me
                  reading the next Haruki Murakami novel or painting. My cat,
                  Goose, is my muse and best distraction.
                </p>
              </div>
              <div className="col-lg-6">
               <img src={self} alt="self" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
