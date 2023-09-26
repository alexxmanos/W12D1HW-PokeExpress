const React = require('react');
const Layout = require('./Layout');

function New(props) {
  return (
    <Layout>
      <div className="container">
        <h1>Create a New Pokemon</h1>
        <form method="POST" action="/pokemon">
          <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label for="type">Type:</label>
            <input type="text" id="type" name="type" required />
          </div>
          <div className="form-group">
            <label for="description">Description:</label>
            <textarea id="description" name="description" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Create Pokemon</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = New;
