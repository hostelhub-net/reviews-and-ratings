const app = express('./server/index.js');
const port = 3003;

app.listen(port, () => console.log(`Server is listening on port ${port}`));
