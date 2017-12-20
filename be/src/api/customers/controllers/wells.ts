
import * as ExpressPromiseRouter from 'express-promise-router';

const router = ExpressPromiseRouter();

router.get('/:id', async (req, res, next) => {
  const { id } = req.param;
  const energentwellheader = req.app.get('container').get('energentwellheader');

  const headerInformation = await energentwellheader.getWellHeaderInformation(id);

  return res.send(headerInformation);
});


module.exports = router;
