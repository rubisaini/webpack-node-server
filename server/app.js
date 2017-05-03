/**
 * Created by intelligrape on 3/5/17.
 */
import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config';

const app = express();
const PORT = 4000;
const compiler  = webpack(config);

app.use(require('webpack-dev-middleware') (compiler, {publicPath: config.output.publicPath}));
app.get('/user', function(req, res){
res.send({emp: 1632, org: 'tothenew'});
});
app.listen(PORT, ()=> {
console.log(`Server running on ${PORT}`);
});