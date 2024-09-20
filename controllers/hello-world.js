class HelloWorld {
  static async helloWorld(req, res) {
    try {
      res.send(`
                <div>
                    <h1>Hello World</h1>
                    <h2>Selemat anda berhasil login</h2>
                </div>
            `);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = HelloWorld;
